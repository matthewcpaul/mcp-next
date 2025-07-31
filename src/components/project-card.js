import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Logo = () => (
  <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="6" r="2" fill="#6B7280"/>
      <path d="M3 12C3 9.79086 4.79086 8 7 8H9C11.2091 8 13 9.79086 13 12" fill="#6B7280"/>
    </svg>
  </div>
);

export default function ProjectCard({ videoSrc, imageSrc, imageAlt, images = [], company, title, paragraphs, logoSrc }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!videoSrc) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoSrc]);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  // Normalize images prop to array of {src, alt}
  const normalizedImages = images.map(img =>
    typeof img === 'string' ? { src: img, alt: title } : img
  );

  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <div className="flex flex-col">
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            {imageSrc && <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />}
          </video>
        ) : imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
        ) : null}
        {/* Render additional images below the video if any */}
        {/* {normalizedImages.length > 0 && (
          <div className="flex flex-col gap-4 lg:gap-8">
            {normalizedImages.map((img, idx) => (
              <Image
                key={img.src + idx}
                src={img.src}
                alt={img.alt || title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            ))}
          </div>
        )} */}
      </div>
      <div className="flex flex-col gap-2 max-w-[31rem]">
        <h3 className="text-base font-semibold tracking-tight lg:text-lg">{title}</h3>
        <div className="flex flex-col gap-4">
          {Array.isArray(paragraphs) ? (
            paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base text-[var(--text-secondary)] lg:text-lg">
                {paragraph}
              </p>
            ))
          ) : (
            <p>
              {paragraphs}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
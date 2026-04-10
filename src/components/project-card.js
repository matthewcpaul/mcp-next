import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function ProjectCard({ videoSrc, imageSrc, imageAlt, title, paragraphs, href }) {
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
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {});
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <Link href={href} className="group flex flex-col gap-3 lg:gap-5">
      <div className="relative flex flex-col">
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
        ) : null}
        <div className="absolute inset-0 bg-background/0 transition-colors duration-200 group-hover:bg-background/40" />
      </div>
      <div className="flex flex-col">
        <span className="text-base lg:text-md font-medium -tracking-[0.0125em] text-pretty">{title}</span>
        <div className="flex flex-col gap-2">
          {Array.isArray(paragraphs) ? (
            paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base lg:text-md -tracking-[0.0125em] text-[var(--text-tertiary)] text-pretty">
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
    </Link>
  );
}
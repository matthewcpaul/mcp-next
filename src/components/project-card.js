import React, { useState, useEffect, useRef } from 'react';

export default function ProjectCard({ videoSrc, imageSrc, imageAlt, title, paragraphs}) {
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
      </div>
      <div className="flex flex-col gap-2 lg:gap-3 max-w-[31rem]">
        <h3 className="text-base font-semibold tracking-tight lg:text-lg">{title}</h3>
        <div className="flex flex-col gap-2 lg:gap-3">
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
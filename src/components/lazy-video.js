import React, { useState, useEffect, useRef } from 'react'

export default function LazyVideo({ src, imageSrc, imageAlt, className = "" }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Auto-play was prevented or failed
            // We can safely ignore this error
          });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      className={className}
    >
      {imageSrc && <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />}
    </video>
  );
}

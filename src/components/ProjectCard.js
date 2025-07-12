import Image from "next/image";

const Logo = () => (
  <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="6" r="2" fill="#6B7280"/>
      <path d="M3 12C3 9.79086 4.79086 8 7 8H9C11.2091 8 13 9.79086 13 12" fill="#6B7280"/>
    </svg>
  </div>
);

export default function ProjectCard({ videoSrc, imageSrc, imageAlt, title, paragraphs, logoSrc }) {
  return (
    <div className="flex flex-col gap-6 mt-6 lg:gap-8 lg:mt-10">
      {videoSrc ? (
        <video autoPlay loop muted preload="auto" playsInline>
          <source src={videoSrc} type="video/mp4" />
          {imageSrc && <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />}
        </video>
        ) : imageSrc ? (
          <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
        ) : null
      }
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-0">
        <div className="flex-1 flex items-center gap-3">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt="Company Avatar"
              width={28}
              height={28}
              className="rounded-full"
            />
          ) : (
            <Logo />
          )}
          <h3 className="text-base lg:text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex flex-col gap-6 lg:gap-7 flex-1 pt-[7px]">
          {Array.isArray(paragraphs) ? (
            paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base lg:text-lg text-[var(--text-secondary)]">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-base lg:text-lg text-[var(--text-secondary)]">
              {paragraphs}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 
"use client"

import { GeistMono } from 'geist/font/mono'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '../../../../public/images/avatar.png'
import { ModeToggle } from '../../../components/mode-toggle'
import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
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
    <div className="">
      <main className="flex flex-col pb-14 lg:pb-20">
        <nav className="sticky top-0 py-4 px-4 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/85 z-10">
          <div className="flex items-center justify-between w-full max-w-[64rem] mx-auto xl:max-w-[70rem]">
            <div className="flex items-center gap-3">
              <Image
                src={Avatar}
                alt="Avatar"
                width={28}
                height={28}
                className="rounded-full"
                unoptimized
              />
              <Link href="/">
                <span className="text-sm font-medium">Matthew Paul</span>
              </Link>
            </div>
            <ModeToggle />
          </div>
        </nav>
        <article className="flex flex-col px-4 mt-24 lg:mt-36">
          <div className="flex flex-col gap-14 max-w-[64rem] mx-auto lg:gap-24 xl:max-w-[70rem]">
            <section className="flex flex-col gap-7 lg:gap-10">
              <h1 className="text-2xl-small font-semibold tracking-tight text-balance lg:text-2xl">Bubble Native Mobile Apps</h1>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-24">
                <div className="flex flex-col">
                <div className={GeistMono.className}>
                  <span className="text-sm font-medium leading-7 tracking-wider uppercase">Summary</span>
                </div>
                <div className="flex flex-col gap-2 sm:max-w-[28rem] lg:gap-3 lg:max-w-none">
                  <p className="text-base text-[var(--text-secondary)] lg:text-lg">Drove the product direction and design for the launch of the largest product expansion in Bubble’s history.</p>
                  <p className="text-base text-[var(--text-secondary)] lg:text-lg">I designed the core concepts for how to design, build, preview, and publish native mobile apps for iOS and Android in a redesigned no-code editor.</p>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12 lg:gap-y-10">
                <div className="flex flex-col">
                  <div className={GeistMono.className}>
                    <span className="text-sm font-medium leading-7 tracking-wider uppercase">Role</span>
                  </div>
                  <div>
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">Lead Product Designer</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className={GeistMono.className}>
                    <span className="text-sm font-medium leading-7 tracking-wider uppercase">Duration</span>
                  </div>
                  <div>
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">2023–2024</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className={GeistMono.className}>
                    <span className="text-sm font-medium leading-7 tracking-wider uppercase">Contributions</span>
                  </div>
                  <div>
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">Product Strategy</p>
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">Design Vision</p>
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">UI & Interaction Design</p>
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">UX Research</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className={GeistMono.className}>
                    <span className="text-sm font-medium leading-7 tracking-wider uppercase">Tools</span>
                  </div>
                  <div>
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">Figma</p>
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">React</p>
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">React Native</p>
                  </div>
                </div>
              </div>
              </div>
            </section>
            <section>
            <div className="flex flex-col gap-5 lg:gap-6">
              <div className="flex flex-col">
                  <video
                    ref={videoRef}
                    src="/videos/compressed/BubbleNativeMobileTabBar.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                  />
              </div>
              <div className="flex flex-col gap-2 lg:gap-3 max-w-[31rem]">
                <p className="text-base text-[var(--text-secondary)] lg:text-lg">Configure the bottom Tab Bar.</p>
              </div>
            </div>
            </section>
          </div>
        </article>
      </main>
      <footer className="px-4 pt-4 pb-8">
        <div className="flex items-center justify-between w-full max-w-[64rem] mx-auto xl:max-w-[70rem]">
          <span className="text-sm font-medium">
            Deployed {process.env.NEXT_PUBLIC_DEPLOY_DATE || 'Next Deploy'}
          </span>
          <Button
            variant="outline"
            size="default"
            onClick={() => window.open('/resume/MatthewPaul_Resume_2025.pdf', '_blank')}
            aria-label="Open resume PDF"
          >
            <FileText className="h-[1.2rem] w-[1.2rem]" /> Resume
          </Button>
          </div>
      </footer>
    </div>
  );
}

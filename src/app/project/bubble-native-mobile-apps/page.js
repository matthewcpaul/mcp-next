"use client"

import { GeistMono } from 'geist/font/mono'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '../../../../public/images/avatar.png'

import { ModeToggle } from '../../../components/mode-toggle'
import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import LazyVideo from '../../../components/lazy-video'

export default function Home() {

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
        <article className="flex flex-col px-4 mt-24 lg:mt-32">
          <div className="flex flex-col gap-8 max-w-[64rem] mx-auto lg:gap-12 xl:max-w-[70rem]">
            <section className="flex flex-col gap-7 lg:gap-10">
              <h1 className="text-2xl-small font-semibold tracking-tight text-balance lg:text-2xl">Bubble Native Mobile Apps</h1>
              <LazyVideo
                src="/videos/compressed/BubbleNativeMobileTabBar.mp4"
                className="mb-3 lg:mb-5"
              />
              <div className="flex flex-col">
              <div className="border-t"></div>
              <div className="grid grid-cols-1 gap-8 py-5 lg:py-7 lg:grid-cols-2 lg:gap-24">
                <div className="flex flex-col">
                  <div className={GeistMono.className}>
                    <span className="text-sm font-medium leading-7 tracking-wider uppercase">Summary</span>
                  </div>
                  <div className="flex flex-col gap-2 sm:max-w-[28rem] lg:gap-3 lg:max-w-none">
                    <p className="text-base text-[var(--text-secondary)] lg:text-lg">Drove the product direction, design, and UX research for a new 0 → 1 product—the largest product expansion in Bubble’s history.</p>
                    <p className="text-base text-[var(--text-secondary)] text-pretty lg:text-lg">I designed the core concepts, interactions, and UI for how to design, build, preview, and publish native mobile apps for iOS and Android in a redesigned no-code editor.</p>
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
                      <p className="text-base text-[var(--text-secondary)] lg:text-lg">Prototyping</p>
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
              <div className="border-t"></div>
              </div>
            </section>
            <section className="flex flex-col gap-8 lg:gap-12">

              <div className="flex flex-col gap-5 lg:gap-6">
                <h2 className="text-md lg:text-xl font-semibold tracking-tight">Congifure bottom Tab Bar</h2>
                <div className="flex flex-col gap-5 lg:gap-6">
                  <div className="flex flex-col gap-2 lg:gap-2">
                    <Image
                    src="/images/BubbleTabItemWorkflowSelect.png"
                    alt="Bubble Native Mobile Tab Item Workflow Select"
                    width={6128}
                    height={3968}
                    />
                    <div className={GeistMono.className}>
                      <p className="text-[0.6875rem] lg:text-sm font-medium leading-7 tracking-wider uppercase text-[var(--text-secondary)]">
                        Selecting a workflow to be triggered by a Tab Item
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-2">
                    <Image
                    src="/images/BubbleNativeMobileTabItems.png"
                    alt="Bubble Native Mobile Tab Items"
                    width={6128}
                    height={3968}
                    />
                    <div className={GeistMono.className}>
                      <p className="text-[0.6875rem] lg:text-sm font-medium leading-7 tracking-wider uppercase text-[var(--text-secondary)]">
                        Tab Bar selected in the Elements Tree and Canvas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t"></div>

              <div className="flex flex-col gap-5 lg:gap-6">
                <h2 className="text-md lg:text-xl font-semibold tracking-tight">Congifure top App Bar</h2>
              </div>
              <div className="border-t"></div>

              <div className="flex flex-col gap-5 lg:gap-6">
                <h2 className="text-md lg:text-xl font-semibold tracking-tight">Implement native Sheets</h2>
              </div>
              <div className="border-t"></div>

              <div className="flex flex-col gap-5 lg:gap-6">
                <h2 className="text-md lg:text-xl font-semibold tracking-tight">Build Swipe Actions</h2>
              </div>
              <div className="border-t"></div>

              <div className="flex flex-col gap-5 lg:gap-6">
                <h2 className="text-md lg:text-xl font-semibold tracking-tight">Web preview</h2>
              </div>
              <div className="border-t"></div>

              <div className="flex flex-col gap-5 lg:gap-6">
                <h2 className="text-md lg:text-xl font-semibold tracking-tight">Native app preview</h2>
              </div>
              <div className="border-t"></div>

              <div className="flex flex-col gap-5 lg:gap-6">
                <h2 className="text-md lg:text-xl font-semibold tracking-tight">App store publish flow</h2>
              </div>
              <div className="border-t"></div>

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

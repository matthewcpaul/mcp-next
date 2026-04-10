"use client"

import { GeistMono } from 'geist/font/mono'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { StickyHeader } from '@/components/sticky-header'
import { Footer } from '@/components/footer'
import LazyVideo from '@/components/lazy-video'

export default function ProjectDetail() {
  return (
    <div className="">
      <main className="flex flex-col pb-14 lg:pb-20">
        <StickyHeader />
        <article className="flex flex-col gap-28 mt-56 px-8">
          <div className="flex flex-col gap-3">
            <p className="text-base text-[var(--text-tertiary)] pl-1">Product Design · 0 → 1</p>
            <h1 className="text-2xl font-medium tracking-tighter">Bubble Native Mobile Apps</h1>
          </div>
          <section className="flex flex-col gap-7 lg:gap-10">
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
                <div className="flex flex-col gap-2">
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
          <div className="grid grid-cols-3 gap-x-8">
            <section className="col-start-2 col-span-2 flex flex-col gap-8 lg:gap-12">
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
      <Footer />
    </div>
  );
}

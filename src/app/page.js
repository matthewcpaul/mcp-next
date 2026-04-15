"use client"

import { GeistMono } from 'geist/font/mono'
import Image from 'next/image'
import Link from 'next/link'
import TestimonialChristine from '../../public/images/TestimonialChristine.jpeg'
import TestimonialNick from '../../public/images/TestimonialNick.jpeg'
import TestimonialSteven from '../../public/images/TestimonialSteven.jpeg'
import TestimonialZack from '../../public/images/TestimonialZack.jpeg'
import ProjectCard from '../components/project-card'
import { StickyHeader } from '@/components/sticky-header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col pb-12">
        <StickyHeader />
        <article className="flex flex-col gap-14 md:gap-28 mt-42 md:mt-56 px-4 lg:px-8">
          <div className="flex flex-col">
            <h1 className="text-lg xs:text-lg-2 md:text-xl lg:text-xxl font-medium tracking-tighter">Matthew Paul</h1>
            <p className="text-lg xs:text-lg-2 md:text-xl lg:text-xxl font-medium tracking-tighter text-[var(--text-tertiary)]">Software Designer</p>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-8 gap-y-8 md:gap-y-10 lg:gap-y-16">
            <ProjectCard
              videoSrc="/videos/compressed/BubbleNativeMobileTabBar.mp4"
              imageSrc="/images/BubbleNativeMobileTabBar.png"
              imageAlt="Bubble Native Mobile Apps"
              title="Bubble Native Mobile Apps"
              href="#"
              paragraphs={[
                "Designing a GUI for building React Native apps"
              ]}
            />
            <ProjectCard
              videoSrc="/videos/compressed/BubbleEditorUI.mp4"
              imageSrc="/images/BubbleEditorUI.png"
              imageAlt="Bubble Editor UI 2"
              title="Bubble Editor UI 2.0"
              href="#"
              paragraphs={[
                "Redesigning and rebuilding a canvas-based visual development tool"
              ]}
            />
            <ProjectCard
              videoSrc="/videos/compressed/TheDotComCMS2.mp4"
              imageSrc="/images/TheDotComCMS.png"
              imageAlt="The.com CMS"
              title="The.com Panel System"
              href="#"
              paragraphs={[
                "Product Design · Interaction Design"
              ]}
            />
            <ProjectCard
              videoSrc="/videos/compressed/TheDotComCSSSheetGroups.mp4"
              imageSrc="/images/TheDotComCSSSheetGroups.png"
              imageAlt="The.com CSS Sheet Groups"
              title="The.com CSS Sheet Groups"
              href="#"
              paragraphs={[
                "Product Design"
              ]}
            />
            <ProjectCard
              videoSrc="/videos/compressed/InVisionInspectMotion.mp4"
              imageSrc="/images/InVisionInspectMotion.png"
              imageAlt="InVision Inspect Motion"
              title="InVision Inspect Motion"
              href="#"
              paragraphs={[
                "Product Design · 0 -> 1"
              ]}
            />
            <ProjectCard
              videoSrc="/videos/compressed/InVisionStudioJiraIntegration.mp4"
              imageSrc="/images/InVisionStudioJiraIntegration.png"
              imageAlt="InVision Studio Jira Integration"
              title="InVision Studio Jira Integration"
              href="#"
              paragraphs={[
                "Product Design"
              ]}
            />
          </section>
          {/* <section className="flex flex-col gap-6 lg:gap-7">
            <div className={GeistMono.className}>
              <h2 className="text-sm font-medium tracking-wider uppercase">Testimonials</h2>
            </div>
            <div className="grid lg:grid-cols-2 lg:gap-x-20">
              <div className="flex gap-3 items-start border-t pt-4 pb-6 lg:pt-6 lg:pb-8">
                <Image
                  src={TestimonialChristine}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full w-7 lg:w-8"
                  unoptimized
                />
                <div className="">
                  <p className="text-base lg:text-lg/8">Christine Shiba</p>
                  <div className={GeistMono.className}>
                    <p className="mb-3 text-base text-[var(--text-secondary)] lg:text-[17px]">Product Designer &#183; Bubble</p>
                  </div>
                  <p className="text-balance text-base text-[var(--text-secondary)] lg:text-lg">Matthew is one of the best designers I’ve ever worked with. He is next level when it comes to design systems, interaction design, and pixel-perfect components. He clearly cares deeply about his craft and transformed Bubble’s design quality threshold by shipping thoughtful designs and advocating across stakeholders. I really enjoyed my time working with him!</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-t pt-4 pb-6 lg:pt-6 lg:pb-8">
                <Image
                  src={TestimonialNick}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full w-7 lg:w-8"
                  unoptimized
                />
                <div className="">
                  <p className="text-base lg:text-lg/8">Nicolas Carroll</p>
                  <div className={GeistMono.className}>
                    <p className="mb-3 text-base text-[var(--text-secondary)] lg:text-[17px]">Product Manager &#183; Bubble</p>
                  </div>
                  <p className="text-balance text-base text-[var(--text-secondary)] lg:text-lg">Matthew and I worked together as founding members of Bubble’s Mobile team. I was really impressed with how quickly he was able to ramp up on Bubble’s product and bring his domain expertise of mobile development and design patterns to craft the vision for the mobile apps editor. He was a strong collaborator with engineering, working closely from project kickoff through design QA to ensure successful releases. I can say with confidence that the mobile product offering would not be where it is today without his design leadership.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-t lg:border-b pt-4 pb-6 lg:pt-6 lg:pb-8">
                <Image
                  src={TestimonialZack}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full w-7 lg:w-8"
                  unoptimized
                />
                <div className="">
                  <p className="text-base lg:text-lg/8">Zack Tanner</p>
                  <div className={GeistMono.className}>
                    <p className="mb-3 text-base text-[var(--text-secondary)] lg:text-[17px]">Engineering Manager &#183; Vercel</p>
                  </div>
                  <p className="text-balance text-base text-[var(--text-secondary)] lg:text-lg">Matthew is a very passionate product designer. As an engineer working with Matthew, it was refreshing to see the amount of care and thought he put into his designs. He genuinely cares about and understands users of the products he builds, and his closeness to developer communities resulted in product designs and features that added value and were well-received within the frontend communities.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start border-t border-b pt-4 pb-6 lg:pt-6 lg:pb-8">
                <Image
                  src={TestimonialSteven}
                  alt="Avatar"
                  width={32}
                  height={32}
                  className="rounded-full w-7 lg:w-8"
                  unoptimized
                />
                <div className="">
                  <p className="text-base lg:text-lg/8">Steven Fabre</p>
                  <div className={GeistMono.className}>
                    <p className="mb-3 text-base text-[var(--text-secondary)] lg:text-[17px]">CEO &#183; Liveblocks</p>
                  </div>
                  <p className="text-balance text-base text-[var(--text-secondary)] lg:text-lg">I worked closely with Matthew for a good portion of his time at InVision, and we also worked together on a project for a couple of months. In that time, I’ve seen him contribute to the InVision design system like no other. He also has a good understanding of the technical side of things, which really pays off when it comes to executing an idea with engineers. Matthew is also a good listener and genuinely cares about improving his skills. It’s rare to find someone willing to use feedback to drive real change and personal growth.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-6 lg:gap-7">
            <div className={GeistMono.className}>
              <h2 className="text-sm font-medium tracking-wider uppercase">Work Experience</h2>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 py-4 border-t lg:py-6">
                <div className="flex gap-3 items-center flex-grow">
                  <Image
                    src="/images/LogoToolshed.svg"
                    alt="Toolshed Logo"
                    width={32}
                    height={32}
                    className="rounded-full w-7 lg:w-8"
                    unoptimized
                  />
                  <span className="text-base lg:text-lg">Toolshed</span>
                </div>
                <span className="text-base lg:text-lg">Independent</span>
                <div className={GeistMono.className}>
                  <span className="text-base text-[var(--text-secondary)] lg:text-[17px]">2024—&nbsp;&nbsp;</span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 border-t lg:py-6">
                <div className="flex gap-3 items-center flex-grow">
                  <Image
                    src="/images/LogoBubble.svg"
                    alt="Bubble Logo"
                    width={32}
                    height={32}
                    className="rounded-full w-7 lg:w-8"
                    unoptimized
                  />
                  <span className="text-base lg:text-lg">Bubble</span>
                </div>
                <span className="text-base lg:text-lg">Lead Product Designer</span>
                <div className={GeistMono.className}>
                  <span className="text-base text-[var(--text-secondary)] lg:text-[17px]">2023—24</span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 border-t lg:py-6">
                <div className="flex gap-3 items-center flex-grow">
                  <Image
                    src="/images/LogoTheDotCom.svg"
                    alt="The.com Logo"
                    width={32}
                    height={32}
                    className="rounded-full w-7 lg:w-8"
                    unoptimized
                  />
                  <span className="text-base lg:text-lg">The.com</span>
                </div>
                <span className="text-base lg:text-lg">Staff Product Designer</span>
                <div className={GeistMono.className}>
                  <span className="text-base text-[var(--text-secondary)] lg:text-[17px]">2022—23</span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 border-t lg:py-6">
                <div className="flex gap-3 items-center flex-grow">
                  <Image
                    src="/images/LogoQAWolf.svg"
                    alt="QA Wolf Logo"
                    width={32}
                    height={32}
                    className="rounded-full w-7 lg:w-8"
                    unoptimized
                  />
                  <span className="text-base lg:text-lg">QA Wolf</span>
                </div>
                <span className="text-base lg:text-lg">Founding Designer</span>
                <div className={GeistMono.className}>
                  <span className="text-base text-[var(--text-secondary)] lg:text-[17px]">2020—21</span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 border-t lg:py-6">
                <div className="flex gap-3 items-center flex-grow">
                  <Image
                    src="/images/LogoInvision.svg"
                    alt="InVision Logo"
                    width={32}
                    height={32}
                    className="rounded-full w-7 lg:w-8"
                    unoptimized
                  />
                  <span className="text-base lg:text-lg">InVision</span>
                </div>
                <span className="text-base lg:text-lg">Senior Product Designer</span>
                <div className={GeistMono.className}>
                  <span className="text-base text-[var(--text-secondary)] lg:text-[17px]">2018—20</span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 border-t border-b lg:py-6">
                <div className="flex gap-3 items-center flex-grow">
                  <Image
                    src="/images/LogoIBM.svg"
                    alt="IBM Logo"
                    width={32}
                    height={32}
                    className="rounded-full w-7 lg:w-8"
                    unoptimized
                  />
                  <span className="text-base lg:text-lg">IBM</span>
                </div>
                <span className="text-base lg:text-lg">Product Designer</span>
                <div className={GeistMono.className}>
                  <span className="text-base text-[var(--text-secondary)] lg:text-[17px]">2014—18</span>
                </div>
              </div>
            </div>
          </section> */}
        </article>
      </main>
      <Footer />
    </div>
  );
}

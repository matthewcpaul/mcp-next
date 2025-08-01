"use client"

import { GeistMono } from 'geist/font/mono';
import { ModeToggle } from '../components/mode-toggle'
import Image from 'next/image';
import Avatar from '../../public/images/avatar.png'
import ProjectCard from '../components/project-card'

export default function Home() {
  return (
    <div className="pb-18">
      <main className="flex flex-col">
        <header className="sticky top-0 py-4 px-4 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/85 z-10">
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
              <span className="text-sm font-medium">Matthew Paul</span>
            </div>
            <ModeToggle />
          </div>
        </header>
        <article className="flex flex-col px-4 mt-24 lg:mt-28">
          <div className="flex flex-col gap-14 max-w-[64rem] mx-auto lg:gap-20 xl:max-w-[70rem]">
            <section className="flex flex-col gap-3 max-w-[24rem] sm:max-w-[28rem] lg:gap-4 lg:max-w-[32rem]">
              <h1 className="text-2xl-small font-semibold tracking-tight text-balance lg:text-2xl">Software<br />product designer</h1>
              <p className="text-base text-[var(--text-secondary)] lg:text-lg">10+ years of experience designing 0 → 1 products, shipping software at scale, and building design systems. Specializing in designer, developer, and collaboration tools.</p>
            </section>
            <section className="flex flex-col gap-6 lg:gap-7">
              <div className={GeistMono.className}>
                <h2 className="text-sm font-medium tracking-wider uppercase">Selected Work</h2>
              </div>
              <div className="flex flex-col gap-16 lg:gap-24">
                <ProjectCard
                  videoSrc="/images/BubbleNativeMobileTabBar.mp4"
                  imageSrc="/images/BubbleNativeMobileTabBar.png"
                  imageAlt="Bubble Native Mobile Apps"
                  company="Bubble"
                  title="Bubble Native Mobile Apps"
                  logoSrc="/images/LogoBubble.svg"
                  paragraphs={[
                    "Drove the product direction and design for the launch of the largest product expansion in Bubble’s history.",
                    "I designed the core concepts for how to design, build, preview, and publish native mobile apps for iOS and Android in a redesigned no-code editor."
                  ]}
                />
                <ProjectCard
                  videoSrc="/images/BubbleEditorUI2.mp4"
                  imageSrc="/images/BubbleEditorUI.png"
                  imageAlt="Bubble Editor UI"
                  company="Bubble"
                  title="Bubble Editor UI"
                  logoSrc="/images/LogoBubble.svg"
                  paragraphs={[
                    "Designed the new UI for the Bubble editor, which is used by over 5M developers to build their apps.",
                    "I led the design for the toolbar, tab bar, elements tree, property editor, and dark mode. I worked with multiple designers and engineering teams to help with implementation and cohesion."
                  ]}
                />
                {/* <ProjectCard
                  imageSrc="/images/TheDotCom.png"
                  imageAlt="Bubble Pop Design System"
                  title="Bubble Pop Design System"
                  logoSrc="/images/LogoBubble.svg"
                  paragraphs={[
                    "Placeholder"
                  ]}
                /> */}
                <ProjectCard
                  videoSrc="/images/TheDotComCMS.mp4"
                  imageSrc="/images/TheDotComCMS.png"
                  imageAlt="The.com CMS"
                  company="The.com"
                  title="The.com CMS"
                  logoSrc="/images/LogoTheDotCom.svg"
                  paragraphs={[
                    "Led product, design, and design systems for The.com’s no-code, sheet-based website builder and CMS tools.",
                    "I learned from early customers through generative and evaluative research, iterated and improved on the core product, and designed a brand new product surface area for editing page content."
                  ]}
                />
                <ProjectCard
                  imageSrc="/images/TheDotComCSSSheetGroups.png"
                  imageAlt="The.com CSS Sheet Groups"
                  title="The.com CSS Sheet Groups"
                  logoSrc="/images/LogoTheDotCom.svg"
                  paragraphs={[
                    "Placeholder"
                  ]}
                />
                <ProjectCard
                  videoSrc="/images/InVisionInspectMotion.mp4"
                  imageSrc="/images/InVisionInspectMotion.png"
                  imageAlt="InVision Inspect Motion"
                  company="InVision"
                  title="InVision Inspect Motion"
                  logoSrc="/images/LogoInvision.svg"
                  paragraphs={[
                    "Placeholder"
                  ]}
                />
                <ProjectCard
                  videoSrc="/images/InVisionStudioJiraIntegration.mp4"
                  imageSrc="/images/InVisionStudioJiraIntegration.png"
                  imageAlt="InVision Studio Jira Integration"
                  company="InVision"
                  title="InVision Studio Jira Integration"
                  logoSrc="/images/LogoInvision.svg"
                  paragraphs={[
                    "Placeholder"
                  ]}
                />
              </div>
            </section>
          </div>
        </article>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

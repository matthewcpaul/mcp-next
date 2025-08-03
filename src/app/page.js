"use client"

import { GeistMono } from 'geist/font/mono';
import { ModeToggle } from '../components/mode-toggle'
import Image from 'next/image';
import Avatar from '../../public/images/avatar.png'
import LogoToolshed from '../../public/images/LogoToolshed.svg'
import LogoBubble from '../../public/images/LogoBubble.svg'
import LogoTheDotCom from '../../public/images/LogoTheDotCom.svg'
import LogoQAWolf from '../../public/images/LogoQAWolf.svg'
import LogoInvision from '../../public/images/LogoInvision.svg'
import LogoIBM from '../../public/images/LogoIBM.svg'
import ProjectCard from '../components/project-card'

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col pb-14 lg:pb-20">
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
        <article className="flex flex-col px-4 mt-24 lg:mt-36">
          <div className="flex flex-col gap-20 max-w-[64rem] mx-auto lg:gap-24 xl:max-w-[70rem]">
            <section className="flex flex-col gap-3 max-w-[24rem] sm:max-w-[28rem] lg:gap-4 lg:max-w-[32rem]">
              <h1 className="text-2xl-small font-semibold tracking-tight text-balance lg:text-2xl">Software<br />product designer</h1>
              <p className="text-base text-[var(--text-secondary)] lg:text-lg">10+ years of experience designing 0 → 1 products, shipping software at scale, and building design systems. Specializing in designer, developer, and collaboration tools.</p>
            </section>
            <section className="flex flex-col gap-6 lg:gap-7">
              <div className={GeistMono.className}>
                <h2 className="text-sm font-medium tracking-wider uppercase">Selected Work</h2>
              </div>
              <div className="flex flex-col gap-8 lg:gap-12">
                <ProjectCard
                  videoSrc="/images/BubbleNativeMobileTabBar.mp4"
                  imageSrc="/images/BubbleNativeMobileTabBar.png"
                  imageAlt="Bubble Native Mobile Apps"
                  title="Bubble Native Mobile Apps"
                  logoSrc="/images/LogoBubble.svg"
                  paragraphs={[
                    "Drove the product direction and design for the launch of the largest product expansion in Bubble’s history.",
                    "I designed the core concepts for how to design, build, preview, and publish native mobile apps for iOS and Android in a redesigned no-code editor."
                  ]}
                />
                <div className="border-t mb-2 lg:mb-3"></div>
                <ProjectCard
                  videoSrc="/images/BubbleEditorUI2.mp4"
                  imageSrc="/images/BubbleEditorUI.png"
                  imageAlt="Bubble Editor UI"
                  title="Bubble Editor UI"
                  logoSrc="/images/LogoBubble.svg"
                  paragraphs={[
                    "Designed the new UI for the Bubble editor, which is used by over 5M developers to build their apps.",
                    "I led the design for the toolbar, tab bar, elements tree, property editor, and dark mode. I worked with multiple designers and engineering teams to help with implementation and cohesion."
                  ]}
                />
                <div className="border-t mb-2 lg:mb-3"></div>
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
                  title="The.com CMS"
                  logoSrc="/images/LogoTheDotCom.svg"
                  paragraphs={[
                    "Led product, design, and design systems for The.com’s no-code, sheet-based website builder and CMS tools.",
                    "I learned from early customers through generative and evaluative research, iterated and improved on the core product, and designed a brand new product surface area for editing page content."
                  ]}
                />
                <div className="border-t mb-2 lg:mb-3"></div>
                <ProjectCard
                  videoSrc="/images/TheDotComCSSSheetGroups.mp4"
                  imageSrc="/images/TheDotComCSSSheetGroups.png"
                  imageAlt="The.com CSS Sheet Groups"
                  title="The.com CSS Sheet Groups"
                  logoSrc="/images/LogoTheDotCom.svg"
                  paragraphs={[
                    "Placeholder"
                  ]}
                /><div className="border-t mb-2 lg:mb-3"></div>
                <ProjectCard
                  videoSrc="/images/InVisionInspectMotion.mp4"
                  imageSrc="/images/InVisionInspectMotion.png"
                  imageAlt="InVision Inspect Motion"
                  title="InVision Inspect Motion"
                  logoSrc="/images/LogoInvision.svg"
                  paragraphs={[
                    "Placeholder"
                  ]}
                /><div className="border-t mb-2 lg:mb-3"></div>
                <ProjectCard
                  videoSrc="/images/InVisionStudioJiraIntegration.mp4"
                  imageSrc="/images/InVisionStudioJiraIntegration.png"
                  imageAlt="InVision Studio Jira Integration"
                  title="InVision Studio Jira Integration"
                  logoSrc="/images/LogoInvision.svg"
                  paragraphs={[
                    "Placeholder"
                  ]}
                />
              </div>
            </section>
            <section className="flex flex-col gap-6 lg:gap-7">
              <div className={GeistMono.className}>
                <h2 className="text-sm font-medium tracking-wider uppercase">Work Experience</h2>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 py-4 border-t dark:border-border lg:py-6">
                  <div className="flex gap-3 items-center flex-grow">
                    <Image
                      src={LogoToolshed}
                      alt="Avatar"
                      width={32}
                      height={32}
                      className="rounded-full w-7 lg:w-8"
                      unoptimized
                    />
                    <span className="text-base lg:text-lg">Toolshed</span>
                  </div>
                  <span className="text-base lg:text-lg">Independent</span>
                  <div className={GeistMono.className}>
                    <span className="text-base text-[var(--text-secondary)] lg:text-[17px]">2025—&nbsp;&nbsp;</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4 border-t dark:border-border lg:py-6">
                  <div className="flex gap-3 items-center flex-grow">
                    <Image
                      src={LogoBubble}
                      alt="Avatar"
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
                <div className="flex items-center gap-4 py-4 border-t dark:border-border lg:py-6">
                  <div className="flex gap-3 items-center flex-grow">
                    <Image
                      src={LogoTheDotCom}
                      alt="Avatar"
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
                <div className="flex items-center gap-4 py-4 border-t dark:border-border lg:py-6">
                  <div className="flex gap-3 items-center flex-grow">
                    <Image
                      src={LogoQAWolf}
                      alt="Avatar"
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
                <div className="flex items-center gap-4 py-4 border-t dark:border-border lg:py-6">
                  <div className="flex gap-3 items-center flex-grow">
                    <Image
                      src={LogoInvision}
                      alt="Avatar"
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
                <div className="flex items-center gap-4 py-4 border-t border-b dark:border-border lg:py-6">
                  <div className="flex gap-3 items-center flex-grow">
                    <Image
                      src={LogoIBM}
                      alt="Avatar"
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
            </section>
          </div>
        </article>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

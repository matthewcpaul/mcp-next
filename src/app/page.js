"use client"

import { GeistMono } from 'geist/font/mono';
import { ModeToggle } from '../components/mode-toggle'
import Image from 'next/image';
import Avatar from '../../public/images/avatar.png'
import TestimonialChristine from '../../public/images/TestimonialChristine.jpeg'
import TestimonialNick from '../../public/images/TestimonialNick.jpeg'
import TestimonialSteven from '../../public/images/TestimonialSteven.jpeg'
import TestimonialZack from '../../public/images/TestimonialZack.jpeg'
import LogoToolshed from '../../public/images/LogoToolshed.svg'
import LogoBubble from '../../public/images/LogoBubble.svg'
import LogoTheDotCom from '../../public/images/LogoTheDotCom.svg'
import LogoQAWolf from '../../public/images/LogoQAWolf.svg'
import LogoInvision from '../../public/images/LogoInvision.svg'
import LogoIBM from '../../public/images/LogoIBM.svg'
import ProjectCard from '../components/project-card'
import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
                    "I led the design for the toolbar, tab bar, elements tree, property editor, and dark mode. I collaborated with multiple designers and engineering teams to facilitate implementation and ensure cohesion."
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
                    "Designed a more user-friendly way to style pages that introduced concepts from common CSS groupings and spreadsheet column groups.",
                    "This addition to the existing CSS sheet editing eliminated the never-ending scrolling of columns. The feature resulted in improved user education and quicker style edits."
                  ]}
                />
                <div className="border-t mb-2 lg:mb-3"></div>
                <ProjectCard
                  videoSrc="/images/InVisionInspectMotion.mp4"
                  imageSrc="/images/InVisionInspectMotion.png"
                  imageAlt="InVision Inspect Motion"
                  title="InVision Inspect Motion"
                  logoSrc="/images/LogoInvision.svg"
                  paragraphs={[
                    "Led product design of a new 0 → 1 designer/developer collaboration tool that had never existed before.",
                    "Inspect Motion allows developers to find every detail—start and end values, duration, delay, and easing curves—for any animating property on any element from a prototype."
                  ]}
                />
                <div className="border-t mb-2 lg:mb-3"></div>
                <ProjectCard
                  videoSrc="/images/InVisionStudioJiraIntegration.mp4"
                  imageSrc="/images/InVisionStudioJiraIntegration.png"
                  imageAlt="InVision Studio Jira Integration"
                  title="InVision Studio Jira Integration"
                  logoSrc="/images/LogoInvision.svg"
                  paragraphs={[
                    "I led a design sprint with InVision and Atlassian to ideate on how our products could work together.",
                    "This feature I designed brought Jira orgs, sprints, filters, and issues directly into the workflow in InVision Studio, allowing designers to sync screens and prototypes without leaving their design tool."
                  ]}
                />
              </div>
            </section>
            <section className="flex flex-col gap-6 lg:gap-7">
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
                    <span className="text-base text-[var(--text-secondary)] lg:text-[17px]">2024—&nbsp;&nbsp;</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 py-4 border-t lg:py-6">
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
                <div className="flex items-center gap-4 py-4 border-t lg:py-6">
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
                <div className="flex items-center gap-4 py-4 border-t lg:py-6">
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
                <div className="flex items-center gap-4 py-4 border-t lg:py-6">
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
                <div className="flex items-center gap-4 py-4 border-t border-b lg:py-6">
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
      <footer className="px-4 pt-4 pb-8">
        <div className="flex items-center justify-between w-full max-w-[64rem] mx-auto xl:max-w-[70rem]">
          <span className="text-sm font-medium">
            Published {process.env.NEXT_PUBLIC_DEPLOY_DATE || 'Next Deploy'}
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

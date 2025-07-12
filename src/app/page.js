import Image from "next/image";
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="px-6 sm:px-12 lg:px-20 pb-18 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col max-w-[70rem] mx-auto">
        <header className="flex flex-col items-start sticky top-0 py-6 bg-[var(--background)]">
          <div className="flex items-center gap-3">
            <img
              src="/images/Avatar.png"
              alt="Avatar"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-base font-medium">Matthew Paul</span>
          </div>
        </header>
        <article className="flex flex-col gap-16 mt-16 lg:gap-32 lg:mt-40">
          <section className="flex flex-col gap-8 lg:gap-14">
            <h1 className="text-2xl-small lg:text-2xl font-semibold tracking-tight">Product designer and design engineer specializing in designer, developer, and collaboration tools</h1>
            <div className="grid grid-cols-1">
              <p className="text-lg lg:text-xl text-[var(--text-secondary)]">12+ years of experience designing 0 → 1 products, shipping software at scale, and building design systems.</p>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-lg lg:text-xl font-semibold tracking-tight">Selected Work</h2>
            <div className="flex flex-col gap-10 lg:gap-22">
              <ProjectCard
                videoSrc="/images/BubbleNativeMobileTabBar.mp4"
                imageSrc="/images/TheDotCom.png"
                imageAlt="Bubble Native Mobile Apps"
                title="Bubble Native Mobile Apps"
                logoSrc="/images/LogoBubble.svg"
                paragraphs={[
                  "Drove the direction, led the design, and executed on the details for the launch of the largest product expansion in Bubble's history.",
                  "I designed the core concepts for how to design, build, preview, and publish native mobile apps for iOS and Android in a redesigned no-code editor."
                ]}
              />
              <ProjectCard
                imageSrc="/images/TheDotCom.png"
                imageAlt="Bubble Editor UI"
                title="Bubble Editor UI"
                logoSrc="/images/LogoBubble.svg"
                paragraphs={[
                  "Placeholder"
                ]}
              />
              <ProjectCard
                imageSrc="/images/TheDotCom.png"
                imageAlt="Bubble Pop Design System"
                title="Bubble Pop Design System"
                logoSrc="/images/LogoBubble.svg"
                paragraphs={[
                  "Placeholder"
                ]}
              />
              <ProjectCard
                videoSrc="/images/TheDotCom.mp4"
                imageSrc="/images/TheDotCom.png"
                imageAlt="The.com Page Generation"
                title="The.com Page Generation"
                logoSrc="/images/LogoTheDotCom.svg"
                paragraphs={[
                  "Led product, design, and design systems for The.com's no-code, sheet-based website builder and CMS tools.",
                  "I learned from early customers through generative and evaluative research, iterated and improved on the core product, and designed a brand new product surface area called Page Generation."
                ]}
              />
              <ProjectCard
                imageSrc="/images/TheDotCom.png"
                imageAlt="The.com Navigation UI"
                title="The.com Navigation UI"
                logoSrc="/images/LogoTheDotCom.svg"
                paragraphs={[
                  "Placeholder"
                ]}
              />
              <ProjectCard
                imageSrc="/images/TheDotCom.png"
                imageAlt="QA Wolf Web App"
                title="QA Wolf Web App"
                logoSrc="/images/LogoQAWolf.svg"
                paragraphs={[
                  "Placeholder"
                ]}
              />
              <ProjectCard
                imageSrc="/images/TheDotCom.png"
                imageAlt="InVision Inspect Motion"
                title="InVision Inspect Motion"
                logoSrc="/images/LogoInvision.svg"
                paragraphs={[
                  "Placeholder"
                ]}
              />
              <ProjectCard
                imageSrc="/images/TheDotCom.png"
                imageAlt="InVision Studio Jira Integration"
                title="InVision Studio Jira Integration"
                logoSrc="/images/LogoInvision.svg"
                paragraphs={[
                  "Placeholder"
                ]}
              />
            </div>
          </section>
        </article>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

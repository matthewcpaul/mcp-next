import Image from "next/image";
import BubbleNativeMobileApps from '../../public/images/bubble-native-mobile-apps.png'
import TheDotComAutomatedPages from '../../public/images/the-dot-com-automated-pages.png'
import Avatar from '../../public/images/avatar.png'

export default function Home() {
  return (
    <div className="max-w-[680px] mx-auto px-6 sm:px-8 pb-18 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <header className="flex flex-col items-start sticky top-0 py-6 bg-[var(--background)]">
          <div className="flex items-center gap-3">
            <Image
              src={Avatar}
              alt="Avatar"
              width={28}
              height={28}
              className="rounded-full"
            />
            <a className="font-semibold">Matthew Paul</a>
          </div>
        </header>
        <article className="flex flex-col gap-16 mt-10">
          <section className="flex flex-col">
            <h1 className="font-semibold text-2xl">Software Product Designer</h1>
            <p className="text-[var(--text-secondary)] mt-3">Product Designer and Design Engineer specializing in designer, developer, and collaboration tools.</p>
            <p className="text-[var(--text-secondary)]">I have 12+ years of experience designing 0 – 1 products, shipping software at scale, and building and maintaining design systems.</p>
          </section>
          <section className="flex flex-col">
            <h2 className="font-semibold text-2xl">Selected Work</h2>
            <div className="flex flex-col mt-6">
              <Image
                src={BubbleNativeMobileApps}
                alt="Thumbnail of Bubble Native Mobile Apps"
                priority
              />
              <h3 className="font-semibold mt-5">Bubble Native Mobile Apps</h3>
              <p className="text-[var(--text-secondary)]">Drove the direction, led the design, and executed on the details for the launch of the largest product expansion in Bubble’s history.</p>
              <p className="text-[var(--text-secondary)]">I designed the core concepts for how to design, build, preview, and publish native mobile apps for iOS and Android in a newly redesigned no-code editor.</p>
            </div>
            <div className="flex flex-col mt-16">
              <Image
                src={TheDotComAutomatedPages}
                alt="Thumbnail of The.com Page Generation"
              />
              <h3 className="font-semibold mt-5">The.com Page Generation</h3>
              <p className="text-[var(--text-secondary)]">Led product, design, and design systems for The.com’s no-code, sheet-based website builder and CMS tooling.</p>
              <p className="text-[var(--text-secondary)]">I learned from early customers through generative and evaluative research, iterated and improved on the core product, and designed a brand new product surface area called Page Generation.</p>
            </div>
          </section>
        </article>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

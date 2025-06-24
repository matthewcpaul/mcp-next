import Image from "next/image";
import BubbleNativeMobileApps from '../../public/images/bubble-native-mobile-apps.png'
import TheDotComAutomatedPages from '../../public/images/the-dot-com-automated-pages.png'
import Avatar from '../../public/images/avatar.png'

export default function Home() {
  return (
    <div className="px-6 sm:px-12 md:px-20 pb-18 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col max-w-[64rem] mx-auto">
        <header className="flex flex-col items-start sticky top-0 py-6 bg-[var(--background)]">
          <div className="flex items-center gap-3">
            <Image
              src={Avatar}
              alt="Avatar"
              width={28}
              height={28}
              className="rounded-full"
            />
            <a className="font-medium">Matthew Paul</a>
          </div>
        </header>
        <article className="flex flex-col gap-10 md:gap-16 mt-16 md:mt-24">
          <section className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-semibold">Product Designer</h1>
            <div className="grid grid-cols-1 mt-3">
              <p className="max-w-[30rem] md:max-w-[34rem] text-base md:text-lg text-[var(--text-secondary)]">Software product designer with 12+ years of experience specializing in designer, developer, and collaboration tools.</p>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
            <div className="flex flex-col gap-6 md:gap-8 mt-6">
              <Image
                src={BubbleNativeMobileApps}
                alt="Thumbnail of Bubble Native Mobile Apps"
                priority
              />
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 md:gap-20">
                <h3 className="flex-1 text-base md:text-lg font-semibold">Bubble Native Mobile Apps</h3>
                <div className="flex flex-col gap-6 md:gap-7 flex-1">
                  <p className="text-base md:text-lg text-[var(--text-secondary)]">Drove the direction, led the design, and executed on the details for the launch of the largest product expansion in Bubble’s history.</p>
                  <p className="text-base md:text-lg text-[var(--text-secondary)]">I designed the core concepts for how to design, build, preview, and publish native mobile apps for iOS and Android in a redesigned no-code editor.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 mt-16 md:mt-20">
              <Image
                src={TheDotComAutomatedPages}
                alt="Thumbnail of The.com Page Generation"
              />
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 md:gap-20">
                <h3 className="flex-1 text-base md:text-lg font-semibold">The.com Page Generation</h3>
                <div className="flex flex-col gap-6 md:gap-7 flex-1">
                  <p className="text-base md:text-lg text-[var(--text-secondary)]">Led product, design, and design systems for The.com’s no-code, sheet-based website builder and CMS tools.</p>
                  <p className="text-base md:text-lg text-[var(--text-secondary)]">I learned from early customers through generative and evaluative research, iterated and improved on the core product, and designed a brand new product surface area called Page Generation.</p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}

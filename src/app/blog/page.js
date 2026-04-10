import { StickyHeader } from '@/components/sticky-header'
import { Footer } from '@/components/footer'

export default function Blog() {
  return (
    <div>
      <main className="flex flex-col pb-12 min-h-[calc(100vh-64px)]">
        <StickyHeader />
        <article className="flex flex-col gap-16 md:gap-28 mt-48 md:mt-56 px-4 lg:px-8">
          <div className="flex flex-col">
            <h1 className="text-lg xs:text-lg-2 md:text-xl lg:text-xxl font-medium tracking-tighter">Blog</h1>
            <p className="text-lg xs:text-lg-2 md:text-xl lg:text-xxl font-medium tracking-tighter text-[var(--text-tertiary)]">Coming soon</p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

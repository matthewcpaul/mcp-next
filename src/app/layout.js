import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const InterVariable = localFont({
  src: '../../public/fonts/InterVariable.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
})

export const metadata = {
  title: "Matthew Paul",
  description: "Software product designer specializing in designer, developer, and collaboartion tools",
  keywords: ['Matthew Paul', 'Product Designer', 'Designer', 'Software Designer', 'Design Systems', 'Design Engineer'],
  creator: 'Matthew Paul',
  openGraph: {
    title: 'Matthew Paul',
    description: 'Software product designer specializing in designer, developer, and collaboartion tools',
    url: 'https://matthewcpaul.com',
    siteName: 'Matthew Paul',
    images: [
      {
        url: 'https://matthewcpaul.com/og/social-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={InterVariable.className} suppressHydrationWarning>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html:
          `try{if(!sessionStorage.getItem("_s")){sessionStorage.setItem("_s","1");localStorage.removeItem("theme")}}catch(e){}`
        }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

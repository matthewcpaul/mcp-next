import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: "Matthew Paul",
  description: "Software Designer specializing in designer, developer, and collaboartion tools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '@public/images/Avatar.jpg'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Work', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export function StickyHeader() {
  const [showName, setShowName] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [hasBeenToggled, setHasBeenToggled] = useState(false)
  const pathname = usePathname()
  const hamburgerRef = useRef(null)
  const overlayRef = useRef(null)
  const scrollYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      setShowName(window.scrollY > 290)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = useCallback(() => {
    if (menuOpen && !isClosing) {
      setIsClosing(true)
    }
  }, [menuOpen, isClosing])

  function toggleMenu() {
    if (menuOpen && !isClosing) {
      setIsClosing(true)
    } else if (isClosing) {
      setIsClosing(false)
    } else {
      setMenuOpen(true)
      setHasBeenToggled(true)
    }
  }

  function handleOverlayAnimationEnd(e) {
    if (e.target === e.currentTarget && isClosing) {
      setMenuOpen(false)
      setIsClosing(false)
    }
  }

  // Close menu on route change
  useEffect(() => {
    if (menuOpen) {
      closeMenu()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Close on resize past md breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 40rem)')
    const handler = () => {
      if (mq.matches && menuOpen) {
        setMenuOpen(false)
        setIsClosing(false)
      }
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [menuOpen])

  // iOS-safe body scroll lock (stays locked through close animation)
  useEffect(() => {
    if (menuOpen) {
      scrollYRef.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        window.scrollTo(0, scrollYRef.current)
      }
    }
  }, [menuOpen])

  // Escape key to close
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [menuOpen, closeMenu])

  // Focus management: move focus into overlay on open, restore on close
  useEffect(() => {
    if (menuOpen && !isClosing && overlayRef.current) {
      const firstLink = overlayRef.current.querySelector('a, button')
      if (firstLink) firstLink.focus()
    }
    if (!menuOpen && hasBeenToggled && hamburgerRef.current) {
      hamburgerRef.current.focus()
    }
  }, [menuOpen, isClosing])

  function isActive(href) {
    if (href === '/') return pathname === '/' || pathname.startsWith('/work')
    return pathname.startsWith(href)
  }

  const hamburgerAnimClass = menuOpen && !isClosing
    ? 'hamburger-open'
    : isClosing
      ? 'hamburger-close'
      : hasBeenToggled
        ? 'hamburger-close'
        : ''

  return (
    <>
      <div className="sticky top-0 py-4 px-4 lg:px-8 bg-background/90 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70 dark:supports-[backdrop-filter]:bg-background/90 z-10">
        <div className="flex flex-row gap-x-4 lg:gap-x-8 items-center">
          <div className="flex-1 flex flex-row gap-3 items-center">
            <Link href="/" className="flex flex-row gap-3 items-center">
              <Image
                src={Avatar}
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full lg:w-8 lg:h-8"
                unoptimized
              />
              <span className={`text-base font-medium transition-all duration-150 ease-out ${
                showName || (menuOpen && !isClosing)
                  ? 'opacity-100 translate-y-0'
                  : isClosing
                    ? 'opacity-0 translate-y-0'
                    : 'opacity-0 translate-y-2'
              }`}>
                Matthew Paul
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 flex-row gap-8 justify-between items-center">
            <nav className="flex flex-row gap-8">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-base font-medium transition-colors ${
                    isActive(href)
                      ? 'text-foreground'
                      : 'text-[var(--text-tertiary)] hover:text-foreground'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <ModeToggle />
          </div>

          {/* Mobile hamburger */}
          <Button
            ref={hamburgerRef}
            variant="ghost"
            size="icon"
            className="md:hidden focus-visible:outline-none focus-visible:ring-0"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className={`relative w-4 h-4 ${hamburgerAnimClass}`}>
              <span className="hamburger-line hamburger-line-top" />
              <span className="hamburger-line hamburger-line-bottom" />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile overlay -- rendered outside the sticky header so backdrop-filter doesn't break fixed positioning */}
      {menuOpen && (
        <div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          className="fixed inset-x-0 bottom-0 md:hidden flex flex-col px-4 py-4 bg-background/90 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70 dark:supports-[backdrop-filter]:bg-background/90 z-10"
          style={{
            top: '64px',
            animation: isClosing
              ? 'mobileMenuFadeOut 150ms ease-in forwards'
              : 'mobileMenuFadeIn 200ms ease-out forwards',
          }}
          onAnimationEnd={handleOverlayAnimationEnd}
          onKeyDown={(e) => {
            if (e.key !== 'Tab') return
            const focusable = overlayRef.current?.querySelectorAll(
              'a[href], button:not([disabled])'
            )
            if (!focusable || focusable.length === 0) return
            const first = focusable[0]
            const last = focusable[focusable.length - 1]
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault()
              last.focus()
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault()
              first.focus()
            }
          }}
        >
          <nav className="flex flex-col">
            {navLinks.map(({ label, href }, i) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`text-base font-medium py-3 transition-colors ${
                  isActive(href)
                    ? 'text-foreground'
                    : 'text-[var(--text-tertiary)] hover:text-foreground'
                }`}
                style={{
                  opacity: 0,
                  animation: isClosing
                    ? 'none'
                    : `mobileMenuItemIn 250ms ease-out ${i * 60}ms both`,
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div
            className="mt-auto"
            style={{
              opacity: 0,
              animation: isClosing
                ? 'none'
                : `mobileMenuItemIn 250ms ease-out ${navLinks.length * 60}ms both`,
            }}
          >
            <ModeToggle />
          </div>
        </div>
      )}
    </>
  )
}

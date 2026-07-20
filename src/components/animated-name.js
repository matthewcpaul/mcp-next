"use client"

import { useEffect, useState } from 'react'

const LINE_1 = "Matthew Paul"
const LINE_2 = "Software Designer"
const TOTAL_CHARS = LINE_1.length + LINE_2.length

// Delay (ms) before typing begins, minimum/random gap between each letter,
// the extra pause after the first line, and how long the cursor lingers before
// fading out once everything is typed.
const START_DELAY = 250
const MIN_GAP = 40
const RANDOM_GAP = 90
const LINE_BREAK_PAUSE = 260
const CURSOR_LINGER = 450

export function AnimatedName() {
  const [revealed, setRevealed] = useState(0)
  const [cursorFading, setCursorFading] = useState(false)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setRevealed(TOTAL_CHARS)
      setCursorFading(true)
      return
    }

    let cancelled = false
    const timers = []
    let count = 0

    const step = () => {
      if (cancelled) return
      count += 1
      setRevealed(count)

      if (count >= TOTAL_CHARS) {
        timers.push(setTimeout(() => setCursorFading(true), CURSOR_LINGER))
        return
      }

      // Short, randomized delay so it reads like a person typing, plus a longer
      // beat when moving from the first line to the second.
      const gap = MIN_GAP + Math.random() * RANDOM_GAP
      const extra = count === LINE_1.length ? LINE_BREAK_PAUSE : 0
      timers.push(setTimeout(step, gap + extra))
    }

    timers.push(setTimeout(step, START_DELAY))
    return () => {
      cancelled = true
      timers.forEach(clearTimeout)
    }
  }, [])

  const line1Revealed = Math.min(revealed, LINE_1.length)
  const line2Revealed = Math.max(0, revealed - LINE_1.length)
  const cursorOnLine2 = line2Revealed > 0 || revealed >= LINE_1.length

  const renderLetters = (text, count) =>
    text
      .slice(0, count)
      .split('')
      .map((char, i) => (
        <span key={i} className="animate-letter-in">
          {char === ' ' ? ' ' : char}
        </span>
      ))

  const cursor = (
    <span
      aria-hidden="true"
      className={`typing-cursor${cursorFading ? ' typing-cursor--fading' : ''}`}
    />
  )

  return (
    <div className="flex flex-col">
      <h1 className="text-lg xs:text-lg-2 md:text-xl lg:text-xxl font-medium tracking-tighter">
        <span className="sr-only">Matthew Paul</span>
        <span aria-hidden="true">
          {renderLetters(LINE_1, line1Revealed)}
          {!cursorOnLine2 && cursor}
        </span>
      </h1>
      <p className="text-lg xs:text-lg-2 md:text-xl lg:text-xxl font-medium tracking-tighter text-[var(--text-tertiary)]">
        <span className="sr-only">Software Designer</span>
        <span aria-hidden="true">
          {renderLetters(LINE_2, line2Revealed)}
          {cursorOnLine2 && cursor}
        </span>
      </p>
    </div>
  )
}

"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import ModeToggleIcon from "@public/images/icons/ModeToggleIcon.svg"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => setTheme("system")
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [setTheme])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="focus-visible:outline-none focus-visible:ring-0"
      aria-label="Toggle theme"
    >
      <ModeToggleIcon width={16} height={16} />
    </Button>
  )
}

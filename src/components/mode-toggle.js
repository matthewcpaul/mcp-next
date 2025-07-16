"use client"

import * as React from "react"
import { Moon, Sun, SunMoon, Mail } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [copied, setCopied] = React.useState(false)
  const email = "mclydep@gmail.com"

  // Pick icon based on current theme selection
  let Icon
  if (theme === "light") Icon = Sun
  else if (theme === "dark") Icon = Moon
  else Icon = SunMoon

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center gap-2">
      <Popover open={copied} onOpenChange={setCopied}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="default"
            onClick={handleCopy}
            aria-label="Copy email address"
          >
            <Mail className="h-[1.2rem] w-[1.2rem]" /> Email
            <span className="sr-only">Copy email</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" align="center" className="w-auto px-2 py-1 text-sm">
          Email copied
        </PopoverContent>
      </Popover>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Icon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}> 
            <Sun className="mr-2 h-4 w-4" /> Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}> 
            <Moon className="mr-2 h-4 w-4" /> Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}> 
            <SunMoon className="mr-2 h-4 w-4" /> System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

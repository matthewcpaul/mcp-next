"use client"

import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="py-4 px-4 lg:px-8">
      <div className="flex items-center justify-between w-full">
        <span className="text-base font-medium">
          Deployed {process.env.NEXT_PUBLIC_DEPLOY_DATE || 'Next Deploy'}
        </span>
        <Button
          variant="ghost"
          size="default"
          onClick={() => window.open('/resume/MatthewPaul_Resume_2026.pdf', '_blank')}
          aria-label="Open resume PDF"
        >
          Resume
        </Button>
      </div>
    </footer>
  )
}

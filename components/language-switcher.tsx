"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  
  const isSpanish = pathname.startsWith('/es')
  
  const toggleLanguage = () => {
    if (isSpanish) {
      // Remove /es prefix
      const newPath = pathname.replace(/^\/es/, '') || '/'
      router.push(newPath)
    } else {
      // Add /es prefix
      const newPath = `/es${pathname}`
      router.push(newPath)
    }
  }
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-fenopharm-light hover:text-fenopharm-dark transition-colors flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-light">{isSpanish ? 'EN' : 'ES'}</span>
    </Button>
  )
}


import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fenopharm - Pharmaceutical Cannabis Genetics",
  description: "HLvD-free pharmaceutical cannabis clones and genetics. 20+ years expertise in cultivation.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/logos/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logos/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/logos/favicon/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/logos/favicon/favicon-196x196.png", sizes: "196x196", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-pressura">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

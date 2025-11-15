import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { bebasNeue, syne, manrope, jetBrainsMono } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Your Presentation Title",
  description: "Your presentation description",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${syne.variable} ${manrope.variable} ${jetBrainsMono.variable}`}>
      <body className="font-manrope antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

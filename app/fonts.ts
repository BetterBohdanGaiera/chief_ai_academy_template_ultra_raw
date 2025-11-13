import { Bebas_Neue, Syne, Manrope, JetBrains_Mono } from 'next/font/google'

// Display font for massive hero titles - Brutalist aesthetic
export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

// Emphasis font for subtitles and accents - Modern geometric
export const syne = Syne({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

// Body font for readable content - Humanist warmth
export const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

// Technical/code font - Developer-focused
export const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

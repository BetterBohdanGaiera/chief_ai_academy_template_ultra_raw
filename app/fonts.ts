import { Bebas_Neue, Syne, Manrope, JetBrains_Mono } from 'next/font/google'

// Display font for massive hero titles - Brutalist aesthetic
// Note: Bebas Neue only supports latin, cyrillic text will fallback to system fonts
export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

// Emphasis font for subtitles and accents - Modern geometric
// Syne supports latin-ext for Ukrainian characters
export const syne = Syne({
  weight: ['600', '700', '800'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-syne',
  display: 'swap',
})

// Body font for readable content - Humanist warmth
// Manrope supports cyrillic for Ukrainian text
export const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-manrope',
  display: 'swap',
})

// Technical/code font - Developer-focused
// JetBrains Mono supports cyrillic
export const jetBrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains',
  display: 'swap',
})

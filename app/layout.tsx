import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'Kaya Ercan — Portfolio',
    template: '%s | Kaya Ercan',
  },
  description:
    'Personal portfolio of Kaya Ercan — student, developer, and tech enthusiast building modern web experiences.',
  keywords: [
    'portfolio',
    'developer',
    'student',
    'web development',
    'React',
    'Next.js',
    'TypeScript',
    'frontend',
    'full-stack',
  ],
  authors: [{ name: 'Kaya Ercan' }],
  creator: 'Kaya Ercan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourname.dev',
    siteName: 'Kaya Ercan Portfolio',
    title: 'Kaya Ercan — Student & Developer',
    description:
      'Personal portfolio showcasing projects, skills, and experience in web development and technology.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kaya Ercan — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaya Ercan — Student & Developer',
    description: 'Personal portfolio showcasing projects, skills, and experience.',
    creator: '@yourhandle',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

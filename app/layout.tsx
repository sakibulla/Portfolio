import type { Metadata } from 'next'
import './globals.css'
import SmoothScrolling from '../components/SmoothScrolling'

export const metadata: Metadata = {
  title: 'Md. Fahmidul Hasan - Computer Science Student & Aspiring Developer',
  description: 'Portfolio of Md. Fahmidul Hasan, a passionate 4th-year Computer Science student specializing in full-stack web development. Showcasing projects, skills, and journey in programming.',
  keywords: 'computer science student, web developer, React, Next.js, Node.js, portfolio, JavaScript, TypeScript, university student, aspiring developer',
  authors: [{ name: 'Md. Fahmidul Hasan' }],
  creator: 'Md. Fahmidul Hasan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Md. Fahmidul Hasan - Computer Science Student & Aspiring Developer',
    description: 'Portfolio of a passionate 4th-year Computer Science student specializing in full-stack web development.',
    siteName: 'Md. Fahmidul Hasan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md. Fahmidul Hasan - Computer Science Student & Aspiring Developer',
    description: 'Portfolio of a passionate 4th-year Computer Science student specializing in full-stack web development.',
    creator: '@HasanFahmid1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans min-h-screen relative selection:bg-primary selection:text-white overflow-x-hidden">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  )
}
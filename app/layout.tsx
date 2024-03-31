import './globals.css'
import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/ThemeProvider'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

function MainLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Linux Socials</title>
        <meta name='description' content='An Education & Practice Platform' />
      </head>

      <body className={GeistSans.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <main className='min-h-screen font-sans relative'>
            <AuthProvider>
              <AtomicState>
                <FetchConfig baseUrl='/api'>
                  <Navbar />
                  <div className=''>{children}</div>
                </FetchConfig>
              </AtomicState>
            </AuthProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default MainLayout

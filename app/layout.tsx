// -> Beyond codebase
import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
// -> Within codebase
import SupabaseProvider from '@/providers/SupabaseProvider'
import './globals.css'
import UserProvider from '@/providers/UserProvider'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Spotify Clone built with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}

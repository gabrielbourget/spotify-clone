 // -> Beyond codebase
import Sidebar from "@/components/Sidebar"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
// -> Within codebase
import getSongsByUserId from "@/actions/getSongsByUserId"
import ModalProvider from "@/providers/ModalProvider"
import SupabaseProvider from "@/providers/SupabaseProvider"
import ToasterProvider from "@/providers/ToasterProvider"
import UserProvider from "@/providers/UserProvider"
import "./globals.css"

export const revalidate = 0;

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone built with NextJS",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={figtree.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}

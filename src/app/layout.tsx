import { Header } from '@/components/header'
import { SanityLive } from '@/sanity/lib/live'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen antialiased">
        <Header />
        {children}
        <SanityLive />
      </body>
    </html>
  )
}
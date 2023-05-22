import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'],variable: '--font-roboto'})
const baijamjuree = Bai_Jamjuree({ subsets: ['latin'], weight:'400', variable: '--font-baijamjuree'})

export const metadata = {
  title: 'ChatGptu',
  description: 'Chatgpt using nextjs 13.4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree} font-sans bg-gpt-gray`}>{children}</body>
    </html>
  )
}

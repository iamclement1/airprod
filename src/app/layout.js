import './globals.css'
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({
  weight: ['400', '500', '700', '900',],
  subsets: ['latin']
});

export const metadata = {
  title: 'ApiProd',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  )
}

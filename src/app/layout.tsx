import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'AM Estética e Massoterapia',
  description:
    'Site da esteticista e massoterapeuta Amanda Moraes. Nele você encontra detalhes sobre os procedimentos, contatos e um pouco da minha história.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <div className="flex min-h-screen w-full flex-col">
          <div className="flex-1 bg-vital-1 text-vital-5">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { ifoodRcTextos, ifoodRcTitulos } from './fonts/ifood'
import { Providers } from './providers'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Delivery de Comida e Mercado - iFood',
  description:
    'Peça comida, mercado, farmácia e muito mais. O que você precisa para facilitar o seu dia a dia está aqui no iFood.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${ifoodRcTextos.variable} ${ifoodRcTitulos.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

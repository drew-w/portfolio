//Data
import { Providers } from './providers'

//Style UI
import { Header } from '@components/Navigation/Header'
import { Footer } from '@components/Navigation/Footer'
import styles from './Root.module.css'

export const metadata = {
  title: 'DEBT'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <Providers>
          <Header />
          <main className={styles.mainBox}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

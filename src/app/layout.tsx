import '@rainbow-me/rainbowkit/styles.css'
import { Providers } from './providers'

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
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

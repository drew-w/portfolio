'use client'

import { RainbowKitProvider, Theme, lightTheme } from '@rainbow-me/rainbowkit'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@theme'
import merge from 'lodash.merge'
import { chains, config } from '../wagmi'

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCircleInfo } from '@fortawesome/pro-light-svg-icons'
// import { faChevronDown, faChevronUp } from '@fortawesome/pro-regular-svg-icons'
import { faChevronDown, faChevronUp, faPercent, faDollarSign } from '@fortawesome/pro-solid-svg-icons'

library.add(faUserSecret, faCircleInfo, faChevronUp, faChevronDown, faPercent, faDollarSign)

export function Providers ({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  const [queryClient] = React.useState(() => new QueryClient())
  React.useEffect(() => setMounted(true), [])

  const buttonTheme = merge(lightTheme(), {
    colors: {
      accentColor: '#0C0C0C',
      connectButtonBackground: '#0C0C0C',
      connectButtonText: '#FFF'
    }
  } as Theme)
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains} theme={buttonTheme}>
            {mounted && children}
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

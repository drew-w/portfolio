'use client'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'

import { chains, config } from '../wagmi'

export function Providers ({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  const [queryClient] = React.useState(() => new QueryClient())
  React.useEffect(() => setMounted(true), [])
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <WagmiConfig config={config}>
          <RainbowKitProvider chains={chains}>
            {mounted && children}
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

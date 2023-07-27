'use client'

import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import * as React from 'react'
import { WagmiConfig } from 'wagmi'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import { chains, config } from '../wagmi'

export function Providers ({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  const [queryClient] = React.useState(() => new QueryClient())
  React.useEffect(() => setMounted(true), [])
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains}>
          {mounted && children}
        </RainbowKitProvider>
      </WagmiConfig>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

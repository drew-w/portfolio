'use client'

import * as React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@theme'

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCircleInfo } from '@fortawesome/pro-light-svg-icons'
import {
  faChevronDown,
  faChevronUp,
  faPercent,
  faDollarSign,
  faArrowUpRight,
  faTimer
} from '@fortawesome/pro-solid-svg-icons'

library.add(
  faUserSecret,
  faCircleInfo,
  faChevronUp,
  faChevronDown,
  faPercent,
  faDollarSign,
  faArrowUpRight,
  faTimer
)

export function Providers ({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState<QueryClient>(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

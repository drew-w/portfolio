'use client'

import * as React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@theme'
import '@theme-toggles/react/css/Within.css'
import '@theme-toggles/react/css/Around.css'
import { ColorModeScript } from '@chakra-ui/react'

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/pro-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faGithub, faLinkedin)

export function Providers ({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState<QueryClient>(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </QueryClientProvider>
  )
}

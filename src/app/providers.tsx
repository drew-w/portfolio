"use client"

import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "@theme"
import "@theme-toggles/react/css/Within.css"
import "@theme-toggles/react/css/Around.css"
import { ColorModeScript } from "@chakra-ui/react"

//FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core"
import { faDownload } from "@fortawesome/pro-light-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

library.add(faTwitter, faGithub, faLinkedin, faDownload)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </>
  )
}

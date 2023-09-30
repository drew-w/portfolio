import { Inter } from 'next/font/google'
import { semanticTokens } from '@theme/semanticTokens'
import { extendTheme } from '@chakra-ui/react'
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools'

import { Button } from '@theme/Button'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  disableTransitionOnChange: false
}

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode(
        semanticTokens.colors['bg-default'].default,
        semanticTokens.colors['bg-default']._dark
      )(props)
    }
  })
}

const inter = Inter({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const fonts = {
  inter: inter.style.fontFamily
}
const Text = {
  baseStyle: {
    color: 'text-primary'
  }
}

const components = {
  Button,
  Text
}

const theme = extendTheme({
  semanticTokens,
  config,
  styles,
  components,
  fonts
})
export default theme

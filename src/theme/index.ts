import { Poppins } from 'next/font/google'
import { semanticTokens } from '@theme/semanticTokens'
import { extendTheme } from '@chakra-ui/react'
import { mode, GlobalStyleProps } from '@chakra-ui/theme-tools'

// import { Input } from 'theme/inputStyle'
// import { Text, Heading, Link } from 'theme/textStyle'
import { Button } from '@theme/Button'
import { Table } from '@theme/Table'
import { Modal } from '@theme/Modal'
// import { Box } from 'theme/BoxStyle'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
}

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode(
        semanticTokens.colors['bg-default'].default,
        semanticTokens.colors['bg-default'].default
      )(props)
    }
  })
}

const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const fonts = {
  poppins: poppins.style.fontFamily
}

const components = {
  Button,
  Table,
  Modal
}

const theme = extendTheme({
  semanticTokens,
  config,
  styles,
  components,
  fonts
})
export default theme

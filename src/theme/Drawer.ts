import { drawerAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const {
  definePartsStyle,
  defineMultiStyleConfig
} = createMultiStyleConfigHelpers(parts.keys)

const variantAlwaysOpen = definePartsStyle({
  dialog: {
    pointerEvents: 'auto',
    bg: 'blue.100',
    h: 'calc(100vh - 81px)',
    position: 'fixed',
    right: '20px'
  },
  dialogContainer: {
    bg: '#f505',
    pointerEvents: 'none',
    align: 'center'
  }
})

export const Drawer = defineMultiStyleConfig({
  variants: {
    alwaysOpen: variantAlwaysOpen
  }
})

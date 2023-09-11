import { drawerAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const {
  definePartsStyle,
  defineMultiStyleConfig
} = createMultiStyleConfigHelpers(parts.keys)

const variantAlwaysOpen = definePartsStyle({
  dialog: {
    pointerEvents: 'auto',
    bg: 'box-bg-primary',
    position: 'fixed',
    h: 'calc(100vh - 101px)',
    minW: '350px',
    borderRadius: 10,
    shaodw: 'box-shadow-primary'
  },
  body: {
    padding: 0
  },
  dialogContainer: {
    pointerEvents: 'none',
    align: 'center'
  }
})

export const Drawer = defineMultiStyleConfig({
  variants: {
    alwaysOpen: variantAlwaysOpen
  }
})

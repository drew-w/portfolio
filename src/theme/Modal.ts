import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  header: {
    color: 'text-primary'
  },
  overlay: {
    bg: 'blackAlpha.500', //change the background
  },
  dialog: {
    borderRadius: 'md',
    bg: `box-bg-primary`,
  },
  body: {
    color: 'text-primary'
  }
})

export const Modal = defineMultiStyleConfig({
  baseStyle,
})
import { ComponentStyleConfig } from '@chakra-ui/react'
import { defineStyle } from '@chakra-ui/styled-system'

const variantPrimary = defineStyle(() => {
  return {
    color: 'text-secondary',
    bg: 'btn-primary-bg',
    fontSize: '11px',
    fontWeight: 600,
    _hover: {
      opacity: 0.9,
      _disabled: {
        bg: 'btn-primary-bg'
      }
    },
    _active: { opacity: 0.8 }
  }
})

const variantIcon = defineStyle(() => {
  return {
    color: 'brand-orange',
    _hover: {
      transform: 'scale(1.1)'
    }
  }
})

const Button: ComponentStyleConfig = {
  baseStyle: {
    letterSpacing: '-0.025em',
    color: 'primary-text',
    borderRadius: '13px',
    _focus: {
      boxShadow: 'auto'
    }
  },
  defaultProps: {
    variant: 'primary'
  },
  variants: {
    primary: variantPrimary,
    icon: variantIcon
  }
}

export { Button }

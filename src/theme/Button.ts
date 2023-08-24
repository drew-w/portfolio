import { ComponentStyleConfig } from '@chakra-ui/react'
import { defineStyle } from '@chakra-ui/styled-system'

const variantPrimary = defineStyle(() => {
  return {
    color: 'btn-primary-text',
    bg: 'btn-primary-bg',
    _hover: {
      bg: 'btn-primary-bg-hover',
      _disabled: {
        bg: 'btn-primary-bg'
      }
    },
    _active: { bg: 'btn-primary-bg-active' }
  }
})

const variantSecondary = defineStyle(() => {
  return {
    color: 'text-primary',
    bg: 'btn-secondary-bg',
    fontSize: '11px',
    fontWeight: 600,
    _hover: {
      opacity: 0.9,
      _disabled: {
        bg: 'btn-secondary-bg'
      }
    },
    _active: { opacity: 0.8 }
  }
})

const variantSquare = defineStyle(() => {
  return {
    color: 'text-secondary',
    bg: 'btn-primary-bg',
    p: '15px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 500,
    _hover: {
      opacity: 0.9,
      _disabled: {
        bg: 'btn-secondary-bg'
      }
    }}
    })

const variantWhite = defineStyle(() => {
  return {
    color: 'text-primary',
    bg: 'btn-white-bg',
    fontSize: '11px',
    fontWeight: 600,
    _hover: {
      opacity: 0.9,
      _disabled: {
        bg: 'btn-white-bg'
      }
    },
    _active: { opacity: 0.8 }
  }
})

const Button: ComponentStyleConfig = {
  baseStyle: {
    // textTransform: 'uppercase',
    letterSpacing: '-0.025em',
    color: 'primary-text',
    borderRadius: '13px',
    _focus: {
      boxShadow: 'auto'
    }
  },
  defaultProps: {
    size: 'xs',
    variant: 'primary'
  },
  variants: {
    primary: variantPrimary,
    secondary: variantSecondary,
    square: variantSquare,
    white: variantWhite
  }
}

export { Button }

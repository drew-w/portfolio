import { tableAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const {
  definePartsStyle,
  defineMultiStyleConfig
} = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  table: {
    borderCollapse: 'separate',
    borderSpacing: '0 10px'
  },
  caption: {
    color: 'text-primary',
    fontWeight: 600,
    textAlign: 'start'
  },
  th: {
    color: 'text-gray',
    fontSize: '12px',
    fontWeight: 400,
    textTransform: 'none',
    letterSpacing: 'normal',
    textAlign: 'left'
  },
  td: {
    fontSize: '15px',
    fontWeight: 600
  },
  tbody: {
    td: {
      '&:first-child': {
        borderWidth: '1px 0 1px 1px',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
      },
      '&:last-child': {
        borderWidth: '1px 1px 1px 0',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
      },
      borderColor: 'table-border',
      borderWidth: '1px 0',
      py: 0,
      px: '15px',
      height: '70px'
    }
  }
})

const tableSizes = definePartsStyle({
  caption: {
    fontSize: '20px'
  },
  th: {
    px: '15px'
  }
})

const sizes = {
  sm: tableSizes,
  md: tableSizes,
  lg: tableSizes
}

export const Table = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    variant: 'unstyled'
  }
})

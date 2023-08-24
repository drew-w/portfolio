import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const {
  definePartsStyle,
  defineMultiStyleConfig
} = createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: 'medium',
    fontSize: '16px',
    textAlign: 'left',
    padding: '5px',
    bg: 'box-bg-secondary',
    color: 'text-secondary',
    _hover: {
      bg: 'box-bg-secondary',
      color: 'text-secondary'
    }
  },
  list: {
    // this will style the MenuList component
    padding: '3',
    borderBottomRadius: 'xl',
    borderTopRadius: '0px',
    borderColor: 'box-bg-secondary',
    bg: 'box-bg-secondary'
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: 'text-secondary',
    bg: 'box-bg-secondary',
    borderRadius: '5px',
    _hover: {
      bg: 'box-bg-primary',
      color: 'text-primary'
    },
    _focus: {
      bg: 'box-bg-primary',
      color: 'text-primary'
    }
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7'
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: '0.8',
    fontFamily: 'mono',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    pl: '4'
  },
  divider: {
    // this will style the MenuDivider component
    my: '4',
    borderColor: 'black',
    borderBottom: '2px dotted'
  }
})
// export the base styles in the component theme
export const Menu = defineMultiStyleConfig({ baseStyle })

import { menuAnatomy } from '@chakra-ui/anatomy'
import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers
} from '@chakra-ui/react'
import { Variants } from 'framer-motion'

const {
  definePartsStyle,
  defineMultiStyleConfig
} = createMultiStyleConfigHelpers(menuAnatomy.keys)

// Define the base component styles
const baseStyle = definePartsStyle({
  // Define the part you're going to style
  button: {
    // This will style the MenuButton component
    fontWeight: 'medium',
    fontSize: '16px',
    textAlign: 'left',
    bg: 'box-bg-secondary',
    color: 'text-secondary',
    _hover: {
      bg: 'box-bg-secondary',
      color: 'text-secondary'
    },
    _active: {
      // bg: 'red.200',
      borderBottomRadius: 0
    }
  },
  list: {
    // This will style the MenuList component
    minW: '205px',
    borderBottomRadius: '8px',
    borderTopRadius: '0px',
    borderColor: 'box-bg-secondary',
    bg: 'box-bg-secondary',
    paddingX: '8px'
    // paddingBottom: '4px',
  },
  item: {
    // This will style the MenuItem and MenuItemOption components
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
    // This will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    letterSpacing: 'wider',
    opacity: '0.7'
  },
  command: {
    // This will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
    opacity: '0.8',
    fontFamily: 'mono',
    fontSize: 'sm',
    letterSpacing: 'tighter',
    pl: '4'
  },
  divider: {
    // This will style the MenuDivider component
    my: '4',
    borderColor: 'black',
    borderBottom: '2px dotted'
  }
})

const defaultProps = definePartsStyle({
  // button: {}
})

//Animation for Menu
export const menuListAnimationVariants: Variants = {
  enter: {
    visibility: 'visible',
    opacity: 1,
    y: 0, // Start position on the y-axis (no vertical movement)
    transition: {
      duration: 0.2
    }
  },
  exit: {
    transitionEnd: {
      visibility: 'hidden'
    },
    opacity: 0,
    y: 0, // Return to the original position (the menu button)
    transition: {
      duration: 0.2
    }
  }
}

export const Menu = defineMultiStyleConfig({ baseStyle })

'use client'
//Chakra
import { useColorMode, IconButton } from '@chakra-ui/react'

//Style UI
import { Around } from '@theme-toggles/react'

export const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      as='div'
      cursor='pointer'
      onClick={toggleColorMode}
      variant='icon'
      p={0}
      icon={
        <Around
          duration={800}
          toggled={colorMode === 'light'}
          toggle={toggleColorMode}
        />
      }
      aria-label='toggle'
    />
  )
}

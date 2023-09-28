//Chakra
import { useColorMode, IconButton, Button } from '@chakra-ui/react'

//Data
import { useEffect, useState } from 'react'
//Style UI
import { Within } from '@theme-toggles/react'
export const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  //   const [isToggled, setToggle] = useState<boolean>(false)
  //   useEffect(() => {
  //     toggleColorMode()
  //   }, [isToggled])
  return (
    <IconButton
      onClick={toggleColorMode}
      variant='solid'
      //   colorScheme='green'
      p={0}
      icon={
        <Within
          duration={750}
          toggled={colorMode === 'light'}
          toggle={toggleColorMode}
          forceMotion
        />
      }
      aria-label='toggle'
    />
    // <Within
    //   duration={750}
    //   toggled={isToggled}
    //   toggle={setToggle}
    //   style={{
    //     height: '1000px',
    //     width: '1000px'
    //   }}
    // />
  )
}

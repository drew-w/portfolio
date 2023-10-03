'use client'
//Chakra
import { Flex, Box } from '@chakra-ui/react'

//Style UI
import { HeaderNav } from '@components/Navigation/HeaderNav'
import { ColorModeSwitcher } from '@components/ColorModeSwitcher'

export const Header = () => (
  <Flex
    as='header'
    px={{ base: 0, md: '30px' }}
    h='61px'
    w='full'
    background='fg-default'
    position='fixed'
    zIndex={99}
    backdropFilter='auto'
    backdropBlur='15px'
  >
    <Flex
      w='full'
      h='full'
      justify='center'
      align='center'
      position='relative'
      zIndex={99}
    >
      <HeaderNav />
      <Box position='absolute' right={{ base: 0, md: 5 }}>
        <ColorModeSwitcher />
      </Box>
    </Flex>
  </Flex>
)

'use client'
//Chakra
import { Flex, Box } from '@chakra-ui/react'

//Style UI
import { HeaderNav } from '@components/HeaderNav'
import { ColorModeSwitcher } from '@components/ColorModeSwitcher'

export const Header = () => (
  <Flex
    as='header'
    justify='center'
    align='center'
    px='30px'
    h='61px'
    position='relative'
  >
    <HeaderNav />
    <Box position='absolute' right={5}>
      <ColorModeSwitcher />
    </Box>
  </Flex>
)

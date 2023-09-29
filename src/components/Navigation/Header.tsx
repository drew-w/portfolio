'use client'
//Chakra
import { Flex, Box } from '@chakra-ui/react'

//Style UI
import { HeaderNav } from '@components/Navigation/HeaderNav'
import { ColorModeSwitcher } from '@components/ColorModeSwitcher'

export const Header = () => (
  <Flex as='header' px='30px' h='61px' w='full' opacity='.95' bg='bg-default'>
    <Flex w='full' h='full' justify='center' align='center' position='relative'>
      <HeaderNav />
      <Box position='absolute' right={5}>
        <ColorModeSwitcher />
      </Box>
    </Flex>
  </Flex>
)

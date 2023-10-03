'use client'
//Chakra
import { Flex, Box, Text } from '@chakra-ui/react'

//Style UI
import { FooterWaves } from './FooterWaves'

export const Footer = () => (
  <Flex as='footer' w='full' h='150px' direction='column'>
    <Box w='full' h='full' position='relative'>
      <FooterWaves position='absolute' />
      <Flex
        w='full'
        align='center'
        justify='center'
        zIndex={2}
        position='absolute'
        bottom={0}
      >
        <Text color='#C4C7C5'>Contact: eesnamdoow@gmail.com</Text>
      </Flex>
    </Box>
  </Flex>
)

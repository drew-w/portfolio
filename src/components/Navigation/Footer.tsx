'use client'
//Chakra
import { Flex, Box } from '@chakra-ui/react'

//Style UI
import { FooterWaves } from './FooterWaves'

export const Footer = () => (
  <Flex as='footer' w='full' h='150px'>
    <Box w='full' h='full' position='relative'>
      <FooterWaves position='absolute' />
    </Box>
  </Flex>
)

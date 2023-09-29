'use client'
//Chakra
import { Flex } from '@chakra-ui/react'

//Style UI
import { FooterWaves } from './FooterWaves'

export const Footer = () => (
  <Flex as='footer' position='absolute' bottom={0} w='full' h='150px'>
    <FooterWaves />
  </Flex>
)

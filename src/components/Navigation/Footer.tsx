'use client'
//Chakra
import { Flex, FlexProps } from '@chakra-ui/react'

//Style UI
import { HeaderNav } from '@components/Navigation/HeaderNav'
import { ColorModeSwitcher } from '@components/ColorModeSwitcher'
import { FooterWaves } from './FooterWaves'

export const Footer = () => (
  <Flex as='footer' position='relative' h='150px'>
    <FooterWaves position='absolute' bottom={0} />
  </Flex>
)

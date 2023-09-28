'use client'
//Chakra UI
import { Flex, Stack, Box, useBreakpointValue } from '@chakra-ui/react'

//Style UI
import { ColorModeSwitcher } from '@components/ColorModeSwitcher'
import Image from 'next/image'
import styles from './Home.module.css'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Flex
        as='header'
        bg='fg-default'
        justify='space-between'
        align='center'
        px='30px'
        h='61px'
        boxShadow='box-shadow-primary'
      >
        <ColorModeSwitcher />
      </Flex>
      <Box
        className={styles.mainBox}
        overflow='scroll'
        css={{
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none'
        }}
      >
        {children}
      </Box>
    </>
  )
}

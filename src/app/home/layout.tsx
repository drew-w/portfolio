'use client'
import logo from '@assets/debtlogo.svg'
import smallLogo from '@assets/debt.svg'

import '@rainbow-me/rainbowkit/styles.css'
import { Flex, Stack, Box, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './Home.module.css'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const image = useBreakpointValue(
    { base: smallLogo, md: logo },
    { fallback: logo }
  )
  return (
    <>
      <Flex
        as='header'
        bg='fg-default'
        justify='space-between'
        align='center'
        px='30px'
        h='61px'
        box-boxShadow='box-shadow-primary'
      >
        <Image src={image || logo} height={30} alt='debt' draggable={false} />
        <Stack align='center' spacing={10} direction='row' h='full'>
          Button
        </Stack>
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

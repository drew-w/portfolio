'use client'
import logo from '@assets/debtlogo.svg'

import '@rainbow-me/rainbowkit/styles.css'
import { Flex, Stack, Button, Box } from '@chakra-ui/react'
import Image from 'next/image'
import { ConnectButton } from '@components/ConnectButton'
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
      >
        <Image src={logo} height={30} alt='debt' />
        <Stack align='center' spacing={10} direction='row' h='full'>
          <ConnectButton />
        </Stack>
      </Flex>
      <Box
        as='main'
        className={styles.mainBox}
        overflow='scroll'
        css={{
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {children}
      </Box>
    </>
  )
}

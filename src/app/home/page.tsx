'use client'
//Chakra
import { Flex, Grid, GridItem, Drawer, Skeleton } from '@chakra-ui/react'

//Style UI
import { BalanceCard } from '@components/BalanceCard'
import { ColorModeSwitcher } from '@components/ColorModeSwitcher'

//Types

export default function Home () {
  return (
    <Flex as='main' w='full' justify='center' py='20px'>
      {/* <BalanceCard /> */}
      <ColorModeSwitcher />
    </Flex>
  )
}

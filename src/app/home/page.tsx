'use client'
//Chakra
import { Flex, Grid, GridItem } from '@chakra-ui/react'

//Style UI
import { BalanceCard } from '@components/Dashboard/BalanceCard'
import { NFTCard } from '@components/Dashboard/NFTCard'
import { TokenCard } from '@components/Dashboard/TokenCard'

export default function Home () {
  return (
    <Flex as='main' w='full' justify='center' py='20px'>
      <Grid
        w='1000px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(3, 1fr)'
        maxH='900px'
      >
        <GridItem h='280px' colSpan={1} bg='red.300'>
          <Flex as='span' w='full' justify='center'>
            <BalanceCard />
          </Flex>
        </GridItem>
        <GridItem h='280px' colSpan={1} bg='blue.300'>
          <Flex as='span' w='full' justify='center'>
            <NFTCard />
          </Flex>
        </GridItem>

        <GridItem h='280px' colSpan={1} bg='green.300'>
          <Flex as='span' w='full' justify='center'>
            <TokenCard />
          </Flex>
        </GridItem>

        <GridItem h='620px' colSpan={3} bg='yellow.300' />
      </Grid>
    </Flex>
  )
}

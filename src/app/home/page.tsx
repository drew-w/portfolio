'use client'
//Chakra
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'

//Style UI
import { BalanceCard } from '@components/Dashboard/BalanceCard'
import { ConnectButton } from '@components/ConnectButton'
import { Connected } from '@components/Connected'
import { Dashboard } from '@components/Dashboard'

export function Page () {
  return (
    <Flex as='main' w='full' justify='center' py='20px'>
      <Grid
        // h='100px'
        w='1000px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(3, 1fr)'
        // gap={4}
        maxH='900px'
      >
        <GridItem h='280px' colSpan={1} bg='red.300'>
          <Flex as='span' w='full' justify='center'>
            <BalanceCard />
          </Flex>
        </GridItem>
        <GridItem h='280px' colSpan={1} bg='blue.300' />

        <GridItem h='280px' colSpan={1} bg='green.300' />
        <GridItem h='620px' colSpan={3} bg='yellow.300' />
      </Grid>
      {/* <main className={`${styles.main}`}>
        <div className={styles.center}>
          <ConnectButton />

          <Connected>
            <Dashboard />
          </Connected>
        </div>
      </main> */}
    </Flex>
  )
}

export default Page

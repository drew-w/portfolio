'use client'
//Chakra
import {
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
  Button
} from '@chakra-ui/react'

//Data
import { data as tokenData } from '@hooks/tokens'
import { allProjectsColumns, setAllProjectsColumnsVisibility } from './data'
import { useState, useEffect } from 'react'

//Style UI
import { BalanceCard } from '@components/Dashboard/BalanceCard'
import { NFTCard } from '@components/Dashboard/NFTCard'
import { TokenTable } from '@components/Dashboard/TokenTable'
import { TokenCard } from '@components/Dashboard/TokenCard'
import { AllProjectsDrawer } from '@components/AllProjectsDrawer'

export default function Home () {
  const [columnVisibility, setColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState<boolean>(false)

  const screenSize =
    useBreakpointValue(
      { base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
      { fallback: 'lg' }
    ) || 'lg'

  useEffect(() => {
    setAllProjectsColumnsVisibility(setColumnVisibility, screenSize)
  }, [screenSize])

  useEffect(() => {
    const tokenIndex = Object.keys(rowSelection)
    if (tokenIndex.length <= 0) {
      setIsAllProjectsOpen(false)
    } else {
      setIsAllProjectsOpen(true)
    }
  }, [rowSelection])

  return (
    <Flex as='main' w='full' justify='center' py='20px'>
      <Grid
        w='1000px'
        templateRows='repeat(2, 1fr)'
        templateColumns={{
          base: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        rowGap={{ base: 5, lg: 0 }}
        maxH='900px'
      >
        {/* Card with rewards balance and wallet totals */}
        <GridItem h='280px' colSpan={{ base: 3, md: 2, lg: 1 }}>
          <Flex as='span' w='full' justify='center'>
            <BalanceCard />
          </Flex>
        </GridItem>
        {/* Card showing active rate and number of licenses */}
        <GridItem h='280px' colSpan={{ base: 3, md: 2, lg: 1 }}>
          <Flex as='span' w='full' justify='center'>
            <NFTCard />
          </Flex>
        </GridItem>
        {/* card showing breakdown of tokens in your wallet */}
        <GridItem h='280px' colSpan={{ base: 3, md: 4, lg: 1 }}>
          <Flex as='span' w='full' justify='center'>
            <TokenCard />
          </Flex>
        </GridItem>
        {/* table showing all projects that are not in the wallet */}
        <GridItem h='620px' colSpan={{ base: 3, md: 4, lg: 3 }}>
          <Flex as='span' w='full' justify='center' py='20px'>
            <TokenTable
              data={tokenData}
              caption='All Projects'
              columns={allProjectsColumns}
              columnVisibility={columnVisibility}
              setColumnVisibility={setColumnVisibility}
              rowSelection={rowSelection}
              setRowSelection={setRowSelection}
              setIsAllProjectsOpen={setIsAllProjectsOpen}
            />
          </Flex>
        </GridItem>
      </Grid>
      <AllProjectsDrawer
        isOpen={isAllProjectsOpen}
        setIsOpen={setIsAllProjectsOpen}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </Flex>
  )
}

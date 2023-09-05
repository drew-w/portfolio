'use client'
//Chakra
import {
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
  Button,
  Stack
} from '@chakra-ui/react'

//Data
import { data as tokenData } from '@hooks/tokens'
import {
  allProjectsColumns,
  setAllProjectsColumnsVisibility,
  myProjectsColumns,
  setMyProjectsColumnsVisibility
} from './data'
import { useState, useEffect } from 'react'
import { getTokenOwnership } from '@utils/format'
import { walletBalance } from '@hooks/wallets'

//Style UI
import { BalanceCard } from '@components/Dashboard/BalanceCard'
import { NFTCard } from '@components/Dashboard/NFTCard'
import { TokenTable } from '@components/Dashboard/TokenTable'
import { TokenCard } from '@components/Dashboard/TokenCard'
import { AllProjectsDrawer } from '@components/AllProjectsDrawer'

//Types
import { Token } from '@./types/tokens'

export default function Home () {
  const [allColumnVisibility, setAllColumnVisibility] = useState({})
  const [myColumnVisibility, setMyColumnVisibility] = useState({})
  const [rowSelection, setRowSelection] = useState({})
  const [selectedTable, setSelectedTable] = useState<
    'My Projects' | 'All Projects' | string
  >()
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState<boolean>(false)
  const [index] = Object.keys(rowSelection)
  const { myTokens, allTokens } = getTokenOwnership(walletBalance, tokenData)
  const token: Token = (selectedTable === 'All Projects'
    ? allTokens
    : myTokens)[parseInt(index)]

  const screenSize =
    useBreakpointValue(
      { base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' },
      { fallback: 'lg' }
    ) || 'lg'

  useEffect(() => {
    setAllProjectsColumnsVisibility(setAllColumnVisibility, screenSize)
    setMyProjectsColumnsVisibility(setMyColumnVisibility, screenSize)
  }, [screenSize])

  useEffect(() => {
    const tokenIndex = Object.keys(rowSelection)
    if (tokenIndex.length <= 0) {
      setIsAllProjectsOpen(false)
    } else {
      setIsAllProjectsOpen(true)
    }
  }, [rowSelection])

  const onDrawerClose = () => {
    setIsAllProjectsOpen(false)
    setRowSelection({})
    setSelectedTable(undefined)
  }

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
          <Stack as='span' w='full' justify='center' py='20px' spacing='20px'>
            {myTokens.length > 0 && (
              <TokenTable
                data={myTokens}
                caption='My Projects'
                // we changed the columns array to a function requiring a boolean and
                // returning an array in order to make sure our selected state
                // only can have 1 object across all tables.
                columns={myProjectsColumns(selectedTable === 'My Projects')}
                columnVisibility={myColumnVisibility}
                onPageResize={setMyColumnVisibility}
                rowSelection={rowSelection}
                onRowSelect={setRowSelection}
                onTableSelect={setSelectedTable}
                tableSelect={selectedTable}
              />
            )}
            <TokenTable
              data={allTokens}
              caption='All Projects'
              columns={allProjectsColumns(selectedTable === 'All Projects')}
              columnVisibility={allColumnVisibility}
              onPageResize={setAllColumnVisibility}
              rowSelection={rowSelection}
              onRowSelect={setRowSelection}
              onTableSelect={setSelectedTable}
              tableSelect={selectedTable}
            />
          </Stack>
        </GridItem>
      </Grid>

      {/* token drawer that will appear on the right side */}
      <AllProjectsDrawer
        isOpen={isAllProjectsOpen}
        token={token}
        onClose={onDrawerClose}
      />
    </Flex>
  )
}

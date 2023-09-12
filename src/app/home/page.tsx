'use client'
//Chakra
import { Flex, Grid, GridItem, Drawer } from '@chakra-ui/react'

//Data
import { data as tokenData } from '@hooks/tokens'
import { useState, useEffect } from 'react'
import { getTokenOwnership } from '@utils/format'
import { walletBalance } from '@hooks/wallets'

//Style UI
import { BalanceCard } from '@components/Dashboard/BalanceCard'
import { NFTCard } from '@components/Dashboard/NFTCard'
import { TokenTable } from '@components/Dashboard/TokenTable'
import { TokenCard } from '@components/Dashboard/TokenCard'
import { AllProjectsDrawer } from '@components/AllProjectsDrawer'
import { MyProjectsDrawer } from '@components/MyProjectsDrawer'

//Types
import { Token } from '@./types/tokens'

export default function Home () {
  const [rowSelection, setRowSelection] = useState({})
  const [selectedTable, setSelectedTable] = useState<'all' | 'my' | string>()
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState<boolean>(false)
  const [index] = Object.keys(rowSelection)
  const dataOfTokens = getTokenOwnership(walletBalance, tokenData),
    { allTokens, myTokens } = dataOfTokens
  const token: Token = (selectedTable === 'all' ? allTokens : myTokens)[
    parseInt(index)
  ]

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
          <Flex as='span' w='full' justify='center' py='20px'>
            <TokenTable
              data={dataOfTokens}
              tableSelect={selectedTable}
              rowSelection={rowSelection}
              onRowSelect={setRowSelection}
              onTableSelect={setSelectedTable}
            />
          </Flex>
        </GridItem>
      </Grid>

      {/* token drawer that will appear on the right side */}
      {/* <AllProjectsDrawer
        isOpen={isAllProjectsOpen}
        token={token}
        onClose={onDrawerClose}
      /> */}
      <Drawer
        isOpen={isAllProjectsOpen && !!token}
        onClose={onDrawerClose}
        variant='alwaysOpen'
        blockScrollOnMount={false}
      >
        {selectedTable === 'all' && (
          <AllProjectsDrawer token={token} onClose={onDrawerClose} />
        )}
        {selectedTable === 'my' && (
          <MyProjectsDrawer token={token} onClose={onDrawerClose} />
        )}
      </Drawer>
    </Flex>
  )
}

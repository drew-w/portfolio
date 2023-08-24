//Chakra
import { Stack, Image, Flex, Text, Button, Box } from '@chakra-ui/react'

//Data
import BigNumber from 'bignumber.js'
import { createColumnHelper } from '@tanstack/react-table'
import { formatCurrency, formatDelta } from '@utils/format'

//Types
import { Token } from '@./types/tokens'

const columnHelper = createColumnHelper<Token>()

//this function determines what columns are rendered based on current screen width
export const setAllProjectsColumnsVisibility = (
  setColumnVisibility: (columns: {}) => void,
  screenSize: string
) => {
  if (screenSize === 'xl') {
    setColumnVisibility({
      name: true,
      nftPrice: true,
      nftsMinted: true,
      nftsStaked: true,
      nftRewardsRate: true,
      marketPrice: true,
      buyMoreGraph: true
    })
  } else if (screenSize === 'lg') {
    setColumnVisibility({
      name: true,
      nftPrice: true,
      nftsMinted: true,
      nftsStaked: false,
      nftRewardsRate: true,
      marketPrice: true,
      buyMoreGraph: true
    })
  } else if (screenSize === 'md') {
    setColumnVisibility({
      name: true,
      nftPrice: true,
      nftsMinted: false,
      nftsStaked: false,
      nftRewardsRate: true,
      marketPrice: true,
      buyMoreGraph: true
    })
  } else if (screenSize === 'sm') {
    setColumnVisibility({
      name: true,
      nftPrice: false,
      nftsMinted: false,
      nftsStaked: false,
      nftRewardsRate: false,
      marketPrice: true,
      buyMoreGraph: true
    })
  } else if (screenSize === 'base') {
    setColumnVisibility({
      name: true,
      nftPrice: false,
      nftsMinted: false,
      nftsStaked: false,
      nftRewardsRate: false,
      marketPrice: true,
      buyMoreGraph: false
    })
  }
}

//creating specific column cells for the all projects table
export const allProjectsColumns = [
  columnHelper.accessor(row => row, {
    id: 'name',
    cell: info => {
      const row = info.getValue()
      return (
        <Stack
          spacing='10px'
          align='center'
          direction='row'
          maxW='175px'
          w='full'
        >
          <Image src={row.uiConfig.tokenLogo} w='30px' h='30px' />
          <Flex direction='column'>
            <Text as='h3' fontWeight={600} fontSize='15px'>
              {row.uiConfig.name}
            </Text>
            <Stack
              direction='row'
              spacing='8px'
              align='center'
              fontWeight={500}
              fontSize='12px'
            >
              <Text>{row.name}</Text>
              <Box w='4px' h='4px' borderRadius='full' bg='box-bg-secondary' />
              <Text>{row.id}</Text>
            </Stack>
          </Flex>
        </Stack>
      )
    },
    header: () => (
      <Flex as='span' w='full' p='0'>
        Name
      </Flex>
    )
  }),
  columnHelper.accessor(row => parseFloat(row.marketValue24HrsAgo) * 100, {
    id: 'nftPrice',
    header: 'NFT Price',
    cell: info => (
      <Text as='h3'>
        {info.getValue().toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </Text>
    )
  }),
  columnHelper.accessor(row => row.decimals * 137, {
    id: 'nftsMinted',
    header: 'NFTs Minted',
    cell: info => <Text>{info.getValue().toLocaleString('en-US')}</Text>
  }),
  columnHelper.accessor(row => row.tax, {
    id: 'nftsStaked',
    header: 'NFTs Staked',
    cell: info => (
      <Text>
        {info.getValue() != 0 ? info.getValue().toLocaleString('en-US') : '-'}
      </Text>
    )
  }),
  columnHelper.accessor(row => row, {
    id: 'nftRewardsRate',
    header: 'NFT Rewards Rate',
    cell: info => {
      const row = info.getValue()
      const { name, marketValueNow } = row
      const rate = Math.floor(Math.random() * 5)
      const dollarValue = new BigNumber(marketValueNow).times(rate).toString()

      const formatted = formatCurrency(dollarValue)

      return (
        <Flex as='span' direction='column'>
          <Text as='h3'>
            {rate} {name}
          </Text>
          <Text fontWeight={500} fontSize='12px' color='text-gray'>
            {formatted}
          </Text>
        </Flex>
      )
    }
  }),
  columnHelper.accessor(row => row, {
    id: 'marketPrice',
    header: 'Market Price',
    cell: info => {
      const row = info.getValue()
      const { marketValueNow, marketValue24HrsAgo } = row

      const { delta, change } = formatDelta(marketValueNow, marketValue24HrsAgo)

      return (
        <Flex as='span' direction='column'>
          <Text>
            ${new BigNumber(marketValueNow).decimalPlaces(6).toString()}
          </Text>
          <Text
            fontWeight={500}
            fontSize='12px'
            color={
              change === 'negative'
                ? 'text-red'
                : change === 'positive'
                ? 'text-green'
                : 'text-gray'
            }
          >
            {delta}
          </Text>
        </Flex>
      )
    }
  }),
  columnHelper.accessor(row => row, {
    id: 'buyMoreGraph',
    header: '',
    cell: info => {
      //todo this button needs to do something
      const row = info.getValue()
      return <Button variant='primary'>Buy More</Button>
    }
  })
]

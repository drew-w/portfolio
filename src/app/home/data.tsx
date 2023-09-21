//Chakra
import { Stack, Image, Flex, Text, Button, Box } from '@chakra-ui/react'

//Data
import BigNumber from 'bignumber.js'
import { ColumnDef, createColumnHelper } from '@tanstack/react-table'
import { formatBigNumber, formatCurrency, formatDelta } from '@utils/format'
import { pendingBalance, walletBalance } from '@hooks/wallets'
import { TableChart } from '@components/Charts/TableChart'
import {
  useRewardDistributorRewardsPerSecond,
  useRewardDistributorPendingRewards,
  useRewardTokenBalanceOf,
  useRewardNftTotalSupply,
  useRewardDistributorTotalStakedNfts
} from '@generated'

//Types
import { Address } from 'wagmi'
import { Project } from '@./types/projects'
import { ContractAddress } from '@utils/constants'

const columnHelper = createColumnHelper<Project>()

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

export const setMyProjectsColumnsVisibility = (
  setColumnVisibility: (columns: {}) => void,
  screenSize: string
) => {
  if (screenSize === 'xl') {
    setColumnVisibility({
      name: true,
      totalAvailable: true,
      rewardsRate: true,
      rewards: true,
      marketPrice: true,
      buyMoreGraph: true
    })
  } else if (screenSize === 'lg') {
    setColumnVisibility({
      name: true,
      totalAvailable: true,
      rewardsRate: false,
      rewards: true,
      marketPrice: true,
      buyMoreGraph: true
    })
  } else if (screenSize === 'md') {
    setColumnVisibility({
      name: true,
      totalAvailable: true,
      rewardsRate: false,
      rewards: false,
      marketPrice: true,
      buyMoreGraph: true
    })
  } else if (screenSize === 'sm') {
    setColumnVisibility({
      name: true,
      totalAvailable: false,
      rewardsRate: false,
      rewards: false,
      marketPrice: true,
      buyMoreGraph: true
    })
  } else if (screenSize === 'base') {
    setColumnVisibility({
      name: true,
      totalAvailable: false,
      rewardsRate: false,
      rewards: false,
      marketPrice: false,
      buyMoreGraph: true
    })
  }
}

//creating specific column cells for the all projects table
export const allProjectsColumns = (selectedTable: boolean) => [
  columnHelper.accessor(row => row, {
    id: 'name',
    cell: info => {
      const project = info.getValue()
      const { token, name, createdAt } = project
      const { row } = info
      const isSelected = row.getIsSelected() && selectedTable
      return (
        <Stack
          spacing='10px'
          align='center'
          direction='row'
          maxW='175px'
          w='full'
        >
          <Image src={token.uiConfig.logoUri} w='30px' h='30px' />
          <Flex direction='column'>
            <Text as='h3' fontWeight={600} fontSize='15px'>
              {name}
            </Text>
            <Stack
              direction='row'
              spacing='8px'
              align='center'
              fontWeight={500}
              fontSize='12px'
            >
              <Text>{token.symbol.toUpperCase()}</Text>
              <Box
                w='4px'
                h='4px'
                borderRadius='full'
                bg={isSelected ? 'box-bg-primary' : 'box-bg-secondary'}
              />
              <Text>
                {new Date(createdAt)
                  .toLocaleDateString('en-us', {
                    month: 'short',
                    year: 'numeric'
                  })
                  .toUpperCase()}
              </Text>
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
  columnHelper.accessor(row => row, {
    id: 'nftPrice',
    header: 'NFT Price',
    cell: ({ getValue }) => (
      <Text as='h3'>
        {/* {getValue().toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })} */}
        {(6000).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}
      </Text>
    )
  }),
  columnHelper.accessor(row => row, {
    id: 'nftsMinted',
    header: 'NFTs Minted',
    // cell: info => <Text>{info.getValue().toLocaleString('en-US')}</Text>
    cell: info => {
      const project = info.getValue()
      const mintedQuery = useRewardNftTotalSupply({
          // address: project.rewardsDistributerAddress
          address: ContractAddress.Nft
        }),
        { data: mintedNfts } = mintedQuery
      if (mintedQuery.isSuccess) {
        return <Text>{mintedNfts?.toLocaleString('en-US')}</Text>
      } else if (mintedQuery.isLoading) {
        return <Text>loadin</Text>
      } else {
        return <Text>?</Text>
      }
    }
  }),
  columnHelper.accessor(row => row, {
    id: 'nftsStaked',
    header: 'NFTs Staked',
    cell: info => {
      const project = info.getValue()
      const stakedQuery = useRewardDistributorTotalStakedNfts({
          // address: project.rewardsDistributerAddress
          address: ContractAddress.RewardDistributor
        }),
        { data: stakedNfts } = stakedQuery
      if (stakedQuery.isSuccess) {
        return <Text>{stakedNfts?.toLocaleString('en-US')}</Text>
      } else if (stakedQuery.isLoading) {
        return <Text>loadin</Text>
      } else {
        return <Text>?</Text>
      }
    }
  }),
  columnHelper.accessor(row => row, {
    id: 'nftRewardsRate',
    header: 'NFT Rewards Rate',
    cell: info => {
      const project = info.getValue()
      const {
        token: { symbol }
      } = project

      const rewardsRateQuery = useRewardDistributorRewardsPerSecond({
          // address: project.rewardsDistributerAddress
          address: ContractAddress.RewardDistributor
        }),
        { data: rewardsRate } = rewardsRateQuery

      //WE DONT HAVE MARKET VALUE ATM
      const marketValueNow = '.00412'
      const dollarValue = new BigNumber(marketValueNow)
        .times(rewardsRate?.toString() || 0)
        .toNumber()

      const formatted = formatCurrency(dollarValue)

      return (
        <Flex as='span' direction='column'>
          <Text as='h3'>
            {rewardsRate?.toLocaleString('en-US')} {symbol.toUpperCase()}
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
      const project = info.getValue()
      const { token } = project

      //WE DONT HAVE MARKET VALUES ATM
      const marketValueNow = '.00412'
      const marketValue24HrsAgo = '.00498'
      // const { marketValueNow, marketValue24HrsAgo } = token

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
      const project = info.getValue()
      const { row } = info
      const isSelected = row.getIsSelected() && selectedTable
      return (
        <Button variant={isSelected ? 'secondary' : 'primary'}>Buy More</Button>
      )
    }
  })
]

//creating specific column cells for the my projects table
export const myProjectsColumns = (
  selectedTable: boolean,
  isConnected: boolean,
  address: Address
) => [
  columnHelper.accessor(row => row, {
    id: 'name',
    cell: info => {
      const project = info.getValue()
      const { token, name } = project
      return (
        <Stack
          spacing='10px'
          align='center'
          direction='row'
          maxW='175px'
          w='full'
        >
          <Image src={token.uiConfig.logoUri} w='30px' h='30px' />
          <Flex direction='column'>
            <Text as='h3' fontWeight={600} fontSize='15px'>
              {name}
            </Text>

            <Text fontWeight={500} fontSize='12px' color='text-gray'>
              {token.symbol.toUpperCase()}
            </Text>
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
  columnHelper.accessor(row => row, {
    id: 'totalAvailable',
    header: 'Total Available',
    cell: info => {
      const project = info.getValue()

      const balanceQuery = useRewardTokenBalanceOf({
          enabled: isConnected,
          // address: project.microTokenAddress
          address: ContractAddress.RewardToken,
          args: [address],

          watch: true
        }),
        { data: walletBalance } = balanceQuery

      const { token } = project
      const { symbol, decimals } = token
      //WE DONT HAVE MARKET VALUES ATM
      const marketValueNow = '.00412'
      const marketValue24HrsAgo = '.00498'

      const decimal = 1 / Math.pow(10, decimals || 18)
      const balance = formatBigNumber(walletBalance?.toString() || 0).times(
        decimal
      )

      const dollarValue = new BigNumber(marketValueNow)
        .times(balance)
        .toNumber()

      const formatted = formatCurrency(dollarValue)

      if (balanceQuery.isSuccess) {
        return (
          <Flex as='span' direction='column'>
            <Text as='h3'>
              {balance.decimalPlaces(4).toFormat()} {symbol.toUpperCase()}
            </Text>
            <Text fontWeight={500} fontSize='12px' color='text-gray'>
              {formatted}
            </Text>
          </Flex>
        )
      } else if (balanceQuery.isLoading) {
        return (
          <Flex as='span'>
            <Text>loadin</Text>
          </Flex>
        )
      } else {
        return <Text>?</Text>
      }
    }
  }),
  columnHelper.accessor(row => row, {
    id: 'rewardsRate',
    header: 'Rewards Rate',
    cell: info => {
      const project = info.getValue()

      const rewardsRateQuery = useRewardDistributorRewardsPerSecond({
          enabled: isConnected,
          // address: project.rewardsDistributerAddress
          address: ContractAddress.RewardDistributor,
          args: [address]
        }),
        { data: rewardsRate } = rewardsRateQuery
      const {
        token: { symbol }
      } = project
      //WE DONT HAVE MARKET VALUES ATM
      const marketValueNow = '.00412'

      const marketValue24HrsAgo = '.00498'
      // const { name, marketValueNow } = data

      // const dollarValue = marketValueNow * rewardsRate?.toString()

      const dollarValue = new BigNumber(marketValueNow)
        .times(rewardsRate?.toString() || 0)
        .toNumber()

      const formatted = formatCurrency(dollarValue)
      if (rewardsRateQuery.isSuccess) {
        return (
          <Flex as='span' direction='column'>
            <Text as='h3'>
              {rewardsRate?.toLocaleString('en-US')} {symbol.toUpperCase()}
            </Text>
            <Text fontWeight={500} fontSize='12px' color='text-gray'>
              {formatted}
            </Text>
          </Flex>
        )
      } else if (rewardsRateQuery.isLoading) {
        return <Text as='h3'>loadin</Text>
      } else {
        return <Text>?</Text>
      }
    }
  }),
  columnHelper.accessor(row => row, {
    id: 'rewards',
    header: 'Rewards',
    cell: info => {
      const project = info.getValue()

      const rewardsBalanceQuery = useRewardDistributorPendingRewards({
          enabled: isConnected,
          // address: project.rewardsDistributerAddress
          address: ContractAddress.RewardDistributor,
          args: [address]
        }),
        { data: rewardsBalance } = rewardsBalanceQuery

      //WE DONT HAVE MARKET VALUES ATM
      const marketValueNow = '.00412'
      const marketValue24HrsAgo = '.00498'
      const { token } = project
      const { symbol, decimals } = token

      const decimal = 1 / Math.pow(10, decimals || 18)
      const balance = formatBigNumber(rewardsBalance?.toString() || 0).times(
        decimal
      )
      const dollarValue = new BigNumber(marketValueNow)
        .times(balance)
        .toNumber()

      const formatted = formatCurrency(dollarValue)
      if (rewardsBalanceQuery.isSuccess) {
        return (
          <Flex as='span' direction='column'>
            <Text as='h3'>
              {balance.decimalPlaces(4).toFormat()} {symbol.toUpperCase()}
            </Text>
            <Text fontWeight={500} fontSize='12px' color='text-gray'>
              {formatted}
            </Text>
          </Flex>
        )
      } else if (rewardsBalanceQuery.isLoading) {
        return <Text>loadin</Text>
      } else {
        return <Text>?</Text>
      }
    }
  }),

  columnHelper.accessor(row => row, {
    id: 'marketPrice',
    header: 'Market Price',
    cell: info => {
      const project = info.getValue()

      //WE DONT HAVE MARKET VALUES ATM
      const marketValueNow = '.00412'
      const marketValue24HrsAgo = '.00498'
      // const { marketValueNow, marketValue24HrsAgo } = project

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
      const project = info.getValue()

      return <TableChart token={project.token} />
    }
  })
]

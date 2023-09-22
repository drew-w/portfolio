//Chakra
import { Button, Flex, Text } from '@chakra-ui/react'

//Data
import { useAccount } from 'wagmi'
import {
  useRewardTokenBalanceOf,
  useRewardDistributorPendingRewards
} from '@generated'
import { useState } from 'react'
import BigNumber from 'bignumber.js'

//Style UI
import { InfoTooltip } from '@components/InfoTooltip'
import { CollectModal } from '../Modals/CollectModal'

//Types
import { ContractAddress } from '@utils/constants'
import { Project } from '@./types/projects'
import { formatCurrency } from '@utils/format'
interface Props {
  projects: Project[]
}

export const BalanceCard = ({ projects }: Props) => {
  const account = useAccount()
  const { isConnected } = account

  const { total, pending } = projects.reduce(
    (totalBalance: { total: BigNumber; pending: BigNumber }, project) => {
      const { total, pending } = totalBalance
      const marketValue = '0.00412'
      const { decimals } = project.token
      const decimal = 1 / Math.pow(10, decimals)
      const balanceQuery = useRewardTokenBalanceOf({
        enabled: account.isConnected,
        // address: project.rewardsDistributerAddress,
        address: ContractAddress.RewardToken,
        args: [account.address!]
      })
      const pendingQuery = useRewardDistributorPendingRewards({
        enabled: account?.isConnected,
        // address: project.rewardsDistributerAddress,
        address: ContractAddress.RewardDistributor,
        args: [account.address!],
        watch: true
      })
      if (balanceQuery.isSuccess) {
        console.log('you did it!')
        const balance = BigNumber(balanceQuery.data?.toString() || 0)
        const dollarValue = balance.times(decimal).times(marketValue)
        const newTotal = total.plus(dollarValue)
        totalBalance.total = newTotal
      }
      if (pendingQuery.isSuccess) {
        console.log('you did it again!')
        const balance = BigNumber(pendingQuery.data?.toString() || 0)
        const dollarValue = balance.times(decimal).times(marketValue)
        const newPending = pending.plus(dollarValue)
        totalBalance.pending = newPending
      }
      return totalBalance
    },
    {
      total: BigNumber(0),
      pending: BigNumber(0)
    }
  )

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Flex
      as='section'
      direction='column'
      p='5px'
      w='full'
      maxW='320px'
      h='280px'
      bg='box-bg-secondary'
      borderRadius='10px'
      shadow='box-shadow-primary'
      justify='space-between'
    >
      {isConnected ? (
        <>
          <Flex
            w='full'
            flex={1}
            color='text-secondary'
            direction='column'
            justify='space-between'
            p='10px'
          >
            <Flex as='span' align='baseline' justify='space-between'>
              <Text fontSize='16px' fontWeight={500}>
                Rewards
              </Text>
              <InfoTooltip label='hello' dark />
            </Flex>
            <Flex as='span' w='full' justify='space-between' align='baseline'>
              <Button variant='secondary' onClick={() => setIsOpen(true)}>
                COLLECT
              </Button>
              <Text fontSize='30px' fontWeight='semibold'>
                {/* {(pendingRewards || 0)?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })} */}
                {formatCurrency(pending.toNumber())}
              </Text>
            </Flex>
          </Flex>
          <Flex
            flex={1}
            w='full'
            bg='box-bg-primary'
            borderRadius='10px'
            color='text-primary'
            direction='column'
            justify='space-between'
            p='10px'
          >
            <Flex as='span' align='baseline' justify='space-between'>
              <Text fontSize='16px' fontWeight={500}>
                Wallet
              </Text>
              <InfoTooltip label='are you feeling ok' />
            </Flex>
            <Flex as='span' w='full'>
              <Text fontSize='30px' fontWeight='semibold'>
                {formatCurrency(total.toNumber())}
              </Text>
            </Flex>
          </Flex>
        </>
      ) : (
        <Flex
          flex={1}
          direction='column'
          justify='flex-end'
          p='10px'
          color='text-secondary'
        >
          <div style={{ flex: 1 }}>
            <Text fontSize='20px' fontWeight='semibold'>
              Welcome
            </Text>
            <Text fontSize='12px' marginTop='5px'>
              Utilizing DEBT's Box's proprietary software, you can create a
              portfolio of blockchain miners. By purchasing and managing
              different software node licenses you can earn rewards from several
              asset classes, all from the comfort and convenience of your own
              home.
            </Text>
          </div>
          <Button
            fontSize='16px'
            height='30px'
            alignSelf='flex-end'
            variant='white'
          >
            Connect Wallet
          </Button>
        </Flex>
      )}
      <CollectModal isOpen={isOpen} setIsOpen={setIsOpen} projects={projects} />
    </Flex>
  )
}

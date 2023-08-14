'use client'
//Chakra
import { Button, Flex, Text } from '@chakra-ui/react'

//Data
import { useAccount } from 'wagmi'
import {
  useRewardTokenBalanceOf,
  useRewardDistributorPendingRewards
} from '@generated'
import { Connected } from '@components/Connected'

//Types
import { ContractAddress } from '@utils/constants'

export const BalanceCard = () => {
  const account = useAccount()

  const { data: tokenBalance } = useRewardTokenBalanceOf({
    enabled: account?.isConnected,
    address: ContractAddress.RewardToken,
    args: [account.address!]
  })

  const { data: pendingRewards } = useRewardDistributorPendingRewards({
    enabled: account?.isConnected,
    address: ContractAddress.RewardDistributor,
    args: [account.address!],
    watch: true
  })

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
      <Flex
        w='full'
        flex={1}
        color='text-secondary'
        direction='column'
        justify='space-between'
        p='12px'
      >
        <Connected>
          <Flex as='span'>
            <Text fontSize='16px'>Rewards</Text>
          </Flex>
          <Flex as='span' w='full' justify='space-between'>
            <Button>Collect</Button>
            <Text fontSize='30px' fontWeight='semibold'>
              {(pendingRewards || 0)?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
            </Text>
          </Flex>
        </Connected>
      </Flex>
      <Flex
        flex={1}
        w='full'
        bg='box-bg-primary'
        borderRadius='10px'
        color='text-primary'
        direction='column'
        justify='space-between'
        p='8px'
      >
        <Connected>
          <Flex as='span'>
            <Text fontSize='16px'>Wallet</Text>
          </Flex>
          <Flex as='span' w='full'>
            <></>
            <Text fontSize='30px' fontWeight='semibold'>
              {(tokenBalance || 0)?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
            </Text>
          </Flex>
        </Connected>
      </Flex>
    </Flex>
  )
}

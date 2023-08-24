'use client'
//Chakra
import { Button, Flex, Text } from '@chakra-ui/react'

//Data
import { useAccount } from 'wagmi'
import {
  useRewardTokenBalanceOf,
  useRewardDistributorPendingRewards
} from '@generated'

//Style UI
import { InfoTooltip } from '@components/InfoTooltip'

//Types
import { ContractAddress } from '@utils/constants'

export const BalanceCard = () => {
  const account = useAccount(),
    { isConnected } = account

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
      {isConnected ? (
        <>
          <Flex
            w='full'
            flex={1}
            color='text-white'
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
              <Button variant='secondary'>COLLECT</Button>
              <Text fontSize='30px' fontWeight='semibold'>
                {(pendingRewards || 0)?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </Text>
            </Flex>
          </Flex>
          <Flex
            flex={1}
            w='full'
            bg='box-bg-primary'
            borderRadius='10px'
            color='text-black'
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
              <></> {/*placeholder for percantage change */}
              <Text fontSize='30px' fontWeight='semibold'>
                {(tokenBalance || 0)?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </Text>
            </Flex>
          </Flex>
        </>
      ) : (
        <Flex color='text-white'>
          <Text>
            asdfjl fas jkl fs ljk dfs jkl f dsajkl dfsajlk fds ajl k;fads jlk
            ;dfas jkl dfas jlk df asjkl ;adfs jkl;dfsa jkl ;adfs jlk ; adfsjkl
            ;adfs jkl ;dfa jkl ;adfs jkl;df asjkl; adfsl ;jk
          </Text>
        </Flex>
      )}
    </Flex>
  )
}

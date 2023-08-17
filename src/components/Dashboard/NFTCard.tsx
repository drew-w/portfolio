//Chakra
import { Flex, Text, Button } from '@chakra-ui/react'

//Data
import { useAccount } from 'wagmi'
import {
  useRewardNftBalanceOf,
  useRewardDistributorPendingRewards
} from '@generated'

//Style UI
import { InfoTooltip } from '@components/InfoTooltip'

//Types
import { ContractAddress } from '@utils/constants'

export const NFTCard = ({}) => {
  const account = useAccount(),
    { isConnected } = account

  const { data: nftBalance } = useRewardNftBalanceOf({
    enabled: account?.isConnected,
    address: ContractAddress.Nft,
    args: [account.address!]
  })
  //temp~
  const { data: pendingRewards } = useRewardDistributorPendingRewards({
    enabled: account?.isConnected,
    address: ContractAddress.RewardDistributor,
    args: [account.address!],
    watch: true
  })
  //temp~~
  return (
    <Flex
      as='section'
      direction='column'
      bg='pink'
      w='full'
      maxW='320px'
      h='280px'
      shadow='box-shadow-primary'
    >
      {isConnected ? (
        <>
          <Flex
            w='full'
            h='135px'
            bg='box-bg-primary'
            borderRadius='10px'
            color='text-primary'
            direction='column'
            p='10px'
            mb='10px'
          >
            <Flex as='span' align='baseline' justify='space-between'>
              <Text fontSize='16px' fontWeight={500}>
                Total NFTs
              </Text>
              <InfoTooltip label='micros are small standards are big' />
            </Flex>
          </Flex>
          <Flex
            flex={1}
            justify='space-between'
            w='full'
            h='135px'
            bg='box-bg-primary'
            borderRadius='10px'
            color='text-primary'
            direction='column'
            p='10px'
          >
            <Flex as='span' align='baseline' justify='space-between'>
              <Text fontSize='16px' fontWeight={500}>
                Active Rate
              </Text>
              <InfoTooltip label='rate of activity, even (˶•ᴗ•˶)' />
            </Flex>
            <Flex as='span' w='full' justify='end'>
              <Text fontSize='30px' fontWeight='semibold'>
                {(pendingRewards || 0)?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
              </Text>
            </Flex>
          </Flex>
        </>
      ) : (
        <Flex color='text-secondary'>
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

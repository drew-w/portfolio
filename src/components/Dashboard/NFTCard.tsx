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
      w='full'
      maxW='320px'
      h='280px'
      shadow='box-shadow-primary'
    >
      {isConnected ? (
        <>
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
            mb='10px'
          >
            <Flex as='span' align='baseline' justify='space-between'>
              <Text fontSize='16px' fontWeight={500}>
                Total NFTs
              </Text>
              <InfoTooltip label='micros are small standards are big' />
            </Flex>
            <Flex
              w='220px'
              h='49px'
              bg='btn-secondary-bg'
              borderRadius='8px'
              color='text-primary'
              as='span'
              alignSelf='flex-end'
            >
              <Flex
                borderRadius='8px'
                p='5px'
                color='btn-primary-bg'
                w='115px'
                h='49px'
              >
                <Text alignSelf='flex-end' marginLeft='6px' fontSize='14px'>
                  Micro
                </Text>
                <Text
                  alignSelf='flex-end'
                  marginLeft='6px'
                  fontSize='30px'
                  fontWeight='semibold'
                  lineHeight='30px'
                >
                  {String(nftBalance || 0)}
                </Text>
              </Flex>

              <Flex
                borderRadius='8px'
                p='5px'
                bg='box-bg-secondary'
                color='box-bg-primary'
                w='115px'
                h='49px'
              >
                <Text alignSelf='flex-end' marginLeft='6px' fontSize='14px'>
                  Standard
                </Text>
                <Text
                  alignSelf='flex-end'
                  marginLeft='6px'
                  fontSize='30px'
                  fontWeight='semibold'
                  lineHeight='30px'
                >
                  {String(nftBalance || 0)}
                </Text>
              </Flex>
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
        <Flex
          color='text-primary'
          bg='box-bg-primary'
          w='full'
          h='280px'
          borderRadius='10px'
          p='15px'
          direction='column'
          justifyContent='space-between'
        >
          <div>
            <Text fontSize='20px' fontWeight='semibold'>
              Learn
            </Text>
            <Text fontSize='12px' marginTop='5px'>
              Learn about the DEBT ecosystem and gain an edge through the
              Insider Track! Watch podcast episodes on DEBT Insider and BizPro.
            </Text>
          </div>
          <Button
            variant='secondary'
            h='30px'
            fontSize='16px'
            alignSelf='flex-end'
          >
            Learn More
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

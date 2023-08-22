//Chakra
import { Flex, Text } from '@chakra-ui/react'

//Data
import { useAccount } from 'wagmi'
import { useRewardNftBalanceOf } from '@generated'

//Types
import { ContractAddress } from '@utils/constants'

export const TokenCard = ({}) => {
  const account = useAccount(),
    { isConnected } = account

  const { data: nftBalance } = useRewardNftBalanceOf({
    enabled: account?.isConnected,
    address: ContractAddress.Nft,
    args: [account.address!]
  })

  return (
    <Flex
      as='section'
      direction='column'
      p='5px'
      w='full'
      maxW='320px'
      h='280px'
      bg='box-bg-primary'
      borderRadius='10px'
      shadow='box-shadow-primary'
      justify='space-between'
      borderColor='#f3f3f3'
      borderWidth='1px'
    >
      {isConnected ? (
        <>
          
          <Flex
            flex={1}
            w='full'
            bg='box-bg-primary'
            borderRadius='10px'
            color='text-primary'
            direction='column'
            justify='space-between'
            p='10px'
          ></Flex>
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

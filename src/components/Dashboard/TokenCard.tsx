import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box
} from '@chakra-ui/react'

import { Icon } from '@components/Factory/Icon'

import { useAccount } from 'wagmi'
import { useRewardNftBalanceOf } from '@generated'
import Image from 'next/image'
import appStore from '@public/images/appStore.svg'
import playStore from '@public/images/playStore.svg'
import qrCode from '@public/images/qrCode.png'
import { menuListAnimationVariants } from '@theme/Menu'
import { useState } from 'react'

import { ContractAddress } from '@utils/constants'

export const TokenCard = ({}) => {
  const account = useAccount()
  const { isConnected } = account

  const { data: nftBalance } = useRewardNftBalanceOf({
    enabled: account?.isConnected,
    address: ContractAddress.Nft,
    args: [account.address!]
  })

  const [isActive, setIsActive] = useState(false)

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
            color='text-primary'
            direction='column'
            justify='space-between'
            p='10px'
          >
            <Menu gutter={0}>
              <MenuButton
                w='205px'
                h='40px'
                borderRadius='8px'
                paddingX='3'
                position='relative'
                _active={{
                  borderBottomRadius: '0px'
                }}
                onClick={() => setIsActive(!isActive)}
              >
                <Flex justifyContent='space-between' alignItems='center'>
                  Token Value
                  <Icon
                    prefix='far'
                    name={isActive ? 'chevron-up' : 'chevron-down'}
                  />
                </Flex>
                <Box
                  position='absolute'
                  bottom='0'
                  left='50%'
                  transform='translateX(-50%)'
                  w='90%'
                  h='1px'
                  bg='btn-white-bg'
                  visibility={isActive ? 'visible' : 'hidden'}
                ></Box>
              </MenuButton>

              <MenuList motionProps={{ variants: menuListAnimationVariants }}>
                <MenuItem>Rewards Rate</MenuItem>
                <MenuItem>Token Value</MenuItem>
                <MenuItem>NFT Count</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </>
      ) : (
        <Flex
          color='text-primary'
          bg='white'
          w='full'
          h='280px'
          borderRadius='10px'
          p='15px'
          direction='column'
          justifyContent='space-between'
        >
          <div>
            <Text fontSize='20px' fontWeight='semibold'>
              Download
            </Text>
            <Text fontSize='12px' marginTop='5px'>
              View and interact with the DEBT Box ecosystem on the go with our
              iOS and Android mobile apps.
            </Text>
          </div>
          <Flex justifyContent='space-between'>
            <Image src={qrCode} height={80} alt='qr code' />
            <Flex direction='column'>
              <Image src={appStore} alt='app store' />
              <Image src={playStore} alt='play store' />
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

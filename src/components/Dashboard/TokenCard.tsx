//Chakra
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'

//Data
import { useAccount } from 'wagmi'
import { useRewardNftBalanceOf } from '@generated'

//Style UI
import Image from 'next/image'
import appStore from '@public/images/appStore.svg'
import playStore from '@public/images/playStore.svg'
import qrCode from '@public/images/qrCode.png'
import { Variants } from 'framer-motion'
import { menuListAnimationVariants } from '@theme/Menu'

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

  const customMotionProps = {
    transition: { duration: 0.9 } // Animation duration
  }

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
          >
            <Menu gutter={0}>
              <MenuButton width='205px' paddingX='3'>
                Token Value
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

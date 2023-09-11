import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Box
} from '@chakra-ui/react'

import { Icon } from '@components/Factory/Icon'

import { useAccount } from 'wagmi'
import { useRewardNftBalanceOf } from '@generated'
import { walletBalance } from '@hooks/wallets'
import { data as tokenData } from '@hooks/tokens'
import { formatBalancePercentage, formatCurrency } from '@utils/format'
import { useEffect, useState } from 'react'

//Style UI
import Image from 'next/image'
import appStore from '@public/images/appStore.svg'
import playStore from '@public/images/playStore.svg'
import qrCode from '@public/images/qrCode.png'
import { menuListAnimationVariants } from '@theme/Menu'

import { ContractAddress } from '@utils/constants'
import { TokenKeys } from '@./types/tokens'

export const TokenCard = ({}) => {
  const account = useAccount()
  const { isConnected } = account

  const [top4Formatted, setFormattedBalances] = useState<{
    order: string[]
    data: {}
  }>()
  const [display, setDisplay] = useState<string>('Token Value')

  // const { data: nftBalance } = useRewardNftBalanceOf({
  //   enabled: account?.isConnected,
  //   address: ContractAddress.Nft,
  //   args: [account.address!]
  // })

  //todo this function will eventually be called in a useQuery hook so it can be refreshed
  useEffect(() => {
    if (isConnected) {
      const formatted = formatBalancePercentage(walletBalance, tokenData)
      setFormattedBalances(formatted)
    }
  }, [isConnected])

  const [selectedMenuItem, setSelectedMenuItem] = useState<
    'dollar' | 'percent'
  >('percent')

  return (
    <Flex
      as='section'
      direction='column'
      p='15px'
      w='full'
      maxW='320px'
      h='280px'
      bg='box-bg-primary'
      borderRadius='10px'
      shadow='box-shadow-primary'
      justify='space-between'
    >
      {isConnected ? (
        <>
          <Flex
            flex={1}
            w='full'
            bg='none'
            color='text-primary'
            direction='column'
            justify='space-between'
          >
            <Flex direction='row' justify='space-between'>
              <Menu gutter={0}>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      transition='all 0.2s'
                      w='205px'
                      h='40px'
                      borderRadius='8px'
                      paddingX='3'
                      position='relative'
                      fontSize='16px'
                      textAlign='left'
                      _expanded={{
                        borderBottomRadius: '0px'
                      }}
                      isActive={isOpen}
                      as={Button}
                      rightIcon={
                        <Icon
                          prefix='fas'
                          name={isOpen ? 'chevron-up' : 'chevron-down'}
                        />
                      }
                    >
                      {display}
                      <Box
                        position='absolute'
                        bottom='0'
                        left='50%'
                        transform='translateX(-50%)'
                        w='90%'
                        h='1px'
                        bg='btn-white-bg'
                        visibility={isOpen ? 'visible' : 'hidden'}
                      />
                    </MenuButton>

                    <MenuList
                      motionProps={{ variants: menuListAnimationVariants }}
                    >
                      <MenuItem onClick={() => setDisplay('Token Value')}>
                        Token Value
                      </MenuItem>
                      <MenuItem onClick={() => setDisplay('Rewards Rate')}>
                        Rewards Rate
                      </MenuItem>
                      <MenuItem onClick={() => setDisplay('NFT Count')}>
                        NFT Count
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
              <Menu gutter={0}>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      transition='all 0.2s'
                      w='80px'
                      h='40px'
                      borderRadius='8px'
                      paddingX='3'
                      position='relative'
                      _expanded={{
                        borderBottomRadius: '0px'
                      }}
                      isActive={isOpen}
                      as={Button}
                      rightIcon={
                        <Icon
                          prefix='fas'
                          name={isOpen ? 'chevron-up' : 'chevron-down'}
                        />
                      }
                    >
                      {selectedMenuItem === 'dollar' ? (
                        <Icon
                          prefix='fas'
                          name='dollar-sign'
                          color='icon-white'
                        />
                      ) : (
                        <Icon prefix='fas' name='percent' color='icon-white' />
                      )}
                    </MenuButton>

                    <MenuList
                      minW='80px'
                      motionProps={{ variants: menuListAnimationVariants }}
                    >
                      <MenuItem
                        color='icon-secondary'
                        icon={
                          <Icon prefix='fas' name='dollar-sign' color='auto' />
                        }
                        onClick={() => setSelectedMenuItem('dollar')}
                      />

                      <MenuItem
                        color='icon-secondary'
                        icon={<Icon prefix='fas' name='percent' color='auto' />}
                        onClick={() => setSelectedMenuItem('percent')}
                      />
                    </MenuList>
                  </>
                )}
              </Menu>
            </Flex>
            <Stack
              h='full'
              spacing='20px'
              direction='column'
              w='full'
              py='10px'
            >
              <Stack direction='row' spacing='2px' w='full'>
                {top4Formatted?.order.map(
                  (tokenKey: string | TokenKeys[any]) => {
                    const token = tokenData.find(
                      token => token.key === tokenKey
                    )
                    //@ts-ignore
                    const percent = top4Formatted?.data?.[
                      tokenKey
                    ]?.percent?.toString()

                    return (
                      <Box
                        borderRadius={15}
                        h='20px'
                        bg={token ? token.uiConfig.brandColor : 'text-primary'}
                        w={`${percent}%`}
                      />
                    )
                  }
                )}
              </Stack>
              <Stack spacing='9px'>
                {top4Formatted?.order.map(
                  (tokenKey: TokenKeys[any] | string) => {
                    const token = tokenData.find(
                      token => token.key === tokenKey
                    )
                    //@ts-ignore
                    const percent = top4Formatted?.data?.[tokenKey]?.percent
                      .decimalPlaces(2)
                      .toString()
                    //@ts-ignore
                    const dollar = top4Formatted?.data?.[
                      tokenKey
                    ]?.dollarAmount.toString()
                    const formattedDollar = formatCurrency(dollar)
                    return (
                      <Flex
                        direction='row'
                        w='full'
                        align='center'
                        justify='space-between'
                      >
                        <Stack direction='row' align='center' fontSize='15px'>
                          <Box
                            w='12px'
                            h='12px'
                            borderRadius='full'
                            bg={token?.uiConfig?.brandColor || 'text-primary'}
                          />
                          <Text>{token?.uiConfig?.name || 'Other'}</Text>
                        </Stack>
                        <Text as='h4' fontWeight={600} fontSize='16px'>
                          {selectedMenuItem === 'percent'
                            ? percent + '%'
                            : formattedDollar}
                        </Text>
                      </Flex>
                    )
                  }
                )}
              </Stack>
            </Stack>
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
            <Image src={qrCode} height={80} alt='qr code' draggable={false} />
            <Flex direction='column'>
              <Image src={appStore} alt='app store' draggable={false} />
              <Image src={playStore} alt='play store' draggable={false} />
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

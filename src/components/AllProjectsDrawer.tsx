/* eslint-disable react/jsx-no-comment-textnodes */
//Chakra
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Flex,
  Stack,
  Box,
  Image,
  Divider,
  HStack
} from '@chakra-ui/react'

//Data

//Style UI
import { InfoTooltip } from '@components/InfoTooltip'
import { Icon } from '@components/Factory/Icon'

//Types
import { Token } from '@./types/tokens'

interface Props {
  isOpen: boolean
  token: Token
  onClose: () => void
}

export const AllProjectsDrawer = ({
  isOpen,
  token,
  onClose,
  ...rest
}: Props) => {
  //todo this will be different when we get real token data

  return (
    <Drawer
      isOpen={isOpen && !!token}
      onClose={onClose}
      variant='alwaysOpen'
      blockScrollOnMount={false}
      {...rest}
    >
      {token && (
        <DrawerContent mt='81px' mr={{ base: 0, md: '20px' }} px='10px'>
          <DrawerCloseButton
            borderRadius='full'
            bg='btn-white-bg'
            shadow='box-shadow-primary'
            borderWidth={2}
            borderColor='box-border'
            zIndex={1}
          />

          <DrawerBody
            css={{
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            <Stack spacing='20px'>
              {/* hero image with token image and buy more button */}
              <Flex px='15px' pt='25px' direction='column' position='relative'>
                <Image
                  w='300px'
                  h='150px'
                  bg='black'
                  borderRadius={10}
                  src='https://www.thedebtbox.com/_next/image?url=%2Fimages%2FHomeHero.png&w=1920&q=75'
                  alt='qr code'
                  draggable={false}
                  objectFit='cover'
                />
                <Flex
                  maxW='270px'
                  h='80px'
                  position='absolute'
                  bottom='-40px'
                  px='20px'
                  w='full'
                  align='flex-end'
                  justify='space-between'
                >
                  <Box
                    borderRadius={8}
                    borderWidth={2}
                    borderColor='box-primary-bg'
                    w='80px'
                    h='80px'
                    backgroundImage={token.uiConfig.tokenLogo}
                    backgroundPosition='center'
                    backgroundSize='150%'
                  />
                  <Button variant='square' h='22px' p='3px 6px' fontSize='12px'>
                    Buy Now
                  </Button>
                </Flex>
              </Flex>
              {/* token name and symbol */}
              <Stack
                direction='row'
                mt='20px'
                spacing='4px'
                as='span'
                px='15px'
                align='baseline'
                fontWeight={600}
              >
                <Text as='h1' fontSize={22}>
                  {token.uiConfig.name}
                </Text>
                <Text color='text-gray' fontSize={14}>
                  {token.name}
                </Text>
              </Stack>
              {/* description box */}
              <Stack
                spacing='12px'
                p='20px'
                shadow='box-shadow-primary'
                borderWidth={1}
                borderColor='box-border'
                borderRadius={10}
                direction='column'
              >
                <Text as='h3' fontWeight={600}>
                  Description
                </Text>
                <Text as='p' fontWeight={400} fontSize={12}>
                  D.E.B.T. (Decentralized Eco-Friendly Blockchain Technology)
                  revolutionizes the crypto industry as a space where crypto
                  meets commodities. NFTs in the D.E.B.T. Ecosystem collection
                </Text>
              </Stack>
              <Stack
                spacing='12px'
                p='20px'
                shadow='box-shadow-primary'
                borderWidth={1}
                borderColor='box-border'
                borderRadius={10}
                direction='column'
              >
                <Text as='h3' fontWeight={600}>
                  Project Details
                </Text>
                <Divider />
                <Stack spacing='23px'>
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={500} fontSize={14}>
                        Current NFT Price
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Text as='p' fontWeight={600} fontSize={16}>
                      $7,500
                    </Text>
                  </Flex>
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={500} fontSize={14}>
                        Total NFTs
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Text as='p' fontWeight={600} fontSize={16}>
                      50,000
                    </Text>
                  </Flex>
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={500} fontSize={14}>
                        Sold NFTs
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Text as='p' fontWeight={600} fontSize={16}>
                      50,000
                    </Text>
                  </Flex>
                  <Divider />
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={500} fontSize={14}>
                        NFT Reward Rate
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Text as='p' fontWeight={600} fontSize={16}>
                      3.68 BGLD
                    </Text>
                  </Flex>
                  <Divider />
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={500} fontSize={14}>
                        Launch Date
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Text as='p' fontWeight={600} fontSize={16}>
                      July 28, 2023
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
              <Stack
                p='20px'
                shadow='box-shadow-primary'
                borderWidth={1}
                borderColor='box-border'
                borderRadius={10}
              >
                <Flex alignItems='center' justifyContent='space-between'>
                  <Text marginRight='5px' fontWeight={500} fontSize={14}>
                    Lite Paper
                  </Text>
                  <InfoTooltip label="when I'm with you " />
                </Flex>
              </Stack>
              <Stack
                p='20px'
                shadow='box-shadow-primary'
                borderWidth={1}
                borderColor='box-border'
                borderRadius={10}
              >
                <Flex alignItems='center' justifyContent='space-between'>
                  <Text fontWeight={400} fontSize={14}>
                    Market Price
                  </Text>
                  <Flex textAlign='right' direction='column'>
                    <Text fontSize='16px' fontWeight={500}>
                      $0.512
                    </Text>
                    <Text fontSize='13px' fontWeight={600} color='text-green'>
                      <Icon
                        size='14px'
                        prefix='fas'
                        name={'arrow-up-right'}
                        color='text-green'
                        marginRight='4px'
                      />
                      0.9%
                    </Text>
                  </Flex>
                </Flex>
              </Stack>
              //todo graph for tokens
              <Stack
                p='20px'
                shadow='box-shadow-primary'
                borderWidth={1}
                borderColor='box-border'
                borderRadius={10}
              >
                <Flex alignItems='center' direction='column'>
                  <Image src={token.uiConfig.tokenLogo} w='80px' h='80px' />
                  <Flex
                    direction='column'
                    alignItems='center'
                    marginBottom='27px'
                  >
                    <Text
                      fontWeight={600}
                      as='h1'
                      fontSize={22}
                      marginTop='11px'
                    >
                      {token.uiConfig.name}
                    </Text>
                    <Text fontWeight={400} fontSize={14}>
                      {token.name}
                    </Text>
                  </Flex>
                  <HStack>
                    <Button
                      minW='125'
                      h='38px'
                      padding='20px'
                      variant='squareBlue'
                    >
                      Collect
                    </Button>
                    <Button
                      minW='125'
                      h='38px'
                      padding='20px'
                      variant='squareGray'
                    >
                      Mint
                    </Button>
                  </HStack>
                  <HStack marginTop='8px'>
                    <Button
                      minW='125'
                      h='38px'
                      padding='20px'
                      variant='squareGray'
                    >
                      Unstake
                    </Button>
                    <Button
                      minW='125'
                      h='38px'
                      padding='20px'
                      variant='squareGray'
                    >
                      Stake
                    </Button>
                  </HStack>
                </Flex>
              </Stack>
              <Stack
                spacing='12px'
                p='20px'
                shadow='box-shadow-primary'
                borderWidth={1}
                borderColor='box-border'
                borderRadius={10}
                direction='column'
              >
                <Text as='h3' fontWeight={600}>
                  My {token.uiConfig.name}
                </Text>
                <Divider />
                <Stack spacing='23px'>
                  <Flex alignItems='flex-start' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={400} fontSize={14}>
                        Wallet Balance
                      </Text>
                    </Flex>
                    <Flex alignItems='end' direction='column'>
                      <Text as='p' fontWeight={600} fontSize={16}>
                        140,210 {token.name}
                      </Text>
                      <Text color='text-gray' fontWeight={500} fontSize={12}>
                        $29,600
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex alignItems='flex-start' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={400} fontSize={14}>
                        Rewards Balance
                      </Text>
                    </Flex>
                    <Flex alignItems='end' direction='column'>
                      <Text as='p' fontWeight={600} fontSize={16}>
                        1,828 {token.name}
                      </Text>
                      <Text color='text-gray' fontWeight={500} fontSize={12}>
                        $29,600
                      </Text>
                    </Flex>
                  </Flex>
                  <Divider />
                  <Flex alignItems='flex-start' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={400} fontSize={14}>
                        Total Available
                      </Text>
                    </Flex>
                    <Flex alignItems='end' direction='column'>
                      <Text as='p' fontWeight={600} fontSize={16}>
                        142,038 {token.name}
                      </Text>
                      <Text color='text-gray' fontWeight={500} fontSize={12}>
                        $29,600
                      </Text>
                    </Flex>
                  </Flex>
                </Stack>
              </Stack>
              <Stack
                p='20px'
                shadow='box-shadow-primary'
                borderWidth={1}
                borderColor='box-border'
                borderRadius={10}
              >
                <Flex alignItems='center' justifyContent='space-between'>
                  <Text fontWeight={400} fontSize={14}>
                    Market Price
                  </Text>
                  <Flex textAlign='right' direction='column'>
                    <Text fontSize='16px' fontWeight={500}>
                      $0.512
                    </Text>
                    <Text fontSize='13px' fontWeight={600} color='text-green'>
                      <Icon
                        size='14px'
                        prefix='fas'
                        name={'arrow-up-right'}
                        color='text-green'
                        marginRight='4px'
                      />
                      0.9%
                    </Text>
                  </Flex>
                </Flex>
              </Stack>
              <Stack
                spacing='12px'
                p='20px'
                shadow='box-shadow-primary'
                borderWidth={1}
                borderColor='box-border'
                borderRadius={10}
                direction='column'
              >
                <Text as='h3' fontWeight={600}>
                  Rewards
                </Text>
                <Divider />
                <Stack spacing='23px'>
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={400} fontSize={14}>
                        Rewards Rate
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Text as='p' fontWeight={600} fontSize={16}>
                      $100,000
                    </Text>
                  </Flex>

                  <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={400} fontSize={14}>
                        NFTs Staked
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Text as='p' fontWeight={600} fontSize={16}>
                      50,000
                    </Text>
                  </Flex>
                  <Divider />
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={400} fontSize={14}>
                        Total Project Rate
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Text as='p' fontWeight={600} fontSize={16}>
                      50,000
                    </Text>
                  </Flex>
                </Stack>
              </Stack>
            </Stack>
            <Text mt='1000px'>scroll test</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      )}
    </Drawer>
  )
}

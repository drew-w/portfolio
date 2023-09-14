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
import { DrawerChart } from '@components/Charts/DrawerChart'
import { InfoTooltip } from '@components/InfoTooltip'
import { Icon } from '@components/Factory/Icon'
import { useState } from 'react'
import { MintNFTModal } from './Modals/MintNFTModal'

//Types
import { Token } from '@./types/tokens'

interface Props {
  token: Token
  onClose: () => void
}

export const AllProjectsDrawer = ({ token, onClose }: Props) => {
  //todo this will be different when we get real token data

  return (
    <>
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
              },
              scrollbarWidth: 'none'
            }}
          >
            <Stack spacing='20px'>
              {/* hero image with token image and buy more button */}
              <Flex px='15px' pt='25px' direction='column' position='relative'>
                <Image
                  w='300px'
                  h='150px'
                  borderRadius={10}
                  src={token.uiConfig.headerImage}
                  alt='qr code'
                  draggable={false}
                  objectFit='cover'
                />
                <Flex
                  maxW='300px'
                  h='80px'
                  position='absolute'
                  bottom='-40px'
                  px='20px'
                  w='full'
                  align='flex-end'
                  justify='space-between'
                >
                  <Box
                    w='80px'
                    h='80px'
                    borderWidth={2}
                    borderRadius={8}
                    bg='box-bg-primary'
                    borderColor='box-bg-primary'
                  >
                    <Image
                      src={token.uiConfig.tokenLogoSquare}
                      w='full'
                      borderRadius='md'
                      draggable={false}
                    />
                  </Box>

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
              <DrawerChart token={token} />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      )}
    </>
  )
}

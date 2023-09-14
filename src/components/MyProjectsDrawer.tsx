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

//Types
import { Token } from '@./types/tokens'

interface Props {
  token: Token
  onClose: () => void
}

export const MyProjectsDrawer = ({ token, onClose }: Props) => {
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
                      minW='145'
                      h='38px'
                      padding='20px'
                      variant='squareBlue'
                    >
                      Collect
                    </Button>
                    <Button
                      minW='145'
                      h='38px'
                      padding='20px'
                      variant='squareGray'
                    >
                      Mint
                    </Button>
                  </HStack>
                  <HStack marginTop='8px'>
                    <Button
                      minW='145'
                      h='38px'
                      padding='20px'
                      variant='squareGray'
                    >
                      Unstake
                    </Button>
                    <Button
                      minW='145'
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
                  <Flex alignItems='flex-start' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={400} fontSize={14}>
                        Rewards Rate
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Flex alignItems='end' direction='column'>
                      <Text as='p' fontWeight={600} fontSize={16}>
                        682.72 {token.name}
                      </Text>
                      <Text color='text-gray' fontWeight={500} fontSize={12}>
                        $40.82
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex alignItems='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={400} fontSize={14}>
                        NFTs Staked
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Text as='p' fontWeight={600} fontSize={16}>
                      8
                    </Text>
                  </Flex>
                  <Divider />
                  <Flex alignItems='flex-start' justifyContent='space-between'>
                    <Flex alignItems='center'>
                      <Text marginRight='5px' fontWeight={400} fontSize={14}>
                        Total Project Rate
                      </Text>
                      <InfoTooltip label="when I'm with you " />
                    </Flex>
                    <Flex alignItems='end' direction='column'>
                      <Text as='p' fontWeight={600} fontSize={16}>
                        5,461.76 {token.name}
                      </Text>
                      <Text color='text-gray' fontWeight={500} fontSize={12}>
                        $326.56
                      </Text>
                    </Flex>
                  </Flex>
                </Stack>
              </Stack>
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

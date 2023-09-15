import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Box,
  Heading,
  VStack,
  Flex,
  Image,
  Stack,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider
} from '@chakra-ui/react'

import { pendingBalance } from '@hooks/wallets'
import { data } from '@hooks/tokens'
import { formatBigNumber } from '@utils/format'
import { useState } from 'react'
import { Icon } from '@components/Factory/Icon'

import { Token } from '@./types/tokens'

interface Props {
  isOpen: boolean
  token: Token
  setIsOpen: (open: boolean) => void
}

export function MintNFTModal ({ isOpen, token, setIsOpen }: Props) {
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        minW={{ base: '200px', md: '350px', lg: '500px' }}
        minH='781px'
        borderRadius='12px'
      >
        <ModalHeader>Mint NFT</ModalHeader>
        <ModalBody>
          <Stack spacing={5}>
            <Box
              border='1px solid'
              borderRadius='8px'
              borderColor='box-border'
              px='15px'
              paddingTop='10px'
              paddingBottom='16px'
            >
              <Text fontSize='12px'>
                Minting blah helps ensure that only legitimate data transactions
                are added to a blockchain. Participants trying to earn a chance.
                {token?.name}
              </Text>
            </Box>

            <Box
              alignItems='center'
              justifyContent='space-between'
              border='1px solid'
              borderColor='box-border'
              borderRadius='6'
              padding='10px'
              marginBottom='8px'
            >
              <Flex direction={['column', 'column', 'row']} alignItems='center'>
                <Image
                  src={token?.uiConfig.tokenLogo}
                  height={50}
                  width={50}
                  alt='token image'
                  marginRight='8px'
                />
                <Flex direction='column'>
                  <Text fontSize='14px' fontWeight={600} marginRight='5px'>
                    {token?.name} NFT
                  </Text>
                  <Text
                    fontSize='14px'
                    fontWeight={500}
                    color='text-light-gray'
                  >
                    {token?.uiConfig.name}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Stack>
          <Stack>
            <Flex alignItems='center' w='full' justifyContent='flex-end'>
              <Icon
                size='15px'
                prefix='fas'
                name={'timer'}
                color='text-gray'
                marginRight='6px'
              />
              <Text color='text-gray' fontWeight={500} fontSize={14}>
                Values update in 10s
              </Text>
            </Flex>
            <HStack spacing={3} justifyContent='space-between'>
              <Box
                border='1px solid'
                borderColor='box-border'
                borderRadius='6'
                padding='10px'
                marginBottom='8px'
                w='full'
              >
                <Flex alignItems='flex-start' justifyContent='space-between'>
                  <Text
                    marginRight='5px'
                    color='text-gray'
                    fontWeight={500}
                    fontSize={14}
                  >
                    Quantity
                  </Text>
                  <NumberInput
                    size='xs'
                    focusBorderColor='transparent'
                    maxW={20}
                    defaultValue={1}
                    min={1}
                  >
                    <NumberInputField
                      fontWeight={500}
                      fontSize={14}
                      borderWidth='0px'
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Flex>
              </Box>
              <Box
                border='1px solid'
                borderColor='box-border'
                borderRadius='6'
                padding='10px'
                marginBottom='8px'
                w='full'
              >
                <Flex alignItems='flex-start' justifyContent='space-between'>
                  <Text
                    marginRight='5px'
                    color='text-gray'
                    fontWeight={500}
                    fontSize={14}
                  >
                    Price
                  </Text>
                  <Text fontWeight={500} fontSize={14}>
                    $1,500
                  </Text>
                </Flex>
              </Box>
            </HStack>
            <HStack spacing={3} justifyContent='space-between'>
              <Box
                border='1px solid'
                borderColor='box-border'
                borderRadius='6'
                padding='10px'
                marginBottom='8px'
                w='full'
              >
                <Flex
                  direction={['column', 'column', 'row']}
                  alignItems='flex-start'
                  justifyContent='space-between'
                >
                  <Text
                    marginRight='5px'
                    color='text-gray'
                    fontWeight={500}
                    fontSize={14}
                  >
                    Total USD
                  </Text>
                  <Text fontWeight={500} fontSize={14}>
                    $6,000
                  </Text>
                </Flex>
              </Box>
              <Box
                border='1px solid'
                borderColor='box-border'
                borderRadius='6'
                padding='10px'
                marginBottom='8px'
                w='full'
              >
                <Flex
                  direction={['column', 'column', 'row']}
                  alignItems='flex-start'
                  justifyContent='space-between'
                >
                  <Text
                    marginRight='5px'
                    color='text-gray'
                    fontWeight={500}
                    fontSize={14}
                  >
                    Total DEBT
                  </Text>
                  <Text fontWeight={500} fontSize={14}>
                    1,690.16
                  </Text>
                </Flex>
              </Box>
            </HStack>
            <Box
              border='1px solid'
              borderColor='box-border'
              borderRadius='6'
              padding='10px'
              marginBottom='8px'
              w='full'
            >
              <Flex alignItems='flex-start' justifyContent='space-between'>
                <Flex direction='column'>
                  <Text
                    marginRight='5px'
                    color='text-gray'
                    fontWeight={500}
                    fontSize={14}
                  >
                    Available
                  </Text>
                  <Text color='text-red' fontWeight={500} fontSize={12}>
                    Insufficient Funds
                  </Text>
                </Flex>
                <Flex alignItems='end' direction='column'>
                  <Text fontWeight={500} fontSize={14}>
                    $67,804.10
                  </Text>
                  <Text color='text-gray' fontWeight={500} fontSize={12}>
                    (14,870.22 DEBT)
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              border='1px solid'
              borderColor='box-border'
              borderRadius='6'
              padding='10px'
              marginBottom='8px'
              w='full'
            >
              <Flex justifyContent='space-between'>
                <Text color='text-gray' fontWeight={500} fontSize={14}>
                  Payment Method
                </Text>
                <Text fontWeight={500} fontSize={14}>
                  DEBT
                </Text>
              </Flex>
            </Box>
            <Box
              border='1px solid'
              borderColor='box-border'
              borderRadius='6'
              padding='10px'
              marginBottom='8px'
              w='full'
            >
              <Flex
                direction={['column', 'column', 'row']}
                justifyContent={'space-between'}
              >
                <Text color='text-gray' fontWeight={500} fontSize={14}>
                  Total
                </Text>
                <Stack w='200px' spacing={1}>
                  <Flex justifyContent='space-between'>
                    <Text color='text-gray' fontWeight={500} fontSize={14}>
                      NFTs
                    </Text>
                    <Text fontWeight={500} fontSize={14}>
                      $6,000
                    </Text>
                  </Flex>
                  <Flex justifyContent='flex-end'>
                    <Text color='text-gray'>(1,690.16 DEBT)</Text>
                  </Flex>
                  <Flex justifyContent='space-between'>
                    <Text color='text-gray' fontWeight={500} fontSize={14}>
                      Mint Fee
                    </Text>
                    <Text fontWeight={500} fontSize={14}>
                      $6,000
                    </Text>
                  </Flex>
                  <Flex justifyContent='flex-end'>
                    <Text color='text-gray'>($25 x 4)</Text>
                  </Flex>
                  <Divider />
                  <Flex justifyContent='space-between'>
                    <Text color='text-gray' fontWeight={500} fontSize={14}>
                      Total Cost
                    </Text>
                    <Text fontWeight={500} fontSize={14}>
                      $6,100
                    </Text>
                  </Flex>
                  <Flex justifyContent='flex-end'>
                    <Text color='text-gray'>(1,820.13 DEBT)</Text>
                  </Flex>
                </Stack>
              </Flex>
            </Box>
          </Stack>
        </ModalBody>

        <ModalFooter justifyContent='space-between'>
          <Button variant='squareGray' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='squareBlue' onClick={onClose}>
            Approve
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

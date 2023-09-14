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
  HStack
} from '@chakra-ui/react'

import { pendingBalance } from '@hooks/wallets'
import { data } from '@hooks/tokens'
import { formatBigNumber } from '@utils/format'
import { useState } from 'react'
import { ApproveModal } from './ApproveModal'

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
  const [approveModalOpen, setApproveModalOpen] = useState(false)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        minW={{ base: '200px', md: '350px', lg: '500px' }}
        h='570px'
        borderRadius='12px'
      >
        <ModalHeader>Mint NFT</ModalHeader>

        <ModalBody>
          <Stack spacing={7}>
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

          <HStack justifyContent='space-between'>
            <Box
              border='1px solid'
              borderColor='box-border'
              borderRadius='6'
              padding='10px'
              marginBottom='8px'
            >
              <Flex alignItems='flex-start' justifyContent='space-between'>
                <Flex alignItems='center'>
                  <Text marginRight='5px' fontWeight={400} fontSize={14}>
                    Total USD
                  </Text>
                </Flex>
                <Flex alignItems='end' direction='column'>
                  <Text as='p' fontWeight={600} fontSize={16}>
                    $6,000
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
            >
              <Flex alignItems='flex-start' justifyContent='space-between'>
                <Flex alignItems='center'>
                  <Text marginRight='5px' fontWeight={400} fontSize={14}>
                    Total DEBT
                  </Text>
                </Flex>
                <Flex alignItems='end' direction='column'>
                  <Text as='p' fontWeight={600} fontSize={16}>
                    1,690.16
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </HStack>
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
      <ApproveModal isOpen={approveModalOpen} setIsOpen={setApproveModalOpen} />
    </Modal>
  )
}

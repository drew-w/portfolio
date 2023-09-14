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
  Image
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
          <Box
            border='2px solid'
            borderRadius='8px'
            borderColor='box-border'
            px='15px'
            paddingTop='10px'
            paddingBottom='16px'
            boxShadow='box-shadow-primary'
          >
            <Text fontSize='12px'>
              Minting blah helps ensure that only legitimate data transactions
              are added to a blockchain. Participants trying to earn a chance.
              {token?.name}
            </Text>
          </Box>

          <Flex
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
                height={30}
                width={30}
                alt='token image'
                marginRight='8px'
              />
              <Text fontSize='12px' fontWeight='500' marginRight='5px'>
                {token?.uiConfig.name}
              </Text>
              <Text color='text-light-gray'>{token?.name}</Text>
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Box flex='1' />
          <Button variant='square' onClick={onClose}>
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
      <ApproveModal isOpen={approveModalOpen} setIsOpen={setApproveModalOpen} />
    </Modal>
  )
}

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
  Heading
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function CollectModal ({ isOpen, setIsOpen }: Props) {
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Collect Rewards</ModalHeader>
        <ModalCloseButton />

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
              Collecting helps ensure that only legitimate data transactions are
              added to a blockchain. Participants trying to earn a chance.
              Staking helps ensure that only legitimate data transactions are
              added to a blockchain. Participants trying to earn a chance.
            </Text>
          </Box>

<Heading fontSize='14px' fontWeight='500' marginTop='20px'>My Rewards</Heading>

        </ModalBody>

        <ModalFooter>
          <Box flex='1' />
          <Button variant='square' onClick={onClose}>
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

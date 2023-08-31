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
  Box
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function ApproveModal ({ isOpen, setIsOpen }: Props) {
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Approve Wallet</ModalHeader>

        <ModalBody>
          <Text>
            Collecting helps ensure that only legitimate data transactions are
            added to a blockchain. Participants trying to earn a chance. Staking
            helps ensure that only legitimate data transactions are added to a
            blockchain. Participants trying to earn a chance.
          </Text>
        </ModalBody>

        <ModalFooter marginTop='60px'>
          <Box flex='1' />
          <Button variant='square' onClick={onClose}>
            Approve
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

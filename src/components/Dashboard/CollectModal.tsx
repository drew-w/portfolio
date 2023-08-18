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
  Flex
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
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Collect Rewards</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Collecting helps ensure that only legitimate data transactions are
            added to a blockchain. Participants trying to earn a chance. Staking
            helps ensure that only legitimate data transactions are added to a
            blockchain. Participants trying to earn a chance.
          </Text>
        </ModalBody>

        <ModalFooter justifyContent='center'>
        <Flex justify="space-between" w="100%">
            <Button variant='square' onClick={onClose}>
              Close
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

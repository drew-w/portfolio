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
  useBreakpointValue
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function ApproveModal ({ isOpen, setIsOpen }: Props) {
  const onClose = () => {
    setIsOpen(false)
  }

  const topStyle = useBreakpointValue({
    base: 'auto', // Apply 'auto' on small screens
    md: '20px' // Apply '20px' on medium and larger screens
  })

  const leftStyle = useBreakpointValue({
    base: 'auto', // Apply 'auto' on small screens
    md: '20px' // Apply '20px' on medium and larger screens
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        minW={{ base: '200px', md: '350px', lg: '500px' }}
        borderRadius='12px'
        style={{
          top: topStyle,
          left: leftStyle
        }}
      >
        <ModalHeader>Approve Wallet</ModalHeader>

        <ModalBody>
          <Box
            border='2px solid'
            borderRadius='8px'
            borderColor='box-border'
            px='15px'
            paddingTop='10px'
            paddingBottom='16px'
            boxShadow='box-shadow-primary'
            minW={{ base: '200px', md: '350px', lg: '440px' }}
            minH='94px'
          >
            <Text>
              Collecting helps ensure that only legitimate data transactions are
              added to a blockchain. Participants trying to earn a chance.
              Staking helps ensure that only legitimate data transactions are
              added to a blockchain. Participants trying to earn a chance.
            </Text>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button padding='20px' variant='squareGray' onClick={onClose}>
            Cancel
          </Button>
          <Box flex='1' />
          <Button padding='20px' variant='squareBlue' onClick={onClose}>
            Approve
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

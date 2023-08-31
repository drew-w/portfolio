//Chakra
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Image,
  Text
} from '@chakra-ui/react'

//Style UI

//Data
import { data as tokenData } from '@hooks/tokens'

//Types
import { Token } from '@./types/tokens'

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  rowSelection: {}
  setRowSelection: (arg: {}) => void
}

export const AllProjectsDrawer = ({
  isOpen,
  setIsOpen,
  rowSelection,
  setRowSelection,
  ...rest
}: Props) => {
  const onClose = () => {
    console.log('hello')
    setIsOpen(false)
    setRowSelection({})
  }
  //todo this will be different when we get real token data
  const [index] = Object.keys(rowSelection)
  const selectedToken: Token = tokenData[parseInt(index)]

  return (
    <Drawer
      isOpen={isOpen}
      //   placement='right'
      onClose={onClose}
      //   blockScrollOnMount={false}
      //   closeOnOverlayClick={false}
      //   autoFocus={false}
      //   trapFocus={false}
      variant='alwaysOpen'
      {...rest}
    >
      {selectedToken && (
        <DrawerContent
        // h='calc(100vh - 61px)'
        >
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Image src={selectedToken.uiConfig.tokenLogo} w='30px' h='30px' />
            <Text>{selectedToken.uiConfig.name}</Text>
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

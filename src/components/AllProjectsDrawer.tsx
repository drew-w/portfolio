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
  Image
} from '@chakra-ui/react'

//Data

//Types
import { Token } from '@./types/tokens'

interface Props {
  isOpen: boolean
  token: Token
  onClose: () => void
}

export const AllProjectsDrawer = ({
  isOpen,
  token,
  onClose,
  ...rest
}: Props) => {
  //todo this will be different when we get real token data

  return (
    <Drawer
      isOpen={isOpen && !!token}
      onClose={onClose}
      variant='alwaysOpen'
      blockScrollOnMount={false}
      {...rest}
    >
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
              }
            }}
          >
            <Stack spacing='20px'>
              {/* hero image with token image and buy more button */}
              <Flex px='15px' pt='25px' direction='column' position='relative'>
                <Image
                  w='300px'
                  h='150px'
                  bg='black'
                  borderRadius={10}
                  src='https://www.thedebtbox.com/_next/image?url=%2Fimages%2FHomeHero.png&w=1920&q=75'
                  alt='qr code'
                  draggable={false}
                  objectFit='cover'
                />
                <Flex
                  maxW='270px'
                  h='80px'
                  position='absolute'
                  bottom='-40px'
                  px='20px'
                  // bg='red.300'
                  w='full'
                  align='flex-end'
                  justify='space-between'
                >
                  <Box
                    borderRadius={8}
                    borderWidth={2}
                    borderColor='box-primary-bg'
                    w='80px'
                    h='80px'
                    backgroundImage={token.uiConfig.tokenLogo}
                    backgroundPosition='center'
                    backgroundSize='150%'
                  />
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
            </Stack>

            <Text mt='1000px'>scroll test</Text>
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

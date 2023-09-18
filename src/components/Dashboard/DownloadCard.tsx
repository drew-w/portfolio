//Chakra
import { Flex, Text } from '@chakra-ui/react'

//Data
import Image from 'next/image'
import appStore from '@public/images/appStore.svg'
import playStore from '@public/images/playStore.svg'
import qrCode from '@public/images/qrCode.png'

export const DownloadCard = () => (
  <Flex
    as='section'
    direction='column'
    p='15px'
    w='full'
    maxW='320px'
    h='280px'
    bg='box-bg-primary'
    borderRadius='10px'
    shadow='box-shadow-primary'
    justify='space-between'
  >
    <Flex
      color='text-primary'
      bg='white'
      w='full'
      h='280px'
      borderRadius='10px'
      p='15px'
      direction='column'
      justifyContent='space-between'
    >
      <div>
        <Text fontSize='20px' fontWeight='semibold'>
          Download
        </Text>
        <Text fontSize='12px' marginTop='5px'>
          View and interact with the DEBT Box ecosystem on the go with our iOS
          and Android mobile apps.
        </Text>
      </div>
      <Flex justifyContent='space-between'>
        <Image src={qrCode} height={80} alt='qr code' draggable={false} />
        <Flex direction='column'>
          <Image src={appStore} alt='app store' draggable={false} />
          <Image src={playStore} alt='play store' draggable={false} />
        </Flex>
      </Flex>
    </Flex>
  </Flex>
)

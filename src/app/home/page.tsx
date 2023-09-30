'use client'
//Chakra
import { Flex, Heading, Box, Stack } from '@chakra-ui/react'

//Style UI
import { LandingBox } from '@components/LandingBox'
import { TechMarquee } from '@components/TechMarquee'

export default function Home () {
  return (
    <Stack
      w='full'
      align='center'
      py='20px'
      px={{ base: 0, md: '40px' }}
      direction='column'
      spacing={10}
    >
      <Flex w='full' as='section' direction={{ base: 'column', md: 'row' }}>
        <Flex as='article' flex={1} py='20px' justify='center'>
          <LandingBox />
        </Flex>
        <Flex flex={1}>image</Flex>
      </Flex>
      <Box w='full' as='section'>
        <Heading as='h3' fontSize='24px' color='brand-green'>
          Professional Experience with:
        </Heading>
        <Flex w='full' justify='center' py='20px' mb='10px' h='fit-content'>
          <Box maxW='1300px' w='full'>
            <TechMarquee />
          </Box>
        </Flex>
      </Box>
    </Stack>
  )
}

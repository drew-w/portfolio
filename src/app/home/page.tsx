'use client'
//Chakra
import {
  Flex,
  Box,
  Avatar,
  Heading,
  Text,
  Stack,
  IconButton
} from '@chakra-ui/react'

//Style UI
import { BalanceCard } from '@components/BalanceCard'
import { Twitter } from '@components/Icons/Twitter'

//Types

export default function Home () {
  return (
    <Flex as='main' w='full' align='center' py='20px'>
      <Flex as='section' flex={1} align='center' justify='center' p='20px'>
        <Flex
          direction='column'
          p='15px'
          w='full'
          maxW='container.sm'
          bg='box-bg-primary'
          borderRadius='10px'
          borderColor='border-primary'
          borderWidth={1}
          shadow='box-shadow-primary'
          justify='space-between'
        >
          <Stack direction='row' spacing={5} alignSelf='center'>
            <Avatar
              size='xl'
              name='Drew Woodmansee'
              src='/me.jpg'
              draggable={false}
            />
            <Flex as='span' direction='column' justify='center'>
              <Heading color='brand-green' as='h1' fontSize='2xl'>
                Drew Woodmansee
              </Heading>
              <Heading color='brand-orange' as='h3' fontSize='lg'>
                Software Engineer
              </Heading>
            </Flex>
          </Stack>
          <Text>
            Hello! I'm Drew, a full stack web developer from San Diego working
            primarily with Next.JS and Typescript.
          </Text>
          <br />
          <Text>
            If you are visiting this website, you might want to learn a little
            more about myself, or check out all the different projects I've
            worked on.
          </Text>
          <Stack>
            <IconButton aria-label='twitter' icon={<Twitter />} />
          </Stack>
        </Flex>
      </Flex>
      <Flex flex={1} bg='green.500'>
        image
      </Flex>
    </Flex>
  )
}

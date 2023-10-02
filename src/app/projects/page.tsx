'use client'
//Chakra
import {
  Flex,
  Box,
  Stack,
  StackDivider,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

//Style UI
import { ProjectCard } from '@components/ProjectCard'

//Types

export default function Projects () {
  const gradientGreen = useColorModeValue(
    'linear(to-l, #008b8b, #b8ffff)',
    'linear(to-l, #0E464B, #008b8b)'
  )
  const gradientOrange = useColorModeValue(
    'linear(to-l, #ffa812, #f8c090)',
    'linear(to-l, #F28529, #ffa812)'
  )
  return (
    <Flex
      as='main'
      w='full'
      justify='center'
      py='20px'
      direction='column'
      align='center'
    >
      <Flex
        maxW='container.lg'
        as='section'
        // bgGradient='linear(to-tr, brand-green 50%, #0000 50%)'
        w='full'
        // h='calc(100vh - 150px)'

        h='600px'
        mb={10}
        textAlign='justify'
        align='right'
      >
        <Box flex={1} />
        <Box flex={1}>
          <Heading color='brand-green' as='h1' fontSize='2xl'>
            Projects
          </Heading>
          <Text>
            Here is a list of all projects I have worked on with links to demo
            and live versions of the websites. Maybe I can think of some other
            cool thing to put in this blurb a little later.
          </Text>
        </Box>
      </Flex>
      <Stack
        borderColor='border-primary'
        borderWidth={1}
        shadow='box-shadow-primary'
        borderRadius='10px'
        maxW='container.lg'
        bg='box-bg-primary'
        w='full'
        divider={<StackDivider borderColor='brand-orange' />}
      >
        <ProjectCard
          image='/dappStack.png'
          title='sample'
          description='this is a thing im doing real quick'
          link='https://demo-preview.thedebtbox.com/home'
          gradient={gradientGreen}
        />

        <ProjectCard
          image='/webStack.png'
          title='sample'
          description='this is a thing im doing real quick'
          link='https://demo-preview.thedebtbox.com/home'
          gradient={gradientOrange}
        />

        <ProjectCard
          image='/xomly.png'
          title='sample'
          description='this is a thing im doing real quick'
          link='https://demo-preview.thedebtbox.com/home'
          gradient={gradientGreen}
        />

        <ProjectCard
          image='/ecoStack.png'
          title='sample'
          description=''
          link=''
          gradient={gradientOrange}
        />

        <ProjectCard
          image='/fairStack.png'
          title='sample'
          description='this is a thing im doing real quick'
          link='https://demo-preview.thedebtbox.com/home'
          gradient={gradientGreen}
        />
      </Stack>
    </Flex>
  )
}

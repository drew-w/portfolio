'use client'
//Chakra
import { Flex, Stack, StackDivider } from '@chakra-ui/react'

//Data
import { projects } from './data'

//Style UI
import { ProjectCard } from '@components/ProjectCard'

export default function Projects () {
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
        direction='column'
        maxW='container.lg'
        as='section'
        w='full'
        // h='600px'
        mb={10}
        textAlign='justify'
        align='right'
        position='relative'
      ></Flex>
      <Stack
        borderColor='border-primary'
        borderWidth={1}
        shadow='box-shadow-primary'
        borderRadius='10px'
        maxW='container.lg'
        bg='box-bg-primary'
        w='full'
        divider={<StackDivider borderColor='box-border' />}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            gradient={
              index % 2 === 0
                ? 'linear(to-l, reverse-green, alt-green)'
                : 'linear(to-l, reverse-orange, alt-orange)'
            }
          />
        ))}
      </Stack>
    </Flex>
  )
}

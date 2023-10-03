//Chakra
import { Flex, Image, Box, Heading, Text, Link, Stack } from '@chakra-ui/react'

//Types
import { Project } from '@./types/project'
interface Props {
  project: Project
  gradient: string
}

export const ProjectCard = ({ project, gradient }: Props) => {
  const { title, image, description, stack, url } = project
  return (
    <Flex w='full' align='center' padding='6' rounded='lg' direction='column'>
      <Box
        role='group'
        position='relative'
        bgGradient={gradient}
        w='full'
        zIndex={1}
        rounded='lg'
        cursor='pointer'
        onClick={() => window.open(url, '_blank')}
      >
        <Flex
          rounded='lg'
          pos='relative'
          height='500px'
          align='center'
          direction='column'
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            rounded: 'lg',
            top: 0,
            left: 0,
            bgGradient: gradient,
            filter: 'blur(0px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(10px)'
            }
          }}
        >
          <Image
            alt='project'
            rounded='lg'
            height='500px'
            w='full'
            draggable={false}
            objectFit='contain'
            src={image}
          />
        </Flex>
      </Box>
      <Flex direction='column' py={5} w='full'>
        <Heading color='brand-green' fontSize='2xl'>
          {title}
        </Heading>
        <Text>{description}</Text>
        <Flex
          as='span'
          align='baseline'
          pt={5}
          w='full'
          overflowWrap='anywhere'
          overflow='hidden'
        >
          <Heading as='h5' color='brand-orange' fontSize='md'>
            Stack and Technologies Used:{' '}
          </Heading>
          {stack.map((tech, i) => (
            <Text
              pl={1}
              color='text-secondary'
              fontSize='sm'
              fontWeight={300}
              key={tech}
            >
              {tech}
              {i !== stack.length - 1 && ','}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

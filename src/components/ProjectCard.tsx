//Chakra
import { Flex, Image, Box, Heading, Text, Link } from '@chakra-ui/react'

//Types
interface Props {
  title: string
  image: string
  description: string
  link: string
  gradient: string
}

export const ProjectCard = ({
  image,
  title,
  description,
  link,
  gradient
}: Props) => {
  return (
    <Flex
      w='full'
      align='center'
      padding='6'
      backgroundColor='box-bg-primary'
      boxShadow='box-shadow-primary'
      rounded='lg'
      direction='column'
    >
      <Box
        role='group'
        position='relative'
        bgGradient={gradient}
        w='full'
        zIndex={1}
        rounded='lg'
        cursor='pointer'
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
            rounded='lg'
            height='500px'
            w='full'
            draggable={false}
            objectFit='contain'
            src={image}
          />
        </Flex>
      </Box>
      <Flex direction='column'>
        <Heading color='brand-green' fontSize='2xl'>
          {title}
        </Heading>
        <Text>{description}</Text>
        <Link color='brand-orange'>{link}</Link>
      </Flex>
    </Flex>
  )
}

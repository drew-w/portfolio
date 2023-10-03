'use client'
//Chakra
import {
  Flex,
  Link,
  Heading,
  Button,
  Text,
  Image,
  Stack,
  Box
} from '@chakra-ui/react'
import { Icon } from '@components/Factory/Icon'

//Style UI
import { Tweet } from 'react-tweet'

//Data

//Types

export default function About () {
  const handleDownload = () => {
    fetch('Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'Resume.pdf'
        alink.click()
      })
    })
  }

  return (
    <Flex as='main' w='full' justify='center' py='20px'>
      <Stack spacing={5} maxW='container.lg' w='full'>
        <Stack
          spacing={5}
          as='section'
          w='full'
          maxW='full'
          direction='column'
          p='15px'
          bg='box-bg-primary'
          borderRadius='10px'
          borderColor='border-primary'
          borderWidth={1}
          shadow='box-shadow-primary'
          align='center'
        >
          <Heading color='brand-green' as='h1' fontSize='2xl'>
            About Me
          </Heading>
          <Text w='full'>
            Raised in San Diego, CA, I am a passionate Full Stack Engineer with
            experience creating applications using Next.js, Node.js, React
            Native, Solidity and SQL. I'm driven by a relentless curiosity to
            learn and innovate, often learning new libraries and skills in my
            free time and then bringing these skills into my professional work.
            I speak fluent Spanish, which has not only broadened my
            communication skills but also allowed me to connect with a diverse
            range of people and cultures, so I thrive in team environments where
            I can put these skills to their fullest use.
          </Text>
          <Image
            src='/beach.jpeg'
            borderRadius='10px'
            maxW='500px'
            w='full'
            h='400px'
            objectFit='cover'
          />
          <Text w='full'>
            My most recent professional experience was as lead front-end
            engineer and Xomly, a company based near the Silicon Slopes in
            Draper, UT. As lead developer, I was responsible for determining the
            Stack used on each new project started, as well as managing a team
            of 2-3 other developers. Although front-end was my primary role, I
            was also able to work along side the back-end team, writing
            endpoints using Prisma and creating Smart Contracts with Solidity.
          </Text>
          <Button
            rightIcon={<Icon prefix='fal' name='download' size='2x' />}
            onClick={handleDownload}
          >
            Resume.pdf
          </Button>
        </Stack>

        <Stack
          spacing={5}
          as='section'
          w='full'
          maxW='full'
          direction='column'
          p='15px'
          bg='box-bg-primary'
          borderRadius='10px'
          borderColor='border-primary'
          borderWidth={1}
          shadow='box-shadow-primary'
          align='center'
        >
          <Heading color='brand-green' as='h1' fontSize='2xl'>
            About Hobbies
          </Heading>
          <Text w='full'>
            Aside from my technical interests, I also enjoy playing sports with
            friends and attending local fighting game tournaments, where I am a
            respected member of the Utah fighting-game community. This
            competitive spirit has honed my problem-solving skills and taught me
            the importance of perseverance and continuous improvement—values
            that I bring to my work as a developer.
          </Text>
          <Image
            src='/commentating.jpg'
            borderRadius='10px'
            maxW='500px'
            w='full'
            objectFit='contain'
          />
          <Text w='full'>
            My personal achievements in this field include tournament wins in
            games like{' '}
            <Link
              color='brand-orange'
              onClick={() =>
                window.open(
                  'https://store.steampowered.com/app/801630/UNDER_NIGHT_INBIRTH_ExeLateclr/',
                  '_blank'
                )
              }
            >
              Under Night In-Birth
            </Link>
            ,{' '}
            <Link
              color='brand-orange'
              onClick={() =>
                window.open(
                  'https://store.steampowered.com/app/1384160/GUILTY_GEAR_STRIVE/',
                  '_blank'
                )
              }
            >
              Guilty Gear: Strive
            </Link>
            ,{' '}
            <Link
              color='brand-orange'
              onClick={() =>
                window.open(
                  'https://store.steampowered.com/app/1090630/Granblue_Fantasy_Versus/',
                  '_blank'
                )
              }
            >
              Granblue Fantasy: Versus
            </Link>
            , and{' '}
            <Link
              color='brand-orange'
              onClick={() =>
                window.open(
                  'https://store.steampowered.com/app/1372280/MELTY_BLOOD_TYPE_LUMINA/',
                  '_blank'
                )
              }
            >
              Melty Blood: Type Lumina
            </Link>{' '}
            - as well as having earned over $1,000 in career tournament
            winnings.
          </Text>
          <Flex
            w='full'
            direction={{ base: 'column', md: 'row' }}
            justify='space-between'
          >
            <Box flex={1} pr='3'>
              <Tweet id='1425154981775044608' />
            </Box>
            <Box flex={1} pl='3'>
              <Tweet id='1438341177594503168' />
            </Box>
          </Flex>
        </Stack>
        <Stack
          spacing={5}
          as='section'
          w='full'
          maxW='full'
          direction='column'
          p='15px'
          bg='box-bg-primary'
          borderRadius='10px'
          borderColor='border-primary'
          borderWidth={1}
          shadow='box-shadow-primary'
          align='center'
        >
          <Heading color='brand-green' as='h1' fontSize='2xl'>
            About Mandy
          </Heading>
          <Text w='full'>
            This is my dog Mandy. Say something nice about her.
          </Text>
          <Stack
            spacing={2}
            w='full'
            direction={{ base: 'column', md: 'row' }}
            align='center'
            justify='space-between'
            minH='248px'
            h={{ base: 'full', md: '248px' }}
          >
            <Box flex={1} h='full'>
              <Image
                src='/mandy1.jpeg'
                borderRadius='10px'
                w='full'
                objectFit='contain'
              />
            </Box>
            <Box flex={1} h='full'>
              <Image
                src='/mandy2.jpeg'
                borderRadius='10px'
                maxW='500px'
                w='full'
                h='full'
                objectFit='cover'
              />
            </Box>
            <Box flex={1} h='full'>
              <Image
                src='/mandy3.jpeg'
                borderRadius='10px'
                maxW='500px'
                h='full'
                w='full'
                objectFit='cover'
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  )
}

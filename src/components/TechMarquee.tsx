import { Box, Stack, useColorMode, useBreakpointValue } from '@chakra-ui/react'
import Marquee from 'react-fast-marquee'
import {
  Next,
  Query,
  Tailwind,
  Chakra,
  Typescript,
  Table,
  Prisma,
  Native,
  Redux
} from './TechLogos'

export const TechMarquee = () => {
  const { colorMode } = useColorMode()
  const isSmall =
    useBreakpointValue({
      base: true,
      md: false
    }) || false
  return (
    <Marquee
      speed={75}
      gradient={!isSmall}
      gradientColor={colorMode === 'dark' ? '#1f1f1f' : '#FAFAFC'}
      style={{
        maxWidth: '100%'
      }}
    >
      <Stack direction='row' spacing={10} w='full'>
        <Box maxH='75px'>
          <Query />
        </Box>
        <Box maxH='75px'>
          <Next />
        </Box>
        <Box maxH='75px'>
          <Tailwind />
        </Box>
        <Box maxH='75px'>
          <Chakra />
        </Box>
        <Box maxH='75px'>
          <Prisma />
        </Box>
        <Box maxH='75px'>
          <Table />
        </Box>
        <Box maxH='75px'>
          <Typescript />
        </Box>
        <Box maxH='75px' maxW='sm'>
          <Redux colorMode={colorMode} />
        </Box>
        <Box maxH='75px' maxW='sm' ml={-20}>
          <Native />
        </Box>
        <Box />
      </Stack>
    </Marquee>
  )
}

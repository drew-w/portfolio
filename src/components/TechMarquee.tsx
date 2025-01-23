import {
  Box,
  Stack,
  useColorMode,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react"
import Marquee from "react-fast-marquee"
import {
  Next,
  Query,
  Tailwind,
  Chakra,
  Typescript,
  Table,
  Prisma,
  Native,
  Redux,
  Nuxt,
  Azure,
} from "./TechLogos"

export const TechMarquee = () => {
  const { colorMode } = useColorMode()
  const isSmall =
    useBreakpointValue({
      base: true,
      md: false,
    }) || false
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} columnGap="2" rowGap="4">
      <Box
        maxH="150px"
        py="50px"
        shadow="box-shadow-primary"
        borderColor="border-primary"
        borderWidth={1}
      >
        <Next />
      </Box>
      <Box
        maxH="150px"
        py="50px"
        shadow="box-shadow-primary"
        borderColor="border-primary"
        borderWidth={1}
      >
        <Nuxt colorMode={colorMode} />
      </Box>
      <Box
        maxH="150px"
        py="50px"
        shadow="box-shadow-primary"
        borderColor="border-primary"
        borderWidth={1}
      >
        <Typescript />
      </Box>
      <Box
        maxH="150px"
        py="50px"
        shadow="box-shadow-primary"
        borderColor="border-primary"
        borderWidth={1}
      >
        <Prisma />
      </Box>
      <Box
        maxH="150px"
        py="50px"
        shadow="box-shadow-primary"
        borderColor="border-primary"
        borderWidth={1}
      >
        <Tailwind />
      </Box>
      <Box
        maxH="150px"
        py="50px"
        shadow="box-shadow-primary"
        borderColor="border-primary"
        borderWidth={1}
      >
        <Azure />
      </Box>
    </SimpleGrid>
    // <Marquee
    //   speed={75}
    //   gradient={!isSmall}
    //   gradientColor={colorMode === 'dark' ? '#1f1f1f' : '#FAFAFC'}
    //   style={{
    //     maxWidth: '100%'
    //   }}
    // >
    //   <Stack direction='row' spacing={10} w='full'>
    //     <Box maxH='75px'>
    //       <Query />
    //     </Box>
    //     <Box maxH='75px'>
    //       <Next />
    //     </Box>
    //     <Box maxH='75px'>
    //       <Tailwind />
    //     </Box>
    //     <Box maxH='75px'>
    //       <Chakra />
    //     </Box>
    //     <Box maxH='75px'>
    //       <Prisma />
    //     </Box>
    //     <Box maxH='75px'>
    //       <Table />
    //     </Box>
    //     <Box maxH='75px'>
    //       <Typescript />
    //     </Box>
    //     <Box maxH='75px' maxW='sm'>
    //       <Redux colorMode={colorMode} />
    //     </Box>
    //     <Box maxH='75px' maxW='sm' ml={-20}>
    //       <Native />
    //     </Box>
    //     <Box />
    //   </Stack>
    // </Marquee>
  )
}

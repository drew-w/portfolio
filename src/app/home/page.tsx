"use client"
//Chakra
import { Flex, Box, Stack, useColorMode, Heading } from "@chakra-ui/react"

//Style UI
import { LandingBox } from "@components/LandingBox"
import { TechMarquee } from "@components/TechMarquee"
import Image from "next/image"

export default function Home() {
  const { colorMode } = useColorMode()
  return (
    <Stack
      w="full"
      align="center"
      py="20px"
      px={{ base: 0, md: "40px" }}
      direction="column"
      spacing={10}
    >
      <Flex
        w="full"
        as="section"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        maxW="1200px"
      >
        <Flex as="article" flex={1} p="20px" justify="center">
          <LandingBox />
        </Flex>
        <Flex flex={1} justify="center" p="20px">
          <Flex
            w="full"
            maxW="container.sm"
            borderRadius="10px"
            borderColor="border-primary"
            borderWidth={1}
            shadow="box-shadow-primary"
            // transform='scaleX(-1)'
          >
            <Image
              draggable={false}
              width={1024}
              height={1024}
              src={colorMode === "light" ? "/light.jpg" : "/dark.png"}
              alt=""
              style={{
                borderRadius: "10px",
              }}
            />
          </Flex>
        </Flex>
      </Flex>
      <Box w="full" as="section" px="20px" maxW="1200px">
        <Flex w="full" justify="center" py="20px" mb="10px" h="fit-content">
          <Box maxW="1300px" w="full">
            <Heading>Experienced In: </Heading>
            <TechMarquee />
          </Box>
        </Flex>
      </Box>
    </Stack>
  )
}

"use client"
//Chakra
import {
  Flex,
  Avatar,
  Heading,
  Text,
  Stack,
  IconButton,
  Link,
} from "@chakra-ui/react"

//Style UI
import { Icon } from "@components/Factory/Icon"

//Data
import { useRouter } from "next/navigation"

export const LandingBox = () => {
  const router = useRouter()
  return (
    <Flex
      direction="column"
      p="15px"
      w="full"
      maxW="container.sm"
      bg="box-bg-primary"
      borderRadius="10px"
      borderColor="border-primary"
      borderWidth={1}
      shadow="box-shadow-primary"
      justify="space-between"
    >
      <Stack
        direction="row"
        spacing={5}
        alignSelf="center"
        align="center"
        pb={3}
      >
        <Avatar
          size="xl"
          name="Drew Woodmansee"
          src="/me.jpg"
          draggable={false}
        />
        <Flex as="span" direction="column" justify="center">
          <Heading color="brand-green" as="h1" fontSize="2xl">
            Drew Woodmansee
          </Heading>
          <Heading color="brand-orange" as="h3" fontSize="lg">
            Software Engineer
          </Heading>
        </Flex>
      </Stack>
      <Text>
        Hello! I'm Drew, a full stack web developer from San Diego working
        primarily with Next.JS and Typescript, and talent for turning ideas into
        beautifully functional websites. With a strong foundation in front-end
        and back-end technologies, I bring creativity and technical expertise to
        every project.
      </Text>
      <br />
      <Text>
        If you are visiting this website, you might want to learn a little more
        <Link color="brand-green" onClick={() => router.push("/about")}>
          {" "}
          about myself
        </Link>
        , or check out all the different{" "}
        <Link color="brand-green" onClick={() => router.push("/projects")}>
          {" "}
          projects
        </Link>{" "}
        I've worked on.
      </Text>
      <Flex as="span" w="full" justify="center" mt={5}>
        <Stack direction="row" spacing={5} align="center">
          <IconButton
            onClick={() =>
              window.open(
                "https://bsky.app/profile/drewwoodmansee.dev",
                "_blank"
              )
            }
            aria-label="twitter"
            variant="icon"
            icon={<Icon color="currentColor" prefix="fab" name="twitter" />}
          />

          <IconButton
            onClick={() => window.open("https://github.com/drew-w", "_blank")}
            aria-label="github"
            variant="icon"
            icon={<Icon color="currentColor" prefix="fab" name="github" />}
          />

          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/bbo-drew-woodmansee/",
                "_blank"
              )
            }
            aria-label="linkedin"
            variant="icon"
            icon={<Icon color="currentColor" prefix="fab" name="linkedin" />}
          />
        </Stack>
      </Flex>
    </Flex>
  )
}

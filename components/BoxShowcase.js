import { Text, Box, Image, Heading, Flex } from "@chakra-ui/react";

const BoxShowcase = ({ imageSrc, list, title }) => {
  return (
    <Flex direction="column">
      <Heading textAlign="center">{title}</Heading>
      <Box
        maxW={["sm", "sm", "lg", "lg"]}
        minH={["lg", "lg", "lg", "lg"]}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="base"
      >
        <Image src={imageSrc} alt="website screenshot" />

        <Box p="6">
          <Box d="flex" alignItems="baseline"></Box>
          <Box>
            <Box as="span" fontSize="sm">
              <Text>{list}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default BoxShowcase;

import { Heading, Box, Flex, useColorMode } from "@chakra-ui/react";

const Stack = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      shadow="inner"
      w="95vw"
      h="100vh"
      bg={colorMode === "dark" ? "brand.800" : "brand.100"}
    >
      <Flex justify="center" align="center" direction="column">
        <Heading>these are my skills</Heading>
      </Flex>
    </Box>
  );
};

export default Stack;

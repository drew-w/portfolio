import { Heading, Box, Flex, useColorMode } from "@chakra-ui/react";

const Connect = () => {
  const { colorMode } = useColorMode();

  return (
    <Box shadow="dark-lg" w="95vw" h="100vh">
      <Flex justify="center" align="center" direction="column">
        <Heading>connect with me!</Heading>
      </Flex>
    </Box>
  );
};

export default Connect;

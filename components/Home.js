import { Text, Flex, Heading, Box } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box shadow="dark-lg" w="95vw" height="100vh">
      <Flex justify="center" align="center" direction="column">
        <Heading>My Name is Drew Woodmansee</Heading>
        <Text>and this is my website.</Text>
      </Flex>
    </Box>
  );
};

export default HomePage;

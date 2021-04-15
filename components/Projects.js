import { Flex, Box, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import BoxShowcase from "./BoxShowcase";

const Projects = () => {
  const decisiveList = (
    <UnorderedList>
      <ListItem>
        App that picks a random restaurant based on user specified filters
      </ListItem>
      <ListItem>
        Features optional login where a user can save favorite restaurants,
        looks at history of rolled places, and blacklist a restaurant from
        showing up again
      </ListItem>
      <ListItem>
        Favorite restaurants have a higher chance of being chosen
      </ListItem>
      <ListItem>
        Made with Reactjs, Express, React Context, PostgreSQL, and the Google
        Maps API
      </ListItem>
      <ListItem>
        Live website: <Link color="brand.500">https://thedecisive.app/</Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://github.com/DecivsiveOrIndecisive/Indecisive-Project"
          isExternal
          color="brand.500"
        >
          GitHub Repo
        </Link>
      </ListItem>
    </UnorderedList>
  );

  const fgcList = (
    <UnorderedList>
      <ListItem>
        Social media app for fighting game players to share and find combos for
        certain games.
      </ListItem>
      <ListItem>
        Users can create and share combos, edit and delete combos made by them,
        and search posted combos by game and by character
      </ListItem>
      <ListItem>Users can save favorites and look at them later</ListItem>
      <ListItem>
        Made with Nextjs, Prisma, Redux, PostgreSQL, Nodemailer, and Chakra UI
      </ListItem>
      <ListItem>
        Live website:{" "}
        <Link color="brand.500">https://fgc-share.vercel.app/</Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://github.com/drew-w/fgc-share"
          isExternal
          color="brand.500"
        >
          GitHub Repo
        </Link>
      </ListItem>
    </UnorderedList>
  );
  return (
    <Box shadow="dark-lg" w="95vw" h="100vh">
      {/* <Flex align="center" direction="column"> */}
      <Flex justify="space-evenly" py={10}>
        <BoxShowcase
          imageSrc="decisive.png"
          list={decisiveList}
          title="The Decisive App"
        />
        <BoxShowcase imageSrc="fgcshare.png" list={fgcList} title="FGC Share" />
      </Flex>
      {/* </Flex> */}
    </Box>
  );
};

export default Projects;

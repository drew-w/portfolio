import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import HomePage from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import StackPage from "../components/Stack";
import Connect from "../components/Connect";
import DarkModeSwitcher from "../components/DarkModeSwitcher";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div className={styles.container}>
      <Head>
        <title>Drew Woodmansee</title>
        <link rel="icon" href="/blue-linne.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Stack direction="row" position="fixed" bottom="7" left="89vw">
          <DarkModeSwitcher />
          <IconButton
            ref={btnRef}
            colorScheme="brand"
            onClick={onOpen}
            icon={<HamburgerIcon />}
          />
        </Stack>
        <Flex direction="column">
          <HomePage />
          <About />
          <Projects />
          <StackPage />
          <Connect />
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

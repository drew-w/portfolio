import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Drew Woodmansee</title>
        <link rel="icon" href="/blue-linne.ico" />
      </Head>

      <main>
        <Flex backgroundColor="brand.50" w="100vw" h="100vh"></Flex>
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

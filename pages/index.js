import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

// 🖼️ Assets
import Clients from "../components/clients";

import cases from "../components/cases";
import Cases from "../components/cases";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dept Work</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Header></Header>
        <Cases></Cases>
        <Clients />
      </main>
    </div>
  );
}

// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

// 🌱 Components
import Head from "next/head";
import Clients from "../components/clients";
import Header from "../components/header";
import Cases from "../components/cases";
import Menu from "../components/menu";
import MenuBar from "../components/menu-bar";
import Footer from "../components/footer";

// 🖼️ Assets

// 🧰 Utils
import { palette } from "../resources/palette";
import styles from "../styles/Home.module.css";

// 🌀 Variants

// 💅🏽 Styled Components

export default function Home() {
  // Allows for toggling the menu
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="container">
      <Head>
        <title>Dept Work</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <MenuBar showMenu={showMenu} setShowMenu={setShowMenu}></MenuBar>

        <Header showMenu={showMenu} setShowMenu={setShowMenu}></Header>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu}></Menu>
        <Cases></Cases>
        <Clients />
        <Footer />
      </main>
    </div>
  );
}

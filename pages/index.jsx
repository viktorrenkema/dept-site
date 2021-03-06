// 📦 Packages
import React from "react";

// 🌱 Components
import Head from "next/head";
import Clients from "../components/clients";
import Header from "../components/header";
import Cases from "../components/cases";
import Menu from "../components/menu";
import MenuBar from "../components/menu-bar";
import Footer from "../components/footer";

export default function Home() {
  // Allows for toggling the menu
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="container">
      <Head>
        <title>Dept Work</title>
        <meta name="description" content="A collection of work from Dept" />
        <link rel="icon" href="/icon.png" />
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

// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";

// 🖼️ Assets
import headerImg from "../resources/images/header.jpg";

// 🌱 Components
import MenuBar from "./menubar";
import Image from "next/image";
import Button from "../components/button";

// 🧰 Utils

const HeaderCont = styled(motion.div)`
  width: 100%;
  position: relative;
  z-index: 1;
`;

const H1 = styled(motion.h1)`
  font-size: calc(100vw / 3);
  font-weight: 400;
  font-family: "Teko";
  position: absolute;
  top: 20%;
  left: 1rem;
  margin: 0;
  margin-left: 4rem;
  @media (min-width: 1200px) {
    /* Large devices and **higher** */
  }
  @media (max-width: 992px) {
    /* Laptop devices and **below** */
  }
  @media (max-width: 768px) {
    /* Laptop devices and **below** */
  }
  @media (max-width: 576px) {
    /* Phone devices and **below** */
  }
`;

export default function Header(props) {
  const { setShowMenu, showMenu } = props;
  return (
    <HeaderCont>
      <MenuBar showMenu={showMenu} setShowMenu={setShowMenu}></MenuBar>
      <Image
        src={headerImg}
        alt="Header image of a person looking at a whiteboard"
        // width="100%"
        // height="100%"
      ></Image>
      <H1>WORK</H1>
      <Button btntext="view case" to="https://www.deptagency.com/"></Button>
    </HeaderCont>
  );
}

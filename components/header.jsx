// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";

// 🖼️ Assets
import headerImg from "../resources/images/header.jpg";

// 🌱 Components
import Image from "next/image";
import Button from "../components/button";

// 🧰 Utils

const SectionHeader = styled(motion.header)`
  width: 100%;
  position: relative;
  z-index: 1;
`;

const H1 = styled(motion.h1)`
  font-size: calc(100vw / 4);
  font-weight: 400;
  font-family: "Teko Medium";
  font-style: normal;
  position: absolute;
  top: 20%;
  left: 1rem;
  margin: 0;
  margin-left: 4rem;
`;

export default function Header(props) {
  const { setShowMenu, showMenu } = props;
  return (
    <SectionHeader>
      <Image
        src={headerImg}
        alt="Header image of a person looking at a whiteboard"
        layout="responsive"
        objectFit="cover"
      ></Image>
      <H1>WORK</H1>
      <Button btntext="view case" to="https://www.deptagency.com/"></Button>
    </SectionHeader>
  );
}

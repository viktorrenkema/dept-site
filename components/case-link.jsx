// 📦 Packages
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// 🌱 Components
import Image from "next/image";

// 🖼️ Assets

// 🧰 Utils
import { palette } from "../resources/palette";

// 🌀 Variants

// 💅🏽 Styled Components
const CaseLinkContainer = styled(motion.a)`
  display: flex;
  gap: 10px;
  text-decoration: none;
  margin-top: 16px;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  cursor: pointer;
  @media (max-width: 576px) {
    /* Phone devices and **below** */
    display: none;
  }
`;

const Text = styled(motion.span)`
  font-size: 14px;
  font-family: "Arial";
  text-transform: uppercase;
  color: ${palette.accent500};
  font-weight: 700;
  line-height: 30px;
`;

export default function CaseLink(props) {
  const { url } = props;
  const [hoverLink, setHoverLink] = React.useState(false);

  return (
    <CaseLinkContainer
      href={url}
      target="_blank"
      onHoverStart={React.useCallback(() => {
        setHoverLink(true);
      }, [])}
      onHoverEnd={React.useCallback(() => {
        setHoverLink(false);
      }, [])}
    >
      <LinkArrow hoverLink={hoverLink}></LinkArrow>
      <Text animate={{ textDecoration: hoverLink ? "underline" : "none" }}>
        View case
      </Text>
    </CaseLinkContainer>
  );
}

function LinkArrow(props) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="9"
      animate={{
        x: props.hoverLink ? 5 : 0,
      }}
    >
      <motion.path
        d="M 0 9 L 7 4.495 L 0 0 Z"
        fill="rgb(26,24,247)"
      ></motion.path>
    </motion.svg>
  );
}

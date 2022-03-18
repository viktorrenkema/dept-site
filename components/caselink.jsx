// 📦 Packages
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
  padding-top: 16px;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 576px) {
    /* Phone devices and **below** */
    display: none;
  }
`;

const Text = styled(motion.span)`
  font-size: 14px;
  font-family: "Arial";
  text-transform: uppercase;
  color: ${palette.accent};
  font-weight: 700;
  line-height: 30px;
`;

export default function CaseLink(props) {
  const { linkdestination, linktext } = props;

  return (
    <CaseLinkContainer
      whileHover={{ opacity: 0.7 }}
      href={linkdestination}
      target="_blank"
    >
      <LinkArrow></LinkArrow>
      <Text whileHover={{ textDecoration: "underline" }}>View case</Text>
    </CaseLinkContainer>
  );
}

function LinkArrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="9">
      <path d="M 0 9 L 7 4.495 L 0 0 Z" fill="rgb(26,24,247)"></path>
    </svg>
  );
}

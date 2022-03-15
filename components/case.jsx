// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";

// 🌱 Components
import Image from "next/image";
import CaseLink from "./caselink";

// 🖼️ Assets

// 🧰 Utils
import { palette } from "../resources/palette";

// 🌀 Variants

// 💅🏽 Styled Components
const CaseCont = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 45%;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    /* Phone devices and **below** */
    flex-direction: column;
    width: 100%;
  }
`;

const H3 = styled(motion.h3)`
  font-size: 30px;
  line-height: 32px;
  font-family: "Teko Light";
  color: ${palette.black};
`;

const Label = styled(motion.span)`
  font-size: 15px;
  font-family: "Arial";
  text-transform: uppercase;
  color: ${palette.grey};
  font-weight: 700;
  line-height: 30px;
  padding: 16px 0px 12px 0px;
`;

export default function Case(props) {
  const { label, image, alttext, title, linkdestination, linktext } = props;

  return (
    <CaseCont>
      <Image
        src={image}
        alt={alttext}
        layout="intrinsic"
        objectFit="cover"
        // height="100%"
        width="100%"
        height="350px"
      ></Image>
      <Label>{label}</Label>
      <H3>{title}</H3>
      <CaseLink
        linkdestination={linkdestination}
        linktext={linktext}
      ></CaseLink>
    </CaseCont>
  );
}
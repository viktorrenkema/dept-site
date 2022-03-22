// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";
import { useClampedIsInViewport } from "../resources/hooks.jsx";

// 🌱 Components
import Image from "next/image";
import CaseLink from "./case-link";

// 🖼️ Assets

// 🧰 Utils
import { palette } from "../resources/palette";

// 🌀 Variants
const caseCard = {
  hidden: {
    opacity: 0.2,
    y: 20,
    transition: {
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

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
    margin-bottom: 46px;
  }
`;

export const H3 = styled(motion.h3)`
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

  // Custom hook to detect whether an element has entered viewport at least once
  const [isClampedInViewport, targetRef] = useClampedIsInViewport({
    threshold: 30,
  });

  return (
    <CaseCont
      variants={caseCard}
      animate={isClampedInViewport ? "show" : "hidden"}
      ref={targetRef}
    >
      <Image
        src={image}
        alt={alttext}
        layout="responsive"
        objectFit="cover"
        width="350px"
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

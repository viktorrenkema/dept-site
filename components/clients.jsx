// 📦 Packages
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useClampedIsInViewport } from "../resources/hooks.js";

// 🌱 Components

// 🧰 Utils and data
import clients from "../data/client-list.json";
import { palette } from "../resources/palette";

// 🌀 Variants
const container = {
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const client = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// 💅🏽 Styled Components
const SectionCients = styled(motion.section)`
  width: 100%;
  position: relative;
  background: ${palette.white300};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 140px;
`;

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  height: -webkit-fill-available;
  @media (max-width: 576px) {
    /* Phone devices and **below** */
    grid-template-columns: repeat(2, 40%);
    grid-template-rows: repeat(3, 86px);
    height: fit-content;
  }
`;

const Client = styled(motion.div)`
  width: 1fr;
  max-width: 250px;
  background: ${palette.white300};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media (max-width: 576px) {
    /* Phone devices and **below** */
    width: 170px;
    height: 86px;
    display: ${(props) => (props.priority === "true" ? "flex" : "none")};
  }
`;

const H2 = styled(motion.h2)`
  font-size: 60px;
  line-height: 1;
  font-family: "Teko Light";
  color: ${palette.black100};
  text-transform: uppercase;
  padding: 80px 0px 18px 0px;
`;

const Paragraph = styled(motion.p)`
  font-size: 17px;
  width: 90%;
  max-width: 560px;
  line-height: 27px;
  font-family: "Arial";
  color: ${palette.black100};
  text-align: center;
  padding-bottom: 82px;
`;

const ClientLogo = styled(motion.img)`
  max-width: 50%;
  max-height: 50%;

  @media (max-width: 576px) {
    max-width: 65%;
    max-height: 65%;
  }
`;

export default function Clients() {
  const [isClampedInViewport, targetRef] = useClampedIsInViewport({
    threshold: 30,
  });

  return (
    <SectionCients
      animate={isClampedInViewport ? { opacity: 1 } : { opacity: 0 }}
    >
      <H2>Clients</H2>
      <Paragraph>
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </Paragraph>

      <GridContainer
        ref={targetRef}
        animate={isClampedInViewport ? "show" : "hidden"}
        variants={container}
        initial="hidden"
      >
        {clients.map((clt) => {
          return (
            <Client
              key={clt.name}
              // A priority prop is passed to determine which logo's to still show on smaller breakpoints
              priority={clt.priority.toString()}
              variants={client}
            >
              <ClientLogo
                src={clt.logo}
                alt={`The company logo of ${clt.name}`}
              ></ClientLogo>
            </Client>
          );
        })}
      </GridContainer>
    </SectionCients>
  );
}

// 🖼️ Assets
import headerImg from "../resources/images/header.jpg";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

import clients from "../resources/clientlist.json";
import { palette } from "../resources/palette";

const ClientsWrapper = styled(motion.div)`
  width: 100%;
  position: relative;
  background: ${palette.lightgrey};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GridContainer = styled(motion.div)`
  /* width: 1000px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  @media (max-width: 576px) {
    /* Phone devices and **below** */
    grid-template-columns: repeat(2, 170px);
    grid-template-rows: repeat(3, 86px);
  }
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
`;

const Client = styled(motion.div)`
  width: 1fr;
  max-width: 250px;
  /* height: 126px; */
  background: ${palette.lightgrey};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media (max-width: 576px) {
    /* Phone devices and **below** */
    width: 170px;
    height: 86px;
  }
`;

const H2 = styled(motion.h2)`
  font-size: 60px;
  line-height: 1;
  font-family: "Teko Light";
  color: ${palette.black};
  text-transform: uppercase;
  padding: 80px 0px 18px 0px;
`;

const Paragraph = styled(motion.p)`
  font-size: 17px;
  width: 90%;
  max-width: 560px;
  line-height: 27px;
  font-family: "Arial";
  color: ${palette.black};
  text-align: center;
  padding-bottom: 82px;
`;

const ClientLogo = styled(motion.img)`
  max-width: 50%;
  max-height: 50%;
  @media (max-width: 576px) {
    /* Phone devices and **below** */
    display: ${(props) => (props.priority ? "inline" : "none")};
  }
`;

export default function Clients() {
  return (
    <ClientsWrapper>
      <H2>Clients</H2>
      <Paragraph>
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </Paragraph>

      <GridContainer>
        {clients.map((clt) => {
          return (
            <Client key={clt.name}>
              <ClientLogo
                src={clt.logo}
                alt={`The company logo of ${clt.name}`}
                // A priority prop is passed to determine which logo's to still show on smaller breakpoints
                priority={clt.priority}
              ></ClientLogo>
            </Client>
          );
        })}
      </GridContainer>
    </ClientsWrapper>
  );
}

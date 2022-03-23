// 📦 Packages
import React from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";

// 🖼️ Assets
import headerImg from "../resources/images/header.jpg";

// 🌱 Components
import Image from "next/image";
import Button from "../components/button";

// 🧰 Utils
import { palette } from "../resources/palette";

// 💅🏽 Styled Components
const SectionHeader = styled(motion.header)`
  width: 100%;
  position: relative;
  z-index: 1;
  border-color: ${palette.white100};
  border-style: solid;
`;

const H1 = styled(motion.h1)`
  font-size: calc(100vw / 3);
  font-weight: 400;
  font-family: "Teko Regular";
  font-style: normal;
  position: absolute;
  top: 20%;
  margin: 0;
  margin-left: 10%;
`;

export default function Header(props) {
  let { scrollYProgress } = useViewportScroll(); // Track the y scroll in % from 0 to 1
  const [viewportWidth, setViewportWidth] = React.useState(0);

  // To show the border slowly increase to 10px on scroll, we take the scrollYProgress value and transform it into values that make sense for the border
  const scrollYToMarginRL = useTransform(scrollYProgress, [0, 0.2], [20, 0]);

  // Turn the above transformed values into a motion template literal
  const border = useMotionTemplate`${scrollYToMarginRL}px`;

  // Debounced callback to avoid performance issues on resize
  const handleResize = useDebouncedCallback(
    () => setViewportWidth(window.innerWidth),
    200
  );

  React.useEffect(() => {
    setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SectionHeader
      style={{ borderWidth: viewportWidth < 576 ? "0px" : border }}
    >
      <Image
        src={headerImg}
        alt="Header image of a person looking at a whiteboard"
        layout="responsive"
        objectFit="cover"
      ></Image>
      <H1>WORK</H1>
      <Button buttonText="view case" to="https://www.deptagency.com/"></Button>
    </SectionHeader>
  );
}

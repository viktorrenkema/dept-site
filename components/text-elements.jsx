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
export const Label = styled(motion.span)`
  font-size: 15px;
  font-family: "Arial";
  text-transform: uppercase;
  color: ${palette.grey};
  font-weight: 700;
  line-height: 30px;
  padding-top: 16px;
`;

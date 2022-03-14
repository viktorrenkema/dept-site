// 🖼️ Assets
import headerImg from "../resources/images/header.jpg";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { palette } from "../resources/palette";

const MenuCont = styled(motion.div)`
  height: 53px;
  margin: 0rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  border-bottom: 1px solid ${palette.black};
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  /* -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2); */
`;
const MenuButtonCont = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MenuSpan = styled(motion.div)`
  font-family: "Teko Regular";
  font-size: 18px;
  line-height: 32px;
  text-transform: uppercase;
`;

export default function Menu() {
  return (
    <MenuCont>
      <DeptSVG></DeptSVG>
      <MenuButtonCont>
        <MenuSpan>Menu</MenuSpan>
        <MenuSVG></MenuSVG>
      </MenuButtonCont>
    </MenuCont>
  );
}

function DeptSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 173 46"
      width="100"
      height="28"
      style={{ zIndex: "1" }}
    >
      <path d="M147.9 46h12.6V10.8H173V0h-37.6v10.8h12.5V46zm-41.5-24.9V9.9h7.2c4.6 0 6.9 1.9 6.9 5.6 0 3.7-2.3 5.6-6.9 5.6h-7.2zM93.9 46h12.6V31h7.5c11.3 0 18.8-4.9 18.8-15.5S125.2 0 114 0H93.9v46zm-43.3 0h34.3V35.7H63.2v-7.8h21.5V18H63.2v-7.7h21.7V0H50.6v46zm-38-10.7V10.7h4c8.8 0 14.3 3.2 14.3 12.3 0 9.1-5.4 12.3-14.3 12.3h-4zM0 46h16.5c15.6 0 26.9-6.2 26.9-23C43.3 6.2 32 0 16.5 0H0v46z"></path>
    </svg>
  );
}

function MenuSVG() {
  return (
    <svg width="20" height="9" xmlns="http://www.w3.org/2000/svg">
      <g fillRule="evenodd">
        <path d="M0 7h20v2H0zM0 0h20v2H0z" />
      </g>
    </svg>
  );
}

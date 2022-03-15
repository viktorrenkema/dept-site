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
  top: 2rem;
  left: 0;
  right: 0;
  z-index: 10;
  @media (max-width: 576px) {
    /* Phone devices and **below** */
    border: none;
    background: ${(props) => (props.showMenu ? palette.black : palette.white)};
    top: 0rem;
    margin: 0;
    padding: 0rem 20px;
  }
`;
const MenuButtonCont = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const MenuSpan = styled(motion.div)`
  font-family: "Teko Regular";
  font-size: 18px;
  line-height: 32px;
  text-transform: uppercase;
  /* Text wasnt optically centered and not fixable with text-align. */
  padding-top: 3px;
`;

const DeptSVG = styled(motion.svg)`
  width: 100px;
  height: 28px;
  z-index: 1;
  @media (max-width: 576px) {
    /* Phone devices and **below** */
    width: 50px;
    height: 14px;
  }
`;

export default function MenuBar(props) {
  const { showMenu, setShowMenu } = props;
  return (
    <MenuCont showMenu={showMenu}>
      <DeptSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173 46">
        <path
          d="M 147.9 46 L 160.5 46 L 160.5 10.8 L 173 10.8 L 173 0 L 135.4 0 L 135.4 10.8 L 147.9 10.8 Z M 106.4 21.1 L 106.4 9.9 L 113.6 9.9 C 118.2 9.9 120.5 11.8 120.5 15.5 C 120.5 19.2 118.2 21.1 113.6 21.1 Z M 93.9 46 L 106.5 46 L 106.5 31 L 114 31 C 125.3 31 132.8 26.1 132.8 15.5 C 132.8 4.9 125.2 0 114 0 L 93.9 0 Z M 50.6 46 L 84.9 46 L 84.9 35.7 L 63.2 35.7 L 63.2 27.9 L 84.7 27.9 L 84.7 18 L 63.2 18 L 63.2 10.3 L 84.9 10.3 L 84.9 0 L 50.6 0 Z M 12.6 35.3 L 12.6 10.7 L 16.6 10.7 C 25.4 10.7 30.9 13.9 30.9 23 C 30.9 32.1 25.5 35.3 16.6 35.3 Z M 0 46 L 16.5 46 C 32.1 46 43.4 39.8 43.4 23 C 43.3 6.2 32 0 16.5 0 L 0 0 Z"
          fill={showMenu ? "rgb(255,255,255)" : "rgb(0,0,0)"}
        ></path>
      </DeptSVG>
      <MenuButtonCont
        onTap={() => {
          setShowMenu(!showMenu);
        }}
      >
        <MenuSpan>Menu</MenuSpan>
        {/* <MenuSVG showMenu={showMenu}></MenuSVG> */}
        <MenuToggle showMenu={showMenu} />
      </MenuButtonCont>
    </MenuCont>
  );
}

// function MenuSVG(props) {
//   return (
//     <motion.svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
//       <motion.path
//         d="M 0 13 L 20 13 L 20 15 L 0 15 Z"
//         fill="rgb(0, 0, 0)"
//       ></motion.path>
//       <motion.path
//         d="M 0 6 L 20 6 L 20 8 L 0 8 Z"
//         fill="rgb(0, 0, 0)"
//       ></motion.path>
//     </motion.svg>
//   );
// }

const firstLine = {
  flat: {
    d: "M 4 14 L 24 14",
  },
  closed: {
    d: "M 5.313 22.5 L 22.313 5.5",
  },
};

const secondLine = {
  flat: {
    d: "M 4 14 L 24 14",
  },
  closed: {
    d: "M 5.313 5.5 L 22.313 22.5",
  },
};

const MenuButton = styled(motion.div)`
  height: 20px;
`;

const MenuToggle = ({ setShowMenu, showMenu }) => (
  <MenuButton onClick={setShowMenu}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <motion.path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="square"
        stroke={showMenu ? "hsl(0, 0%, 100%)" : "rgb(0, 0, 0)"}
      />

      <motion.path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        fill="transparent"
        strokeWidth="2"
        strokeLinecap="square"
        stroke={showMenu ? "hsl(0, 0%, 100%)" : "rgb(0, 0, 0)"}
      />
    </svg>
  </MenuButton>
);

// old
function MenuSVG(props) {
  return (
    <motion.div
      style={{ zIndex: 90, position: "relative", display: "inline-block" }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        style={{ zIndex: 4 }}
      >
        <motion.path
          // d="M 0 13 L 20 13 L 20 15 L 0 15 Z"
          // transform={
          //   props.showMenu ? "translate(0 10) rotate(-45 10 1)" : "none"
          // }
          variants={firstLine}
          initial="flat"
          animate={props.showMenu ? "closed" : "flat"}
          fill="transparent"
          strokeWidth="2"
          stroke={props.showMenu ? "hsl(0, 0%, 100%)" : "rgb(0, 0, 0)"}
        ></motion.path>
        <motion.path
          variants={secondLine}
          initial="flat"
          animate={props.showMenu ? "closed" : "flat"}
          fill="transparent"
          strokeWidth="2"
          stroke={props.showMenu ? "hsl(0, 0%, 100%)" : "rgb(0, 0, 0)"}
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
}

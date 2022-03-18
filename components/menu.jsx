// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

// 🌱 Components
import MenuBar from "./menubar";

// 🖼️ Assets

// 🧰 Utils
import { palette } from "../resources/palette";

let navigationItems = [
  "Home",
  "Werk",
  "Over",
  "Diensten",
  "Partners",
  "Stories",
  "Vacatures",
];

// 🌀 Variants for animation
const overlayVariants = {
  closed: {
    width: "0%",
    height: "100vh",
    transitionEnd: {
      visibility: "hidden",
    },
  },
  open: {
    width: "100vw",
    height: "100vh",
    visibility: "visible",
  },
};

// 💅🏽 Styled Components
const MenuOverlay = styled(motion.div)`
  background: ${palette.black};
  z-index: 3;
  position: fixed;
  top: 0rem;
  right: 0rem;
`;

const MenuFlex = styled(motion.ol)`
  display: flex;
  padding: 100px 5%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: start;
`;

const MenuItem = styled(motion.li)`
  text-decoration: none;
  font-family: "Teko Regular";
  font-size: 50px;
  line-height: 1;
  text-transform: uppercase;
  color: ${palette.white};
  border-bottom: 1px solid ${palette.mediumgrey50};
  width: 100%;
  padding-top: 0.25rem;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  @media (min-width: 1200px) {
    /* Large devices and **higher** */
    font-size: 95px;
  }
`;

const container = {
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.07, staggerDirection: -1 },
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14 },
  },
};

const item = {
  hidden: {
    x: 100,
    transition: {
      duration: 0.3,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  inactive: {
    opacity: 0.6,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Menu(props) {
  const { showMenu, setShowMenu } = props;
  const [navSelection, setNavSelection] = React.useState(0);

  // Only do something when the component mounts
  React.useEffect(() => {
    let current = navSelection;
    // Assign the listener to a variable
    const listener = (event) => {
      // Prevent the window from scrolling from pressing arrow keys
      event.preventDefault();

      // Arrow Right OR Arrow Down
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        if (current === navigationItems.length - 1) {
          current = 0;
          setNavSelection(current);
        } else {
          current++;
          setNavSelection(current);
        }
      }

      // Arrow Left OR Arrow Up
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        if (current === 0) {
          current = navigationItems.length - 1;
          setNavSelection(current);
        } else {
          current--;
          setNavSelection(current);
        }
      }
    };

    // Add the event listener
    document.addEventListener("keydown", listener);

    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <MenuOverlay
      variants={overlayVariants}
      animate={showMenu ? "open" : "closed"}
      initial={"closed"}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      {/* <MenuBar showMenu={showMenu} setShowMenu={setShowMenu}></MenuBar> */}
      <MenuFlex
        variants={container}
        initial="hidden"
        animate={showMenu ? "show" : "hidden"}
      >
        {/* Render a list of navigation links in the menu */}
        {navigationItems.map((i, index) => (
          <MenuItem
            key={index}
            variants={item}
            onTap={() => {
              setNavSelection(index);
            }}
            // animate={navSelection === index ? "active" : "inactive"}
          >
            {navSelection === index && <ArrowSelection></ArrowSelection>}
            {i}
          </MenuItem>
        ))}
      </MenuFlex>
    </MenuOverlay>
  );
}

function ArrowSelection() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18">
      <path d="M 0 18 L 14 8.99 L 0 0 Z" fill="#ffffff"></path>
    </svg>
  );
}

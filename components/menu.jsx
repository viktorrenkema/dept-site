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
  "Work",
  "Service",
  "Stories",
  "About",
  "Careers",
  "Contact",
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

const MenuItemContainer = styled(motion.li)`
  border-bottom: 1px solid ${palette.mediumgrey50};
  width: 100%;
  cursor: pointer;
  overflow: hidden;
`;

const MenuH2Wrapper = styled(motion.div)`
  width: 100%;
`;
const MenuH2 = styled(motion.h2)`
  text-decoration: none;
  font-family: "Teko Regular";
  font-size: 50px;
  line-height: 1;
  text-transform: uppercase;
  color: ${palette.white};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  align-items: center;
  width: 100%;
  @media (min-width: 1200px) {
    /* Large devices and **higher** */
    font-size: 95px;
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const stagger = {
  hidden: {
    x: 100,
  },
  show: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const focusvariants = {
  active: {
    x: [0, -10],
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  inactive: {
    x: 0,
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
      // Arrow Right OR Arrow Down
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        // Prevent the window from scrolling from pressing arrow keys
        event.preventDefault();
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
        // Prevent the window from scrolling from pressing arrow keys
        event.preventDefault();
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
      <MenuFlex
        variants={container}
        initial="hidden"
        animate={showMenu ? "show" : "hidden"}
      >
        {/* Render a list of navigation links in the menu */}
        {navigationItems.map((i, index) => (
          <MenuItemContainer
            key={index}
            onTap={() => {
              setNavSelection(index);
            }}
          >
            <MenuH2Wrapper variants={stagger}>
              <MenuH2
                variants={focusvariants}
                animate={navSelection === index ? "active" : "inactive"}
              >
                {navSelection === index && <ArrowSelection></ArrowSelection>}
                {i}
              </MenuH2>
            </MenuH2Wrapper>
          </MenuItemContainer>
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

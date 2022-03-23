// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

// 🌱 Components

// 🖼️ Assets

// 🧰 Utils
import { palette } from "../resources/palette";

const countries = [
  "Global",
  "Nederland",
  "United States",
  "Ireland",
  "United Kingdom",
  "Deutschland",
  "Schweiz",
];

const navigation = [
  "Home",
  "Work",
  "Service",
  "Stories",
  "About",
  "Careers",
  "Contact",
];

// 🌀 Variants for animation
const overlay = {
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

const focus = {
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

const focusCountries = {
  active: {
    x: 5,
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
  dim: {
    opacity: 0.3,
    transition: {
      duration: 0.3,
    },
  },
};

// 💅🏽 Styled Components
const MenuOverlay = styled(motion.div)`
  background: ${palette.black100};
  z-index: 3;
  position: fixed;
  top: 0rem;
  right: 0rem;
`;

const FlexSocial = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0px 0px 50px 4rem;
  background: ${palette.black100};
  width: 200px;
  @media (max-width: 768px) {
    /* Large devices and **lower** */
    display: none;
  }
`;

const SocialOption = styled(motion.span)`
  font-family: "Arial";
  font-size: 12px;
  font-weight: 700;
  line-height: 19px;
  text-transform: uppercase;
  color: ${palette.white100};
  display: flex;
  align-items: center;
`;

const CountryPicker = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  position: absolute;
  top: 0;
  left: 0;
  padding: 98px 0px 0px 4rem;
  background: ${palette.black100};
  width: 200px;
  height: 300px;
  @media (max-width: 768px) {
    /* Large devices and **lower** */
    display: none;
  }
`;

const CountryPickerOption = styled(motion.span)`
  font-family: "Arial";
  font-size: 12px;
  font-weight: 700;
  line-height: 19px;
  text-transform: uppercase;
  color: ${palette.white100};
  display: flex;
  align-items: center;
`;

const MenuFlex = styled(motion.ol)`
  display: flex;
  padding: 100px 5%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: start;
`;

const MenuItemContainer = styled(motion.li)`
  border-bottom: 1px solid ${palette.grey30050};
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
  color: ${palette.white100};
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
  @media (min-width: 768px) {
    /* Large devices and **higher** */
    font-size: 75px;
  }
`;

export default function Menu(props) {
  const { showMenu, setShowMenu } = props;
  // Keep state on whether we currently are in the left-side countries selector or the right-side nav selector
  const [toggleSelector, setToggleSelector] = React.useState(true);
  //
  const [navSelection, setNavSelection] = React.useState(0);
  const [countriesSelection, setCountriesSelection] = React.useState(0);

  // Only do something when the component mounts
  React.useEffect(() => {
    let current = navSelection;
    let currentCountries = countriesSelection;
    // Assign the listener to a variable
    const listener = (event) => {
      // Listeners to go left/right between countries and nav
      // Arrow Right
      if (event.key === "ArrowRight") {
        // Prevent the window from scrolling from pressing arrow keys
        event.preventDefault();
        setToggleSelector(!toggleSelector);
      }

      // Arrow Left
      if (event.key === "ArrowLeft") {
        // Prevent the window from scrolling from pressing arrow keys
        event.preventDefault();
        setToggleSelector(!toggleSelector);
      }

      // Listeners to go up and down
      // Arrow Down
      if (event.key === "ArrowDown") {
        // Prevent the window from scrolling from pressing arrow keys
        event.preventDefault();
        // toggleSelector true means we're in larger nav
        if (toggleSelector) {
          if (current === navigation.length - 1) {
            current = 0;
            setNavSelection(current);
          } else {
            current++;
            setNavSelection(current);
          }
        }

        // toggleSelector false means we're in countries nav
        if (!toggleSelector) {
          if (currentCountries === countries.length - 1) {
            currentCountries = 0;
            setCountriesSelection(currentCountries);
          } else {
            currentCountries++;
            setCountriesSelection(currentCountries);
          }
        }
      }

      // Arrow Up
      if (event.key === "ArrowUp") {
        // Prevent the window from scrolling from pressing arrow keys
        event.preventDefault();

        // toggleSelector===true means we're in larger nav
        if (toggleSelector) {
          if (current === 0) {
            current = navigation.length - 1;
            setNavSelection(current);
          } else {
            current--;
            setNavSelection(current);
          }
        }
        // toggleSelector===false means we're in **countries** nav
        if (!toggleSelector) {
          if (currentCountries === 0) {
            currentCountries = countries.length - 1;
            setCountriesSelection(currentCountries);
          } else {
            currentCountries--;
            setCountriesSelection(currentCountries);
          }
        }
      }
    };

    // Add the event listener
    document.addEventListener("keydown", listener);

    return () => {
      // Remove the event listener when the component is unmounted
      document.removeEventListener("keydown", listener);
    };
  }, [toggleSelector]);

  return (
    <MenuOverlay
      variants={overlay}
      animate={showMenu ? "open" : "closed"}
      initial={"closed"}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      {/* Countrypicker in larger viewports */}
      <CountryPicker>
        <CountryPickerOption animate={{ opacity: toggleSelector ? 0.3 : 0.5 }}>
          Countries
        </CountryPickerOption>
        {countries.map((country, index) => (
          <CountryPickerOption
            key={index}
            variants={focusCountries}
            animate={
              toggleSelector
                ? "dim"
                : countriesSelection === index
                ? "active"
                : "inactive"
            }
          >
            {countriesSelection === index && (
              <ArrowSelection
                style={{ transform: "scale(0.5)" }}
              ></ArrowSelection>
            )}
            {country}
          </CountryPickerOption>
        ))}
      </CountryPicker>
      <FlexSocial>
        <SocialOption>facebook</SocialOption>
        <SocialOption>twitter</SocialOption>
        <SocialOption>instagram</SocialOption>
        <SocialOption>linkedin</SocialOption>
      </FlexSocial>
      <MenuFlex
        variants={container}
        initial="hidden"
        animate={showMenu ? "show" : "hidden"}
      >
        {/* Render a list of navigation links in the menu */}
        {navigation.map((i, index) => (
          <MenuItemContainer
            key={index}
            onTap={React.useCallback(() => {
              setNavSelection(index);
            }, [])}
          >
            <MenuH2Wrapper variants={stagger}>
              <MenuH2
                variants={focus}
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

function ArrowSelection(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="18"
      style={{ ...props.style }}
    >
      <path d="M 0 18 L 14 8.99 L 0 0 Z" fill="#ffffff"></path>
    </svg>
  );
}

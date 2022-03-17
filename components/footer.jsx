// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";

// 🌱 Components
import { DeptSVG, H4 } from "./menubar";

// 🖼️ Assets

// 🧰 Utils and data
import { palette } from "../resources/palette";
import footer from "../data/footer.json";

// 🌀 Variants

// 💅🏽 Styled Components
const Container = styled(motion.div)`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100%;
  height: 340px;
  @media (max-width: 1200px) {
    height: unset;
  }
`;

const FooterContainer = styled(motion.div)`
  display: flex;
  width: 95%;
  background-color: ${palette.black};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const FooterLinksFlex = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 120px 0px 100px;
  @media (max-width: 1200px) {
    padding: 60px 20px 0px 20px;
  }
`;

const Separator = styled(motion.div)`
  width: 100%;
  height: 2px;
  padding: 0px 120px 0px 100px;
  margin: 20px 0px 56px 0px;
  background-color: #3e3e3e;
  @media (max-width: 1200px) {
    padding-left: 20px;
  }
`;

const FlexSitemap = styled(motion.div)`
  display: flex;
  gap: 26px;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

const FlexSocial = styled(motion.div)`
  display: flex;
  gap: 30px;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ScrollToTopWrapper = styled(motion.div)`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 20%;
  background-color: ${palette.accent};
  @media (max-width: 1200px) {
    display: none;
  }
`;

const FooterLink = styled(motion.a)`
  color: ${palette.white};
  text-decoration: none;
  font-family: "Teko Regular";
  font-size: 18px;
  line-height: 32px;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 32px;
  }
`;

const FlexLegal = styled(motion.div)`
  display: flex;
  gap: 30px;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    padding-bottom: 40px;
  }
`;

const FlexCopyright = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Legal = styled(motion.span)`
  color: ${palette.anothergrey};
  text-decoration: none;
  font-family: "Arial";
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  cursor: pointer;
`;

const FooterDeptSVG = styled(DeptSVG)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export default function Footer() {
  return (
    <Container>
      <FooterContainer>
        <FooterLinksFlex>
          {/* DEPT logo */}
          <FooterDeptSVG
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 173 46"
          >
            <path
              d="M 147.9 46 L 160.5 46 L 160.5 10.8 L 173 10.8 L 173 0 L 135.4 0 L 135.4 10.8 L 147.9 10.8 Z M 106.4 21.1 L 106.4 9.9 L 113.6 9.9 C 118.2 9.9 120.5 11.8 120.5 15.5 C 120.5 19.2 118.2 21.1 113.6 21.1 Z M 93.9 46 L 106.5 46 L 106.5 31 L 114 31 C 125.3 31 132.8 26.1 132.8 15.5 C 132.8 4.9 125.2 0 114 0 L 93.9 0 Z M 50.6 46 L 84.9 46 L 84.9 35.7 L 63.2 35.7 L 63.2 27.9 L 84.7 27.9 L 84.7 18 L 63.2 18 L 63.2 10.3 L 84.9 10.3 L 84.9 0 L 50.6 0 Z M 12.6 35.3 L 12.6 10.7 L 16.6 10.7 C 25.4 10.7 30.9 13.9 30.9 23 C 30.9 32.1 25.5 35.3 16.6 35.3 Z M 0 46 L 16.5 46 C 32.1 46 43.4 39.8 43.4 23 C 43.3 6.2 32 0 16.5 0 L 0 0 Z"
              fill={"rgb(255,255,255)"}
            ></path>
          </FooterDeptSVG>
          {/* Links to important pages on site */}
          <FlexSitemap>
            {" "}
            {footer.map((item, index) => {
              return (
                <FooterLink
                  key={index}
                  href={item.link}
                  target="_blank"
                  whileHover={{ opacity: 0.7, textDecoration: "underline" }}
                >
                  {item.name}
                </FooterLink>
              );
            })}
          </FlexSitemap>
          {/* Social media links */}
          <FlexSocial>
            <InstagramSVG href="https://www.instagram.com/deptagency/?hl=en" />
            <TwitterSVG href="https://twitter.com/deptagency?lang=en" />
            <FacebookSVG href="https://www.facebook.com/DeptAgency/" />
          </FlexSocial>
        </FooterLinksFlex>
        <Separator />
        <FlexLegal>
          <Legal whileHover={{ opacity: 0.7, textDecoration: "underline" }}>
            Chamber of Commerce: 63464101
          </Legal>
          <Legal whileHover={{ opacity: 0.7, textDecoration: "underline" }}>
            VAT: NL 8552.47.502.B01
          </Legal>
          <Legal whileHover={{ opacity: 0.7, textDecoration: "underline" }}>
            Terms and conditions
          </Legal>
        </FlexLegal>
        <FlexCopyright />
      </FooterContainer>
      <ScrollToTopWrapper></ScrollToTopWrapper>
    </Container>
  );
}

function InstagramSVG(props) {
  return (
    <motion.a href={props.href} target="_blank" rel="noreferrer">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 14 14"
        fill={palette.white}
      >
        <motion.path
          fillRule="evenodd"
          d="M13.958 9.885c-.034.746-.153 1.255-.326 1.7-.179.46-.418.851-.807 1.24-.39.389-.78.628-1.24.807-.446.173-.955.291-1.7.325-.747.035-.985.042-2.886.042-1.902 0-2.14-.007-2.887-.042-.745-.034-1.254-.152-1.699-.325a3.427 3.427 0 0 1-1.24-.807 3.425 3.425 0 0 1-.808-1.24c-.173-.445-.291-.954-.325-1.7C.006 9.139-.003 8.901-.003 7c0-1.901.009-2.139.043-2.886.034-.745.152-1.255.325-1.7.179-.46.418-.85.808-1.239.389-.39.779-.629 1.24-.807.445-.174.954-.291 1.699-.327C4.859.008 5.097 0 6.999 0 8.9 0 9.138.008 9.885.041c.745.036 1.254.153 1.7.327.46.178.85.417 1.24.807.389.389.628.779.807 1.239.173.445.292.955.326 1.7.034.747.042.985.042 2.886 0 1.901-.008 2.139-.042 2.885zM6.999 3.504a3.496 3.496 0 1 0 0 6.991 3.496 3.496 0 0 0 0-6.991zm4.253-1.506a.753.753 0 1 0 0 1.507.753.753 0 1 0 0-1.507zM6.998 9.002a2.001 2.001 0 1 1 0-4.003 2.001 2.001 0 0 1 0 4.003z"
        ></motion.path>
      </motion.svg>
    </motion.a>
  );
}

function TwitterSVG(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="22"
        viewBox="0 0 50 50"
        fill={palette.white}
      >
        <path d="M49.998 9.35a20.256 20.256 0 0 1-5.891 1.631 10.378 10.378 0 0 0 4.51-5.725 20.57 20.57 0 0 1-6.518 2.516A10.186 10.186 0 0 0 34.613 4.5c-5.666 0-10.257 4.637-10.257 10.352 0 .812.09 1.604.266 2.359-8.523-.432-16.082-4.553-21.14-10.818a10.354 10.354 0 0 0-1.387 5.203c0 3.596 1.812 6.766 4.562 8.619a10.163 10.163 0 0 1-4.646-1.301v.129c0 5.016 3.537 9.201 8.227 10.154a10.36 10.36 0 0 1-2.703.361 9.69 9.69 0 0 1-1.931-.191c1.306 4.117 5.093 7.109 9.58 7.191a20.461 20.461 0 0 1-12.738 4.426c-.828 0-1.644-.053-2.446-.143A28.805 28.805 0 0 0 15.722 45.5c18.868 0 29.182-15.777 29.182-29.461l-.035-1.34a20.616 20.616 0 0 0 5.129-5.349z"></path>
      </svg>
    </a>
  );
}

function FacebookSVG(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="27"
        viewBox="0 0 23 50"
        fill={palette.white}
      >
        <path d="M5 9.684v6.883H0V25h5v25h10V25h7.037s.652-4.051.963-8.463h-8v-5.756c0-.861 1.335-2.018 2.436-2.018H23V0h-7.564C4.719 0 5 8.426 5 9.684z"></path>
      </svg>
    </a>
  );
}

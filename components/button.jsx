// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";

// 🧰 Utils
import { palette } from "../resources/palette";

const Link = styled.a`
  text-decoration: none;
`;

const ButtonContainer = styled(motion.div)`
  background-color: ${palette.black100};
  width: ${(props) => (props.width ? props.width : "170px")};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5%;
  bottom: 80px;

  @media (max-width: 768px) {
    /* Laptop devices and **below** */
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    position: unset;
    right: unset;
    bottom: unset;
  }
`;

const ButtonText = styled(motion.span)`
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Arial";
  font-size: 15px;
  line-height: 2;
  color: #ffffff;
  letter-spacing: 0.5px;
  user-select: none;
  pointer-events: none;
`;

export default function Button(props) {
  const { width, buttonText, to } = props;
  return (
    <Link href={to} target="_blank">
      <ButtonContainer
        width={width}
        whileHover={{ backgroundColor: palette.accent500 }}
      >
        {" "}
        <ButtonText>{buttonText}</ButtonText>
      </ButtonContainer>
    </Link>
  );
}

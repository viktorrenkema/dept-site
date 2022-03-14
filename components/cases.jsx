// 📦 Packages
import { motion } from "framer-motion";
import styled from "styled-components";

// 🌱 Components
import Image from "next/image";
import Case from "./case";

// 🖼️ Assets
import gemeentemuseum from "../resources/images/gemeentemuseum.png";
import kempen from "../resources/images/kempen.png";
import bolcom from "../resources/images/bolcom.png";
import philips from "../resources/images/philips.png";
import lightning from "../resources/images/lightning.png";
import tui from "../resources/images/tui.png";
import chocomel from "../resources/images/chocomel.png";
import jbl from "../resources/images/jbl.png";
import zalando from "../resources/images/zalando.png";
import koninklijkebibliotheek from "../resources/images/koninklijke-bibliotheek.png";
import libertyglobal from "../resources/images/liberty-global.png";
import florensis from "../resources/images/florensis.png";
import arla from "../resources/images/arla.png";

// 🧰 Utils
import { palette } from "../resources/palette";

// 🌀 Variants

// 💅🏽 Styled Components
const CasesCont = styled(motion.div)`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0rem 120px;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    /* Phone devices and **below** */
    flex-direction: column;
  }
`;

const FilterPanelWrapper = styled(motion.div)`
  margin: 60px 0rem;
  display: flex;
  justify-content: end;
  width: 100%; // todo
  height: 32px; // todo
`;

const FiltersContainer = styled(motion.div)`
  display: flex;
  justify-content: end;
  border: 1px solid ${palette.accent};
  width: 372px; // todo
  height: 32px; // todo
`;

export default function Cases(props) {
  return (
    <CasesCont>
      <FilterPanelWrapper>
        <FiltersContainer />
      </FilterPanelWrapper>{" "}
      <Case
        label={"bol.com"}
        image={bolcom}
        alttext={"Children playing in the water"}
        title={"A summer island in the Netherlands"}
        linkdestination={"https://www.bol.com"}
      ></Case>{" "}
      <Case
        label={"kempen"}
        image={kempen}
        alttext={"Two individuals working on a couch"}
        title={"Not some average banking website"}
        linkdestination={"https://www.arla.nl"}
      ></Case>{" "}
      <Case
        label={"philips"}
        image={philips}
        title={"Beautiful design meets innovative technology"}
        alttext={"Various stylish lamps with different lighting"}
        linkdestination={"https://www.philips.com"}
      ></Case>
      <Case
        label={"gemeentemuseum"}
        image={gemeentemuseum}
        title={"A 100 years of Mondriaan & De Stijl"}
        alttext={"A woman looking at a Mondriaan painting"}
        linkdestination={"https://www.amsterdam.nl/"}
      ></Case>
      <Case
        label={"Be Lighting"}
        image={lightning}
        title={"Delivering clarity on a global scale"}
        alttext={"A view of a street lamp"}
        linkdestination={"https://www.be-lightingconcept.be/nl/"}
      ></Case>
      <Case
        label={"tui"}
        image={tui}
        title={"Swipe to find your next holiday destination"}
        alttext={"An abstract cartoon of a person reading a map"}
        linkdestination={"https://www.tui.nl/"}
      ></Case>
      <Case
        label={"chocomel"}
        image={chocomel}
        title={"A campaign for the limited edition letter packs"}
        alttext={""}
        linkdestination={"https://www.chocomel.nl"}
      ></Case>
      <Case
        label={"JBL"}
        image={jbl}
        title={"Live like a champion with Jerome Booteng"}
        alttext={""}
        linkdestination={"https://www.jbl.com"}
      ></Case>
      <Case
        label={"zalando"}
        image={zalando}
        title={"Innovative SEO and content strategy for Zalando"}
        alttext={""}
        linkdestination={"https://www.zalando.com"}
      ></Case>
      <Case
        label={"koninklijke bibliotheek"}
        image={koninklijkebibliotheek}
        title={"The search for the most influential book ever"}
        alttext={""}
        linkdestination={"https://www.koninklijkebibliotheek.nl"}
      ></Case>
      <Case
        label={"liberty global"}
        image={libertyglobal}
        title={"Delivering complex commerce solutions"}
        alttext={""}
        linkdestination={"https://www.libertyglobal.com"}
      ></Case>
      <Case
        label={"arla"}
        image={arla}
        title={"Swipe to find your next holiday destination"}
        alttext={""}
        linkdestination={"https://www.arla.com"}
      ></Case>
    </CasesCont>
  );
}

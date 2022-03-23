// 📦 Packages
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// 🌱 Components
import Image from "next/image";
import Case from "./case";
import { H3 } from "./case";

// 🖼️ Assets

// 🧰 Utils and data
import cases from "../data/cases.json";
import { palette } from "../resources/palette";

// 🌀 Variants

// 💅🏽 Styled Components
const SectionCases = styled(motion.section)`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0rem 5%;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    /* Phone devices and **below** */
    flex-direction: column;
    gap: 0px;
  }
`;

const FilterPanelWrapper = styled(motion.div)`
  margin: 60px 0rem;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const FiltersContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  height: 32px;
  align-items: center;
`;

const FilterH3 = styled(H3)`
  color: ${palette.mediumgrey};
`;

const Select = styled.select`
  font-size: 30px;
  line-height: 32px;
  font-family: "Teko Light";
  color: ${palette.black};
  border: 0px solid white;
  border-bottom: 1px solid black;
  -webkit-appearance: none;
  border-radius: 0px;
`;

export default function Cases(props) {
  // Initiate state to keep track of filtering the list of cases
  const [industriesFilter, setIndustriesFilter] = React.useState("all");
  const [filteredCases, setFilteredCases] = React.useState(cases);

  // Filter the cases based on the currently set filter
  React.useEffect(() => {
    let filteredCasesArr = cases;
    if (industriesFilter !== "all") {
      filteredCasesArr = cases.filter((i) => {
        return i.category === industriesFilter;
      });
      setFilteredCases(filteredCasesArr);
    }
    if (industriesFilter === "all") {
      setFilteredCases(cases);
    }
  }, [industriesFilter]);

  return (
    <SectionCases>
      <FilterPanelWrapper>
        <FiltersContainer>
          <FilterH3>Show me all work in</FilterH3>
          <Select
            id="industries"
            name="industries"
            onChange={(e) => setIndustriesFilter(e.target.value)}
          >
            <option value="all">all industries</option>
            <option value="ecommerce">e-commerce</option>
            <option value="art">art</option>
            <option value="travel">travel</option>
            <option value="tech">technology</option>
          </Select>
        </FiltersContainer>
      </FilterPanelWrapper>{" "}
      {filteredCases.map((item, index) => {
        return (
          <Case
            key={index}
            label={item.label}
            image={item.image}
            alttext={item.alttext}
            title={item.title}
            linkdestination={item.linkdestination}
          ></Case>
        );
      })}
    </SectionCases>
  );
}

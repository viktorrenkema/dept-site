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
const CasesCont = styled(motion.div)`
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
  }
`;

const FilterPanelWrapper = styled(motion.div)`
  margin: 60px 0rem;
  display: flex;
  justify-content: end;
  width: 100%; /* todo */
  height: 32px; /* todo */
`;

const FiltersContainer = styled(motion.div)`
  display: flex;
  justify-content: end;
  gap: 4px;
  height: 32px; /* todo */
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
`;

const Option = styled.option`
  /* font-size: 12px;
  line-height: 12px;
  font-family: "Teko Light";
  color: ${palette.black}; */
`;

export default function Cases(props) {
  // Initiate state to keep track of filtering the list of cases
  const [industriesFilter, setIndustriesFilter] = React.useState("all");

  // Filter the cases based on the currently set filter
  let filteredCases = cases;
  if (industriesFilter !== "all") {
    filteredCases = cases.filter((i) => {
      return i.category === industriesFilter;
    });
  }

  return (
    <CasesCont>
      <FilterPanelWrapper>
        <FiltersContainer>
          <FilterH3>Show me all work in</FilterH3>
          <Select
            id="industries"
            name="industries"
            onChange={(e) => setIndustriesFilter(e.target.value)}
          >
            <Option value="all">all industries</Option>
            <Option value="ecommerce">E-Commerce</Option>
            <Option value="art">Art</Option>
            <Option value="travel">Travel</Option>
            <Option value="tech">Technology</Option>
          </Select>
        </FiltersContainer>
      </FilterPanelWrapper>{" "}
      {filteredCases.map((item, index) => {
        return (
          <Case
            key={item.title}
            label={item.label}
            image={item.image}
            alttext={item.alttext}
            title={item.title}
            linkdestination={item.linkdestination}
          ></Case>
        );
      })}
    </CasesCont>
  );
}

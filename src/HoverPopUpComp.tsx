import * as React from "react";
import styled from "styled-components";

const HoverPopUpCon = styled.div`
  height: 50px;
  width: 220px;
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.div`
  font-size: 15px;
`;

const Company = styled.div`
  font-size: 12px;
`;

export const HoverPopUpComp = ({
  title,
  company,
}: {
  title: string;
  company: string;
}) => {
  return (
    <HoverPopUpCon>
      <Title>{title}</Title>
      <Company>{company}</Company>
    </HoverPopUpCon>
  );
};

import React from "react";
import { JobResponseItem } from "./API";
import { roundToNearestHundred } from "./utils";
import striptags from "striptags";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  justify-content: space-around;
  transition: 0.3s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

const JobTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
`;

// export const checkSalary = (min: number, max: number) => {
//   let average = 0;
//   min === max ?
// }

export const JobListItem = ({
  item,
  submitID,
}: {
  item: JobResponseItem;
  submitID: (id: string) => void;
}) => {
  return (
    <Item onClick={() => submitID(item.id)}>
      <JobTitle>{striptags(item.title)}</JobTitle>
      <div>{striptags(item.company.display_name)}</div>
      <div>
        £{roundToNearestHundred(item.salary_min) + " "} - £
        {roundToNearestHundred(item.salary_max)}
      </div>
    </Item>
  );
};

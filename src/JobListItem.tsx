import React from "react";
import { JobResponseItem } from "./API";
import { roundToNearestHundred } from "./utils";
import striptags from "striptags";
import styled from "styled-components";

const Item = styled.div`
  width: 80%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.3s;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

// export const checkSalary = (min: number, max: number) => {
//   let average = 0;
//   min === max ?
// }

export const JobListItem = ({ item }: { item: JobResponseItem }) => {
  return (
    <Item>
      <div>{striptags(item.title)}</div>
      <div>{striptags(item.company.display_name)}</div>
      <div>
        £{roundToNearestHundred(item.salary_min) + " "} - £
        {roundToNearestHundred(item.salary_max)}
      </div>
    </Item>
  );
};

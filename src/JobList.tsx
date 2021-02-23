import React from "react";
import { JobResponseItem } from "./API";
import { JobListItem } from "./JobListItem";
import styled from "styled-components";

const List = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 250px;
`;

export const JobList = ({ jobs }: { jobs: JobResponseItem[] }) => {
  return (
    <List>
      {jobs.map((item) => {
        return <JobListItem key={item.id} item={item} />;
      })}
    </List>
  );
};

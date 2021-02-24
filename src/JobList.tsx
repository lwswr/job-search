import React from "react";
import { JobResponseItem } from "./API";
import { JobListItem } from "./JobListItem";
import styled from "styled-components";

const List = styled.div`
  position: relative;
  display: inline-block;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  top: 320px;
  z-index: 5;
`;

export const JobList = ({
  jobs,
  submitID,
}: {
  jobs: JobResponseItem[];
  submitID: (id: string) => void;
}) => {
  return (
    <List>
      {jobs.map((item) => {
        return <JobListItem key={item.id} item={item} submitID={submitID} />;
      })}
    </List>
  );
};

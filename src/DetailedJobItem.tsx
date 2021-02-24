import * as React from "react";
import striptags from "striptags";
import { JobResponseItem } from "./API";
import styled from "styled-components";
import { roundToNearestHundred } from "./utils";

const Container = styled.div`
  width: 25%;
  position: fixed;
  top: 275px;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const JobCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 600px;
  justify-content: space-between;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 400;
  padding: 10px 0px;
  border-bottom: 1px solid lightgrey;
`;

const Button = styled.button`
  align-self: flex-end;
  width: 50px;
`;

export const DetailedJobItem = ({
  job,
  onClick,
}: {
  job: JobResponseItem | undefined;
  onClick: (click: boolean) => void;
}) => {
  return (
    <Container>
      {job ? (
        <JobCard>
          <Title>{striptags(job.title)}</Title>
          <div>{striptags(job.company.display_name)}</div>
          <div>{striptags(job.location.display_name)}</div>
          <div>{striptags(job.description)}</div>
          <div>{striptags(job.contract_type)}</div>
          <div>
            {roundToNearestHundred(job.salary_min)} -{" "}
            {roundToNearestHundred(job.salary_max)}
          </div>
          <Button onClick={() => onClick(false)}>Back</Button>
        </JobCard>
      ) : null}
    </Container>
  );
};

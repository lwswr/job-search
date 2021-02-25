import * as React from "react";
import striptags from "striptags";
import { JobResponseItem } from "./API";
import styled from "styled-components";
import { roundToNearestHundred } from "./utils";

const Container = styled.div`
  width: 400px;
  position: fixed;
  top: 330px;
  height: 60%;
  z-index: 10;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
`;

const JobCard = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 600px;
  justify-content: space-between;
  background: white;
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
  color: white;
  width: 60px;
  background: rgb(0, 137, 216);
  border: none;
  height: 35px;
  padding: 10px 5px;
  border-radius: 5px;
  transition: 0.2s;
  font-family: "Montserrat", sans-serif;
  :hover {
    background: #3279a8;
  }
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
          <div>{job.company.display_name}</div>
          <div>{job.location.display_name}</div>
          <div>{job.description}</div>
          <div>{job.contract_type}</div>
          <div>
            £{roundToNearestHundred(job.salary_min)} - £
            {roundToNearestHundred(job.salary_max)}
          </div>
          <Button onClick={() => onClick(false)}>Back</Button>
        </JobCard>
      ) : null}
    </Container>
  );
};

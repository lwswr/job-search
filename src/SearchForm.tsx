import React from "react";
import { useState } from "react";
import styled from "styled-components";

export type SearchProps = {
  location: string;
  jobTitle: string;
  searchRadius: number;
};

const Form = styled.form`
  position: fixed;
  height: 300px;
  width: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex;
  border-radius: 0 0 10px 10px;
  box-shadow: rgba(7, 6, 6, 0.2) 0px 2px 8px 0px;
  z-index: 10;
  padding: 10px;
`;

const TextInputGroup = styled.div`
  width: 100%;
`;

const TextInput = styled.input`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  width: 100%;
  height: 30px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid rgb(0, 137, 216);
  outline: none;
  padding-top: 5px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  padding: 10px 0px;
  border-bottom: 1px solid rgb(0, 137, 216);
  letter-spacing: 9.5px;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const Button = styled.button`
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

const Radius = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const NumInput = styled.input`
  width: 30px;
  border: 1px solid rgb(0, 137, 216);
  border-radius: 5px;
  padding: 9px 5px;
  margin-left: 10px;
  transition: 0.2s;
  :hover {
    box-shadow: rgba(0, 90, 173, 0.2) 0px 3px 6px,
      rgba(0, 90, 173, 0.2) 0px 3px 6px;
  }
`;

export const SearchForm = ({
  submit,
}: {
  submit: (search: SearchProps) => void;
}) => {
  const [location, setLocation] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [radius, setRadius] = useState<number>(0);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit({
          location: location,
          jobTitle: jobTitle,
          searchRadius: radius,
        });
      }}
    >
      <Title>JOB SEARCH</Title>
      <TextInputGroup>
        <div>Job Title</div>
        <TextInput
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
      </TextInputGroup>

      <TextInputGroup>
        <div>Location</div>
        <TextInput
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </TextInputGroup>

      <BottomRow>
        <Radius>
          <div>Search Radius km</div>
          <NumInput
            type="number"
            placeholder="Search Radius"
            value={radius}
            onChange={(e) => setRadius(parseInt(e.target.value))}
          />
        </Radius>

        <Button type="submit">Search</Button>
      </BottomRow>
    </Form>
  );
};

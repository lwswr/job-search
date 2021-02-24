import React from "react";
import styled from "styled-components";

export type SearchProps = {
  location: string;
  jobTitle: string;
  searchRadius: number;
};

const Form = styled.form`
  position: fixed;
  height: 300px;
  width: 20%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex;
  border-radius: 0 0 10px 10px;
  box-shadow: rgba(7, 6, 6, 0.2) 0px 2px 8px 0px;
  z-index: 10;
  padding: 10px;
`;

const TextInput = styled.input`
  height: 30px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 400;
  padding: 10px 0px;
  border-bottom: 1px solid lightgrey;
  letter-spacing: 9.5px;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NumInput = styled.input`
  width: 50px;
`;

export const SearchForm = ({
  submit,
}: {
  submit: (search: SearchProps) => void;
}) => {
  const [location, setLocation] = React.useState<string>("");
  const [jobTitle, setJobTitle] = React.useState<string>("");
  const [radius, setRadius] = React.useState<number>(0);

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
      <div>Location</div>
      <TextInput
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div>Job Title</div>
      <TextInput
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <BottomRow>
        <div>Search Radius km</div>
        <NumInput
          type="number"
          placeholder="Search Radius"
          value={radius}
          onChange={(e) => setRadius(parseInt(e.target.value))}
        />
        <button type="submit">Search</button>
      </BottomRow>
    </Form>
  );
};

import React from "react";
import styled from "styled-components";

export type SearchProps = {
  location: string;
  jobTitle: string;
  searchRadius: number;
};

const Form = styled.form`
  position: fixed;
  height: 250px;
  width: 25%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 10;
`;

export const SearchForm = ({
  submit,
}: {
  submit: (search: SearchProps) => void;
}) => {
  const [location, setLocation] = React.useState<string>("London");
  const [jobTitle, setJobTitle] = React.useState<string>("Frontend Engineer");
  const [radius, setRadius] = React.useState<number>(5);

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
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search Radius"
        value={radius}
        onChange={(e) => setRadius(parseInt(e.target.value))}
      />
      <button type="submit">Search</button>
    </Form>
  );
};

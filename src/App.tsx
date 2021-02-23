import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getJobs, JobResponse, JobResponseItem } from "./API";
import { AppState, setJobList, setSearch } from "./appSlice";
import "./index.css";
import { JobList } from "./JobList";
import { Map } from "./Map";
import { SearchForm, SearchProps } from "./SearchForm";

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
`;

const ColumnContainer = styled.div`
  position: relative;
  width: 20%;
  height: 100%;
`;

const LONDON = fromLonLat([-0.12755, 51.507222]);

const convertLonLat = (item: JobResponseItem) => {
  return fromLonLat([item.longitude, item.latitude]);
};

const createArrayOfFeatures = (list: JobResponseItem[]) => {
  return list.map((item) => {
    return new Feature({
      geometry: new Point(convertLonLat(item)),
      name: item.id,
    });
  });
};

function App() {
  const dispatch = useDispatch();
  const state = useSelector(selectState);

  React.useEffect(() => {
    async function getData(search: SearchProps) {
      try {
        const jobResponse: JobResponse = await getJobs(search);
        dispatch(setJobList({ response: jobResponse }));
      } catch (err) {
        console.log(err);
      }
    }
    getData(state.search);
  }, [dispatch, state.search, state.search.location]);

  return (
    <MainContainer>
      <ColumnContainer>
        <SearchForm
          submit={({ location, jobTitle, searchRadius }) => {
            dispatch(
              setSearch({
                location: location,
                jobTitle: jobTitle,
                searchRadius: searchRadius,
              })
            );
          }}
        />
        <JobList jobs={state.jobList.results} />
      </ColumnContainer>
      <Map points={createArrayOfFeatures(state.jobList.results)} />
    </MainContainer>
  );
}

export const selectState = ({ state }: { state: AppState }) => state;

export default App;

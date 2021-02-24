import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getJobs, JobResponse, JobResponseItem } from "./API";
import {
  AppState,
  setJobList,
  setSearch,
  setSelectedJobItem,
} from "./appSlice";
import "./index.css";
import { JobList } from "./JobList";
import { AppMap } from "./AppMap";
import { SearchForm, SearchProps } from "./SearchForm";
import { Point } from "pigeon-maps/lib/types";

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

const createArrayOfMarkers = (list: JobResponseItem[]): Point[] => {
  return list.map((item) => {
    return [item.latitude, item.longitude];
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
  }, [dispatch, state.search]);

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
        <JobList
          jobs={state.jobList.results}
          submitID={(_id) => dispatch(setSelectedJobItem({ id: _id }))}
        />
      </ColumnContainer>
      <AppMap
        points={createArrayOfMarkers(state.jobList.results)}
        center={state.mapView.center}
        zoom={state.mapView.zoom}
      />
    </MainContainer>
  );
}

export const selectState = ({ state }: { state: AppState }) => state;

export default App;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JobResponse } from "./API";

export type AppState = {
  jobList: JobResponse;
  search: {
    location: string;
    jobTitle: string;
    searchRadius: number;
  };
};

export const initialAppState: AppState = {
  jobList: {
    count: 0,
    mean: 0,
    results: [],
    topClass: "",
  },
  search: {
    location: "London",
    jobTitle: "Web Developer",
    searchRadius: 5,
  },
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState: initialAppState,
  reducers: {
    setSearch: (
      state,
      {
        payload,
      }: PayloadAction<{
        location: string;
        jobTitle: string;
        searchRadius: number;
      }>
    ) => {
      if (payload) {
        state.search.location = payload.location;
        state.search.jobTitle = payload.jobTitle;
        state.search.searchRadius = payload.searchRadius;
      }
    },
    setJobList: (
      state,
      { payload }: PayloadAction<{ response: JobResponse }>
    ) => {
      state.jobList = payload.response;
    },
  },
});

export const { setSearch, setJobList } = appSlice.actions;

export default appSlice.reducer;

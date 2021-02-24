import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "pigeon-maps/lib/types";
import { JobResponse, JobResponseItem } from "./API";

export type AppState = {
  jobList: JobResponse;
  search: {
    location: string;
    jobTitle: string;
    searchRadius: number;
  };
  selectedJobItem?: JobResponseItem;
  mapView: {
    center: Point;
    zoom: number;
  };
  jobPopUp: boolean;
};

export const initialAppState: AppState = {
  jobList: {
    count: 0,
    mean: 0,
    results: [],
    topClass: "",
  },
  search: {
    location: "",
    jobTitle: "",
    searchRadius: 0,
  },
  selectedJobItem: undefined,
  mapView: {
    center: [51.507222, -0.12755],
    zoom: 12,
  },
  jobPopUp: false,
};

export const formatSearchTitle = (str: string) => {
  return str.split(" ").join("%20");
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
      state.search.location = payload.location;
      state.search.jobTitle = formatSearchTitle(payload.jobTitle);
      state.search.searchRadius = payload.searchRadius;
    },
    setJobList: (
      state,
      { payload }: PayloadAction<{ response: JobResponse }>
    ) => {
      state.jobList = payload.response;
    },
    setSelectedJobItem: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index: number = state.jobList.results.findIndex(
        (item) => item.id === payload.id
      );
      state.selectedJobItem = state.jobList.results[index];
      if (state.selectedJobItem.longitude === undefined) {
        // will create a pop up in the future to replace alert()
        alert("No coordinates for this job");
      } else {
        state.mapView.center = [
          state.selectedJobItem.latitude,
          state.selectedJobItem.longitude,
        ];
      }
      state.jobPopUp = true;
    },
    updatePopUpState: (
      state,
      { payload }: PayloadAction<{ click: boolean }>
    ) => {
      state.jobPopUp = payload.click;
    },
  },
});

export const {
  setSearch,
  setJobList,
  setSelectedJobItem,
  updatePopUpState,
} = appSlice.actions;

export default appSlice.reducer;

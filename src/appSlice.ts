import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Point } from "pigeon-maps/lib/types";
import striptags from "striptags";
import { JobResponse, JobResponseItem } from "./API";

export type HoverPopUp = {
  isDisplayed: boolean;
  title: string;
  company: string;
  coords: Point;
};

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
  hoverPopUp: HoverPopUp;
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
  hoverPopUp: {
    isDisplayed: false,
    title: "",
    company: "",
    coords: [0, 0],
  },
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
    updateHoverPopUpState: (
      state,
      { payload }: PayloadAction<{ event: boolean; id: string }>
    ) => {
      const index: number = state.jobList.results.findIndex(
        (item) => item.id === payload.id
      );
      state.hoverPopUp.isDisplayed = payload.event;
      state.hoverPopUp.title = striptags(state.jobList.results[index].title);
      state.hoverPopUp.company =
        state.jobList.results[index].company.display_name;
      state.hoverPopUp.coords = [
        state.jobList.results[index].latitude,
        state.jobList.results[index].longitude,
      ];
      console.log(state.jobPopUp);
    },
  },
});

export const {
  setSearch,
  setJobList,
  setSelectedJobItem,
  updatePopUpState,
  updateHoverPopUpState,
} = appSlice.actions;

export default appSlice.reducer;

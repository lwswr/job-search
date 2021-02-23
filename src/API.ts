import axios from "axios";
import { SearchProps } from "./SearchForm";

const APP_ID = "041d53c8";
const APP_KEY = "761a9c28c5be9f17aaf5f815044818ad";

export const getJobs = (searchParams: SearchProps) => {
  return axios
    .get<JobResponse>(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=50&what=Web%20Developer&where=${searchParams.location}&distance=${searchParams.searchRadius}`,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    )
    .then((res) => res.data);
};

export type JobResponse = {
  count: number;
  mean: number;
  results: JobResponseItem[];
  topClass: string;
};

export type JobResponseItem = {
  adref: string;
  category: { label: string; tag: string; classOne: string };
  company: { display_name: string; classTwo: string };
  contract_time: string;
  contract_type: string;
  created: string;
  description: string;
  id: string;
  latitude: number;
  location: {
    area: string[];
    display_name: string;
    classThree: string;
  };
  longitude: number;
  redirect_url: string;
  salary_is_predicted: string;
  salary_max: number;
  salary_min: number;
  title: string;
  classFour: string;
};

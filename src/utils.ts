import { JobResponseItem } from "./API";

export const roundToNearestHundred = (value: number) =>
  Math.round(value / 100) * 100;

export const formatSearchTitle = (str: string) => {
  return str.split(" ").join("%20");
};

export const getIndex = (list: JobResponseItem[], id: string): number => {
  return list.findIndex((item) => item.id === id);
};

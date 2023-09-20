import { DATA_LENGTH } from "../constants";
import { DataPointT } from "../types";

type YearDataT = {
  [month: number]: DataPointT[];
};

type DataStructureT = {
  [year: number]: YearDataT;
};

const useGetData = (): DataStructureT => {
  const data: DataStructureT = {};

  for (let index = 0; index < DATA_LENGTH; index++) {
    const dt = new Date();
    dt.setDate(dt.getDate() - DATA_LENGTH + index);

    const year = dt.getFullYear();
    const month = dt.getMonth() + 1;
    const day = dt.getDate();
    const val = parseFloat(((0.6 + Math.random() * 0.4) * 50).toFixed(1));

    if (!data[year]) {
      data[year] = {};
    }

    if (!data[year][month]) {
      data[year][month] = [];
    }

    data[year][month].push({ d: day, val });
  }
  return data;
};

export default useGetData;

import TotalWithUnit from "./TotalWithUnit";
import { DataPointT } from "../types";

type CompareTotalPropsT = {
  currentMonthData: DataPointT[];
  currentMonthYear: string;
  prevMonthData?: DataPointT[];
  prevMonthYear?: string;
};

export default function CompareTotal({
  currentMonthData,
  currentMonthYear,
  prevMonthData,
  prevMonthYear,
}: CompareTotalPropsT) {
  return (
    <div className="flex flex-row h-[100px] mx-8 mb-8 rounded border border-gray-300 font-semibold text-blue-gray-900">
      <TotalWithUnit
        monthData={currentMonthData}
        monthYear={currentMonthYear}
      />
      {prevMonthData && (
        <TotalWithUnit
          className="border-l border-gray-300"
          monthData={prevMonthData}
          monthYear={prevMonthYear}
        />
      )}
    </div>
  );
}

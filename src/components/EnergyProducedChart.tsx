import { useState } from "react";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { CircleIconButton } from "./ui/IconButtons";
import ComposedChart from "./ui/ComposedChart";
import MonthSwitch from "./MonthSwitch";
import { DataPointT } from "../types";

type ChartPropsT<T> = {
  barData: T[];
  lineData: T[];
  currentMonthYear: string;
  prevMonthYear: string;
  onHover: (e: T | undefined) => void;
};
export default function EnergyProducedChart({
  barData,
  lineData,
  currentMonthYear,
  prevMonthYear,
  onHover,
}: ChartPropsT<DataPointT>) {
  const [displayCurrentMonth, setDisplayCurrentMonth] = useState(true);
  const [displayPrevMonth, setDisplayPrevMonth] = useState(false);

  const handleCurrentSwitchChange = (checked: boolean) => {
    setDisplayCurrentMonth(checked);
  };

  const handlePrevSwitchChange = (checked: boolean) => {
    setDisplayPrevMonth(checked);
  };

  return (
    <div className="relative flex flex-col justify-center w-full mt-4 pt-6 pr-6 h-[500px]">
      {/* TODO: Full window Implementation - popup modal that fits full window size*/}
      <CircleIconButton>
        <OpenInFullIcon />
      </CircleIconButton>
      <ComposedChart
        barData={barData.map(({ val, d }) => ({
          val: displayCurrentMonth ? val : 0,
          d: d,
        }))}
        barDataKey="val"
        lineData={lineData}
        lineDataKey="val"
        displayLine={displayPrevMonth}
        onHover={onHover}
        xAxisDomain={[0, 31]}
        xAxisTickCount={30}
        yAxisLabel="kWh"
        barColor="#2194f3"
        lineColor="#105d9c"
        xAxisKey="d"
      />
      <div className="flex flex-row w-full justify-around items-center">
        <div>
          <MonthSwitch
            initValue={displayCurrentMonth}
            onChange={handleCurrentSwitchChange}
          />
          <div>{currentMonthYear}</div>
        </div>
        <div>
          <MonthSwitch
            initValue={displayPrevMonth}
            onChange={handlePrevSwitchChange}
          />
          <div>{prevMonthYear}</div>
        </div>
      </div>
    </div>
  );
}

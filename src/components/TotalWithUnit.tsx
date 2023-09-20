import { Typography } from "@mui/material";
import { getTotalWUnits } from "../utils/unitHelpers";
import { DataPointT } from "../types";

type TotalWithUnitPropsT = {
  className?: string;
  monthData: DataPointT[];
  monthYear?: string;
};

export default function TotalWithUnit({
  className,
  monthData,
  monthYear,
}: TotalWithUnitPropsT) {
  const [monthTotal, unit] = getTotalWUnits(monthData);
  return (
    <div
      className={`flex flex-col w-1/2 justify-center px-10 my-4 ${className}`}
    >
      <div>
        <div className="flex text-blue-500 items-center">
          <span className="font-bold">{monthTotal}</span>
          <span className="font-light text-sm">&nbsp;{unit}</span>
        </div>
        <Typography>{monthYear}</Typography>
      </div>
    </div>
  );
}

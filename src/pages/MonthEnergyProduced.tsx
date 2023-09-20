import { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Layout from "../layout";
import EnergyProducedChart from "../components/EnergyProducedChart";
import EnergyProducedTitle from "../components/EnergyProducedTitle";

import CalendarNav from "../components/CalendarNav";
import CompareTotal from "../components/CompareTotal";

import {
  getMonthYearString,
  getNextMonth,
  getPrevMonth,
  getDateMonthYearString,
} from "../utils/timeHelpers";
import useGetData from "../hooks/useGetData";
import { DataPointT } from "../types";

const currentDate = new Date();
const initYear = currentDate.getFullYear();
const initMonth = currentDate.getMonth() + 1;

const MonthEnergyProduced = () => {
  const data = useGetData();
  const [currentMonth, setCurrentMonth] = useState<number>(initMonth);
  const [currentYear, setCurrentYear] = useState<number>(initYear);
  const [overrideCalendar, setOverrideCalendar] = useState<boolean>(false);
  const [overrideString, setOverrideString] = useState<string>("");
  const [currentMonthData, setCurrentMonthData] = useState<DataPointT[]>([]);
  const [prevMonthData, setPrevMonthData] = useState<DataPointT[]>([]);
  const [nextMontHasData, setNextMonthHasData] = useState<boolean>(false);
  const [currentMonthYear, setCurrentMonthYear] = useState("");
  const [prevMonthYear, setPrevMonthYear] = useState("");

  const onCurrentMonthChange = (month: number, year: number) => {
    setCurrentMonth(month);
    setCurrentYear(year);

    setCurrentMonthYear(getMonthYearString(month, year));
    setCurrentMonthData(data[year][month]);

    const [prevMonth, prevYear] = getPrevMonth(month, year);
    setPrevMonthYear(getMonthYearString(prevMonth, prevYear));
    const pData = data[prevYear][prevMonth];
    setPrevMonthData(pData);

    const [nexMonth, nextYear] = getNextMonth(month, year);
    setNextMonthHasData(Boolean(data[nextYear][nexMonth]));
  };

  const handleNavigatePrevMonth = () => {
    const [month, year] = getPrevMonth(currentMonth, currentYear);
    onCurrentMonthChange(month, year);
  };

  const handleNavigateNextMonth = () => {
    const [month, year] = getNextMonth(currentMonth, currentYear);
    onCurrentMonthChange(month, year);
  };

  const handleHoverOverChart = (e: DataPointT | undefined) => {
    // TODO: update compareTotal
    setOverrideCalendar(Boolean(e));
    if (e) {
      setOverrideString(getDateMonthYearString(e.d, currentMonth, currentYear));
    }
  };

  useEffect(() => {
    onCurrentMonthChange(initMonth, initYear);
  }, []);

  return (
    <Layout>
      <div className="sticky top-[68px] z-10">
        <CalendarNav
          date={currentMonthYear}
          overrideCalendar={overrideCalendar}
          overrideString={overrideString}
          isMoreDataNext={nextMontHasData}
          isMoreDataPrev={Boolean(prevMonthData)}
          onPrevious={handleNavigatePrevMonth}
          onNext={handleNavigateNextMonth}
        />
      </div>
      <div className="container flex flex-col mx-auto">
        <EnergyProducedTitle />
        {currentMonthData.length && (
          <CompareTotal
            currentMonthData={currentMonthData}
            currentMonthYear={currentMonthYear}
            prevMonthData={prevMonthData}
            prevMonthYear={prevMonthYear}
          />
        )}
        <Divider />
        <EnergyProducedChart
          barData={currentMonthData}
          lineData={prevMonthData}
          currentMonthYear={currentMonthYear}
          prevMonthYear={prevMonthYear}
          onHover={handleHoverOverChart}
        />
      </div>
    </Layout>
  );
};

export default MonthEnergyProduced;

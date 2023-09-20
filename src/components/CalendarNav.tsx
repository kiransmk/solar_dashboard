import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton } from "./ui/IconButtons";
import Container from "./ui/Container";

type MonthNavT = {
  date: string;
  overrideCalendar?: boolean;
  overrideString?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  isMoreDataNext: boolean;
  isMoreDataPrev: boolean;
};

export default function CalendarNav({
  date,
  overrideCalendar,
  overrideString,
  onPrevious,
  onNext,
  isMoreDataNext,
  isMoreDataPrev,
}: MonthNavT) {
  return (
    <div className="w-full bg-gray-200 p-4">
      <Container>
        {overrideCalendar ? (
          <span>{overrideString}</span>
        ) : (
          <div className="flex justify-between items-center">
            <IconButton onClick={onPrevious} disabled={!isMoreDataPrev}>
              <ArrowBackIosIcon />
            </IconButton>
            <div className="flex align-center gap-2 items-center">
              <CalendarMonthIcon />
              <span>{date}</span>
            </div>
            <IconButton onClick={onNext} disabled={!isMoreDataNext}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        )}
      </Container>
    </div>
  );
}

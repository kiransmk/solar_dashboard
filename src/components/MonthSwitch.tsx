import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";

type MonthSwitchT = {
  initValue: boolean;
  onChange: (val: boolean) => void;
};

export default function MonthSwitch({ initValue, onChange }: MonthSwitchT) {
  const [checked, setChecked] = useState(initValue);

  useEffect(() => {
    setChecked(initValue);
  }, [initValue]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setChecked(checked);
    onChange(checked);
  };
  return <Switch checked={checked} onChange={handleChange} />;
}

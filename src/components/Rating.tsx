import { Box, IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { HeroProfile } from "../models/hero";

interface Props {
  name: string;
  value: number;
  onChange: (data: Partial<HeroProfile>) => void;
}

export default function Rating({ name, value, onChange }: Props) {
  function handleAdd() {
    onChange({ [name]: value + 1 });
  }
  function handleMinus() {
    const curValue = value - 1;
    if (curValue > 0) onChange({ [name]: curValue });
  }
  return (
    <div>
      <Box display="inline-block" width={50} margin={1}>
        {name.toUpperCase()}
      </Box>
      <IconButton aria-label="Example" color="primary" onClick={handleMinus}>
        <IndeterminateCheckBoxIcon />
      </IconButton>
      {value}
      <IconButton aria-label="Example" color="primary" onClick={handleAdd}>
        <AddBoxIcon />
      </IconButton>
    </div>
  );
}

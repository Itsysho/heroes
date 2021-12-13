import { Box, IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";

interface Props {
  name: string;
  value: number;
  onChange: (data: { [key: string]: number }) => void;
}

export default function Rating({ name, value, onChange }: Props) {
  function handleAdd() {
    onChange({ [name]: value });
  }
  function handleMinus() {
    onChange({ [name]: value });
  }
  return (
    <div>
      <Box display="inline-block" width={50} margin={1}>
        {name.toUpperCase()}
      </Box>
      <IconButton aria-label="Example" color="primary" onClick={handleAdd}>
        <IndeterminateCheckBoxIcon />
      </IconButton>
      {value}
      <IconButton aria-label="Example" color="primary" onClick={handleMinus}>
        <AddBoxIcon />
      </IconButton>
    </div>
  );
}

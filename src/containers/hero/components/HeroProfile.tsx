import { Box, Button, Grid } from "@mui/material";
import Rating from "../../../components/Rating";
import { mockHeroProfile } from "../../../mockData/mockHero";

export default function HeroProfile() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {Object.entries(mockHeroProfile).map(([key, value]) => (
          <Rating
            name={key}
            value={value}
            onChange={(data) => console.log(data)}
          />
        ))}
      </Grid>
      <Grid item xs={6}>
        <Box marginY={2}>剩餘點數 : </Box>
        <Button color="secondary" variant="outlined">
          儲存
        </Button>
      </Grid>
    </Grid>
  );
}

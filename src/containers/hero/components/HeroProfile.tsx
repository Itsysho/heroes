import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import Rating from "../../../components/Rating";
import { HeroProfile as HeroProfileModel } from "../../../models/hero";

interface Props {
  profile?: HeroProfileModel;
  onGetProfile: (is: string) => void;
}

export default function HeroProfile({ profile, onGetProfile }: Props) {
  const { id } = useParams();

  useEffect(() => {
    onGetProfile(id!);
  }, [onGetProfile, id]);

  if (!profile) return null;
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {Object.entries(profile).map(([key, value]) => (
          <Rating
            key={key}
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

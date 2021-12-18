import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Grid } from "@mui/material";
import Rating from "../../../components/Rating";
import { HeroProfile as HeroProfileModel } from "../../../models/hero";
import { sumValue } from "../../../utils/function";

interface Props {
  profile?: HeroProfileModel;
  powerMax?: number;
  onGetProfile: (id: string) => void;
  onUpdateHeroProfile: (data: { id: string; data: HeroProfileModel }) => void;
}

export default function HeroProfile({
  profile,
  powerMax,
  onGetProfile,
  onUpdateHeroProfile,
}: Props) {
  const { id } = useParams();
  const [curProfile, setCurProfile] = useState<HeroProfileModel | undefined>(
    profile
  );

  const handleUpdateHeroProfile = () => {
    if (id && curProfile) {
      onUpdateHeroProfile({ id, data: curProfile });
    }
  };
  const onPowerChange = (data: Partial<HeroProfileModel>) => {
    setCurProfile((prv) => {
      const cur = { ...prv!, ...data };
      return powerMax! - sumValue(cur) < 0 ? prv : cur;
    });
  };

  useEffect(() => {
    onGetProfile(id!);
  }, [onGetProfile, id]);

  useEffect(() => {
    setCurProfile(profile);
  }, [profile]);

  if (!curProfile) return null;
  return (
    <Grid container margin="auto" xs={8} spacing={2}>
      <Grid item xs={6}>
        {Object.entries(curProfile).map(([key, value]) => (
          <Rating key={key} name={key} value={value} onChange={onPowerChange} />
        ))}
      </Grid>
      <Grid item xs={6}>
        <Box marginY={2}>剩餘點數 : {powerMax! - sumValue(curProfile)}</Box>
        <Button
          color="secondary"
          variant="outlined"
          onClick={handleUpdateHeroProfile}
        >
          儲存
        </Button>
      </Grid>
    </Grid>
  );
}

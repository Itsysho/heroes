import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { mockHeroList } from "../../../mockData/mockHero";
import HeroProfile from "./HeroProfile";

export default function HeroList() {
  return (
    <>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {mockHeroList.map((h) => (
          <Card key={h.id}>
            <CardMedia component="img" image={h.image} />
            <CardContent>{h.name}</CardContent>
          </Card>
        ))}
      </Box>
      <HeroProfile />
    </>
  );
}

import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { useParams, Outlet } from "react-router-dom";
import { Hero } from "../../../models/hero";

interface Props {
  list?: Hero[];
  onClick: (id: string) => void;
}

export default function HeroList({ list, onClick }: Props) {
  const { id } = useParams();

  if (!list) return null;
  return (
    <>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        {list.map((h) => (
          <Box
            key={h.id}
            onClick={() => onClick(h.id)}
            border={id === h.id ? `1px dashed grey` : undefined}
          >
            <Card key={h.id} onClick={() => onClick(h.id)}>
              <CardMedia component="img" image={h.image} />
              <CardContent>{h.name}</CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Outlet />
    </>
  );
}

import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";

function MediaCard({ data }) {
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(false);
  //full heart needs to add listing to favorites db
  //unhearting listing should take it out of favorites db
  //if listing becomes unactive, the listing should be taken out of favorites
  return (
    <Card sx={{ maxWidth: 200, position: "relative" }}>
      <div
        onClick={() => setIsFavorite((f) => !f)}
        style={{
          position: "absolute",
          color: "#A92C68",
          top: "0%",
          right: "0%",
          zIndex: "100",
          marginRight: "16px",
          marginTop: "16px",
          cursor: "pointer",
        }}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>

      <CardActionArea onClick={() => router.push(`/listing/${data.id}`)}>
        <CardMedia component="img" image={data.image} alt={data.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${data.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.title}
          </Typography>
          <Typography variant="body3" sx={{ color: "#A92C68" }}>
            {data.city}, {data.state}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MediaCard;

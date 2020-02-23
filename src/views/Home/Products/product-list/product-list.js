import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useProductListStyles } from "../Products.style";

export default function ProductList(props) {
  const classes = useProductListStyles();
  const { imageUrl, title, loved } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <div className={classes.cardMedia}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Paella dish"
        />
        <IconButton
          aria-label="add to favorites"
          className={classes.cardMediaIcon}
          color={loved === 1 ? "secondary" : "default"}
        >
          <FavoriteIcon />
        </IconButton>
      </div>
      <CardContent>
        <Typography gutterBottom variant="body2" component="h5">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

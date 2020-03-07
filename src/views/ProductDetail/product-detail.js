import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography, IconButton, CssBaseline } from "@material-ui/core";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import Card from "@material-ui/core/Card";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useProductDetilStyles } from "./ProductDetail.style";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import { buyProduct } from "../../redux/actions/action-purchase-history/action-purchase-history";
import {
  get_detail_product,
  handle_like_button
} from "../../redux/actions/action-list-product/action-list-product";

export default function ProductDetail(props) {
  const classes = useProductDetilStyles();
  const dispatch = useDispatch();
  const param = useParams();
  const store = useSelector(state => state.listProduct);

  const handleBuyProduct = () => {
    buyProduct(dispatch, store.detailProduct);
  };

  useEffect(() => {
    get_detail_product(dispatch, param.id);
  }, [dispatch, param]);

  const handleLikeButton = () => {
    handle_like_button(dispatch);
  };

  const { imageUrl, price, title, description, loved } = store.detailProduct;
  return (
    <Container maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <Card variant="outlined" className={classes.containerCard}>
        <div className={classes.sectionCardMedia}>
          <div className={classes.sectionImageAct}>
            <div className={classes.iconBack}>
              <Link to="/">
                <IconButton>
                  <ArrowBackOutlinedIcon />
                </IconButton>
              </Link>
            </div>
            <a
              href="whatsapp://send?text=The text to share!"
              data-action="share/whatsapp/share"
            >
              <IconButton>
                <ShareOutlinedIcon />
              </IconButton>
            </a>
          </div>
          <CardMedia
            image={imageUrl}
            title={title}
            className={classes.sectionImg}
          />
        </div>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Typography gutterBottom variant="h5" component="h5">
              {title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              color={loved === 1 ? "secondary" : "default"}
              onClick={handleLikeButton}
            >
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid>
            <Typography gutterBottom variant="body2" component="p">
              {description}
            </Typography>
          </Grid>
          <Grid container direction="row" justify="flex-end">
            <Typography variant="h5" style={{ marginRight: "20px" }}>
              {price}
            </Typography>
            <Button
              variant="contained"
              color="default"
              disableElevation
              onClick={handleBuyProduct}
            >
              Buy
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

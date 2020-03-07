import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Container, Grid, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ListProduct() {
  const classes = useStyles();
  const history = useSelector(state => state.purchaseHistory);

  return (
    <Container maxWidth="xs">
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <Link to="/">
            <IconButton>
              <ArrowBackOutlinedIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item>
          <Typography component="p" variant="body1" color="initial">
            Purchase History
          </Typography>
        </Grid>
      </Grid>
      <List className={classes.root}>
        {history.data.map((data, key) => {
          return (
            <Link to={`/product-detail/${data.id}`} key={key}>
              <ListItem key={key}>
                <ListItemAvatar>
                  <Avatar src={data.imageUrl}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={data.title} secondary={data.price} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Container>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import { Container, Grid, Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ListProduct() {
  const classes = useStyles();

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
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
      </List>
    </Container>
  );
}

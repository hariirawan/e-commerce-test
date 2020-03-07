import React from "react";
import SwipeableViews from "react-swipeable-views";
import { styles } from "../home.style";
import { useSelector } from "react-redux";
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  CssBaseline
} from "@material-ui/core";

export default function Categories(props) {
  const store = useSelector(state => state.listProduct);

  return (
    <React.Fragment>
      <div style={{ height: "5px" }} />
      <SwipeableViews
        style={styles.root}
        slideStyle={styles.slideContainer}
        resistance
        hysteresis={1}
        enableMouseEvents
        axis="x"
        ignoreNativeScroll
      >
        {store.category.map((data, key) => (
          <Paper variant="outlined" key={key}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              style={{ padding: "5px 0px" }}
            >
              <Avatar variant="square" src={data.imageUrl} alt={data.name} />
              <Typography variant="p">{data.name}</Typography>
            </Grid>
          </Paper>
        ))}
      </SwipeableViews>
    </React.Fragment>
  );
}

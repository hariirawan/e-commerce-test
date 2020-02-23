import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Navigation from "../../components/Navigation";
import { useHomeStyles } from "./home.style";
import Navbar from "../../components/Navbar";
import Categories from "./Categories";
import Products from "./Products";
import CssBaseline from "@material-ui/core/CssBaseline";
export default function Home(props) {
  const classes = useHomeStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="xs" className={classes.root}>
        <Categories />
        <Products />
      </Container>
      <Navigation />
    </Fragment>
  );
}

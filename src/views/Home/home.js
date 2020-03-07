import React, { Fragment, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Navigation from "../../components/Navigation";
import { useHomeStyles } from "./home.style";
import Navbar from "../../components/Navbar";
import Categories from "./Categories";
import Products from "./Products";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useDispatch } from "react-redux";
import { get_product } from "../../redux/actions/action-list-product/action-list-product";

export default function Home(props) {
  const classes = useHomeStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    get_product(dispatch);
  }, [dispatch]);

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

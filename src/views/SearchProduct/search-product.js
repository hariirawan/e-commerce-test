import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import ListProduct from "./ListProduct";
import { useSearchProductStyles } from "./search-product.style";
import { useSelector } from "react-redux";

export default function SearchProduct(props) {
  const classes = useSearchProductStyles();
  const selector = useSelector(state => state.listProduct);
  console.log(selector);

  return (
    <React.Fragment>
      <Navbar />
      <Container maxWidth="xs" className={classes.root}>
        {selector.isSearch ? <ListProduct /> : <div />}
      </Container>
    </React.Fragment>
  );
}

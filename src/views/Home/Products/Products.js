import React from "react";
import Container from "@material-ui/core/Container";
import ProductList from "./product-list";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Products() {
  const store = useSelector(state => state.listProduct);
  return (
    <Container style={{ paddingBottom: "60px" }}>
      {store.productPromo.map((value, key) => (
        <Link to={`/product-detail/${value.id}`} key={key}>
          <ProductList {...value} />
        </Link>
      ))}
    </Container>
  );
}

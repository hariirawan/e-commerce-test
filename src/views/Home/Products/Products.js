import React from "react";
import Container from "@material-ui/core/Container";
import { data } from "./data";
import ProductList from "./product-list";

export default function Products() {
  return (
    <Container style={{ paddingBottom: "60px" }}>
      {data.map(value => (
        <ProductList key={value.id} {...value} />
      ))}
    </Container>
  );
}

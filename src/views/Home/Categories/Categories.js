import React from "react";
import SwipeableViews from "react-swipeable-views";
import { styles } from "../home.style";
import { useSelector } from "react-redux";

export default function Categories(props) {
  const store = useSelector(state => state.listProduct);

  return (
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
        <div key={key}>
          <img src={data.imageUrl} alt={data.name} style={{ width: "50px" }} />
          <div>{data.name}</div>
        </div>
      ))}
    </SwipeableViews>
  );
}

import React from "react";
import SwipeableViews from "react-swipeable-views";
import { styles } from "../home.style";

const list = [
  {
    imageUrl: "https://img.icons8.com/bubbles/2x/t-shirt.png",
    id: 21,
    name: "Baju"
  },
  {
    imageUrl: "https://img.icons8.com/flat_round/2x/long-shorts.png",
    id: 42,
    name: "Celana"
  },
  {
    imageUrl: "https://img.icons8.com/flat_round/2x/summer-hat.png",
    id: 11,
    name: "Topi"
  },
  {
    imageUrl: "https://img.icons8.com/color/2x/red-purse.png",
    id: 91,
    name: "Tas"
  },
  {
    imageUrl: "https://img.icons8.com/cute-clipart/2x/apple-watch-apps.png",
    id: 131,
    name: "Jam Tangan"
  },
  {
    imageUrl: "https://img.icons8.com/color/2x/red-purse.png",
    id: 91,
    name: "tewe"
  },
  {
    imageUrl: "https://img.icons8.com/cute-clipart/2x/apple-watch-apps.png",
    id: 131,
    name: "testadf"
  },
  {
    imageUrl: "https://img.icons8.com/cute-clipart/2x/apple-watch-apps.png",
    id: 131,
    name: "dfadf"
  }
];

export default function Categories(props) {
  return (
    <SwipeableViews
      style={styles.root}
      slideStyle={styles.slideContainer}
      resistance
      hysteresis={1}
      enableMouseEvents
      overscanSlideAfter={3}
      axis="x"
      ignoreNativeScroll
    >
      {list.map(data => (
        <div>
          <img src={data.imageUrl} alt={data.name} style={{ width: "50px" }} />
          <div>{data.name}</div>
        </div>
      ))}
    </SwipeableViews>
  );
}

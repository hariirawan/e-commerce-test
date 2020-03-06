import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default function Navigation(props) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("/");

  const handleChange = (_, value) => {
    setValue(value);
    history.push(value);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Feed"
            value="/feed"
            icon={<RssFeedIcon />}
          />
          <BottomNavigationAction
            label="Cart"
            value="/cart"
            icon={<ShoppingBasketIcon />}
          />
          <BottomNavigationAction
            label="Profile"
            value="/profile"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Container>
    </div>
  );
}

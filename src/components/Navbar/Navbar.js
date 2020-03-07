import React, { useRef, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useNavbarStyles } from "./Navbar.style";
import { useHistory, useLocation, Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { useDispatch } from "react-redux";
import { search_product } from "../../redux/actions/action-list-product/action-list-product";

export default function Navbar(props) {
  const classes = useNavbarStyles();
  const history = useHistory();
  const location = useLocation();
  const inputSearch = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/search") {
      inputSearch.current.focus();
    }
  }, [location.pathname]);

  const onChangeSearch = () => {
    history.push("/search");
  };

  const handleSearch = () => {
    const { value } = inputSearch.current;
    if (value !== "") {
      search_product(dispatch, true, inputSearch.current.value);
    } else {
      search_product(dispatch, false, inputSearch.current.value);
    }
  };

  const renderIcon = () => {
    if (location.pathname === "/search") {
      return (
        <Link to="/">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Link>
      );
    } else {
      return (
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <FavoriteBorderIcon />
        </IconButton>
      );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0}>
        <Container disableGutters={true} maxWidth="xs">
          <Toolbar variant="dense">
            {renderIcon()}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputRef={inputSearch}
                inputProps={{ "aria-label": "" }}
                onClick={onChangeSearch}
                onChange={handleSearch}
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

import { makeStyles } from "@material-ui/core/styles";
export const useHomeStyles = makeStyles({
  root: {
    height: "calc(100vh - 96px)",
    position: "relative",
    marginTop: "48px",
    marginBottom: "96px"
  }
});

export const styles = {
  root: {
    // border: "1px solid black",
    margin: "10px 0px"
  },
  slideContainer: {
    padding: "0 10px",
    // border: "1px solid red",
    width: "100px",
    marginRight: 10
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
};

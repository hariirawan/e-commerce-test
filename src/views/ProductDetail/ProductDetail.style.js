import { makeStyles } from "@material-ui/core/styles";
export const useProductDetilStyles = makeStyles({
  root: {
    minHeight: "100vh"
  },
  containerCard: {
    borderRadius: "0px",
    border: "none"
  },
  sectionCardMedia: {
    position: "relative"
  },
  sectionImg: {
    height: 200
  },
  sectionImageAct: {
    position: "absolute",
    display: "flex",
    left: 0,
    right: 0,
    padding: "0px 10px"
  },
  iconBack: {
    flex: 1
  }
});

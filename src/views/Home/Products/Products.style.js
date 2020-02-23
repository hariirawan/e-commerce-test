import { makeStyles } from "@material-ui/core/styles";
export const useProductListStyles = makeStyles(theme => ({
  root: {
    marginBottom: "10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  cardMedia: {
    position: "relative"
  },
  cardMediaIcon: {
    position: "absolute",
    bottom: 0
  }
}));

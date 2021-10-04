import { inner, outer } from "assets/styles/globalStyles";
const postFeedStyle = {
  inner,
  outer,
  siteMain: {
    zIndex: "3",
    flexGrow: "1",
    display: "block",
    boxSizing: "inherit",
  },
  postFeed: {
    display: "flex",
    position: "relative",
    flexWrap: "wrap",
    margin: "0 -20px",
    padding: "40px 0 0",
    width: "auto",
  },
  "@media(min-width:900px)": {
    postFeed: {
      marginTop: "1.875rem",
      paddingTop: "0",
    },
  },
};

export default postFeedStyle;

import { inner, outer } from "assets/styles/globalStyles";
const postDetailStyle = {
  inner,
  outer,
  siteMain: {
    paddingBottom: "4vw",
    background: " #fff",
    zIndex: "3",
    flexGrow: "1",
  },
  postDetail: {
    position: "relative",
    zIndex: "2",
  },
  postDetailHeader: {
    maxWidth: "1040px",
    margin: "0 auto",
    padding: "6vw 3vw 0",
    textAlign: "center",
  },
  postDetailMeta: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#141c3a",
    fontSize: "0.875rem",
    fontWeight: "600",
    textTransform: "uppercase",
    "& a": {
      color: "#141c3a",
    },
  },
  postDetailTitle: {
    margin: "1.25rem 0",
    color: "#141c3a",
    lineHeight: "3.75rem",
    fontSize: "3.125rem",
  },
  postDetailMetaDate: {
    color: "#141c3a",
  },
  dateDivider: {
    display: "inline-block",
    margin: "0 6px 1px",
    color: "#64edbf",
  },
  postDetailContent: {
    position: "relative",
    minHeight: "230px",
    margin: "0 auto",
    padding: "70px 100px 0",
    fontFamily:
      "Nunito Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
    fontSize: "2.2rem",
    lineHeight: "1.6em",
    background: "#fff",
    "& h2": {
      margin: ".5rem 0 .2rem",
      fontSize: "2.25rem",
      fontWeight: "700",
    },
  },
  postContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "920px",
    "& p": {
      fontSize: "1.375rem",
    },
  },
  postDetailImage: {
    margin: "0 0 1.5em",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& img": {
      maxWidth: "1040px",
      display: "block",
      margin: "0 auto 1.5rem",
    },
  },

  //responsive
  "@media (max-width: 500px)": {
    postDetailHeader: {
      padding: "14vw 3vw 10vw",
    },
    postDetailMeta: {
      fontSize: "1.2rem",
      lineHeight: "1.3em",
    },
    postDetailTitle: {
      fontSize: "2.9rem",
      lineHeight: "4rem",
    },
    postDetailContent: {
      padding: "0",
      "& h2": {
        fontSize: "2.6rem",
      },
      "& h3": {
        margin: ".5em 0 .2em",
        fontSize: "2.8rem",
        fontWeight: "700",
      },
    },
  },

  "@media (max-width: 800px)": {
    postDetailContent: {
      fontSize: "1.9rem",
    },
  },
  "@media (max-width: 1040px)": {
    postDetailImage: {
      "& img": {
        width: "100%",
      },
    },
  },
  "@media (max-width: 1170px)": {
    postDetailContent: {
      padding: "5vw 7vw 0",
    },
  },
};
export default postDetailStyle;

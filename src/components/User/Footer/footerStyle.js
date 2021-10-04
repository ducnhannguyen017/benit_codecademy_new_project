import { inner, outer } from "assets/styles/globalStyles";

const footerStyle = {
  inner,
  outer,
  siteFooter: {
    position: "relative",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "#141c3a",
    background: "#141c3a",
    "& $siteFooterContentPrimary, & $siteFooterContentSecondary": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "10px 0",
      color: "hsla(0,0%,100%,.9)",
      fontSize: "0.8125rem",
      width: "auto",
    },
    "& $siteFooterContentSecondary": {
      borderTop: "1px solid hsla(0,0%,100%,.3)",
    },
    "& a": {
      color: "hsla(0,0%,100%,.9)",
    },
  },
  siteFooterContentPrimary: {},
  copyright: {},
  siteFooterNav: {
    display: "flex",
    "& a:first-of-type": {
      marginLeft: "0",
      "&:before": {
        content: "none",
      },
    },
    "& a": {
      position: "relative",
      marginLeft: "20px",

      "&:before": {
        content: '"|"',
        position: "absolute",
        top: "0px",
        left: "-11px",
        display: "block",
      },
    },
  },
  siteFooterContentSecondary: {},
};

export default footerStyle;

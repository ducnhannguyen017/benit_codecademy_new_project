import { outer, inner } from "assets/styles/globalStyles";

const headerStyle = {
  siteHeader: {
    position: "relative",
    paddingTop: "12px",
    paddingBottom: "12px",
    background: "#fff no-repeat 50% ",
    backgroundSize: "cover",
    borderBottom: "1px solid #ebebeb",
  },
  outer,
  inner,
  siteNav: {
    display: "flex",
    position: "relative",
    zIndex: 4,
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "40px",
    overflowY: "hidden",
    fontSize: "1.2rem",
    minHeight: "40px",
    padding: "0",
  },
  siteNavLeft: {
    minWidth: "100px",
    overflowX: "visible",
    overflowY: "visible",
    whiteSpace: "nowrap",
  },
  siteNavLogo: {
    display: "block",
    padding: "11px 0",
    fontSize: "1.7rem",
    lineHeight: "1em",
    fontWeight: "700",
    color: "#fff",
    textDecoration: "none",
  },
  siteImgLogo: {
    display: "block",
    width: "auto",
    height: "21px",
  },
  siteNavCenter: {
    marginLeft: "6px",
    overflowX: "auto",
    overflowY: "hidden",
    letterSpacing: ".4px",
  },
  nav: {
    display: "flex",
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  navLink: {
    display: "block",
    textTransform: "uppercase",
    margin: "0",
    padding: "0",
  },
};
export default headerStyle;

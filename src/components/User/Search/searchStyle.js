import { outer, inner } from "assets/styles/globalStyles";
const searchStyle = {
  outer,
  inner: {
    ...inner,
    display: "flex",
    height: "56px",
    alignItems: "center",
  },
  siteSearch: {
    backgroundColor: "#ebebeb",
    boxShadow: "0 2px 2px rgb(0 0 0 / 15%)",
    zIndex: "4px",
  },
  siteSearchWrapper: {
    display: "flex",
    width: "100%",
  },
  inputField: {
    border: "1px solid #dfe1e5",
    background: "#fff",
    width: "100%",
    height: "100%",
    marginRight: "15px",
  },
  searchIcon: {
    background: "transparent",
    top: "50%",
    transform: "translateY(-45%)",
    fontSize: "0px",
    width: "auto",
    verticalAlign: "middle",
    border: "1px solid #666",
    borderRadius: "2px",
    height: "100%",
    padding: "0px",
  },
};
export default searchStyle;

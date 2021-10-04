const buttonStyle = {
  root: {
    padding: "0px",
  },
  gray: {
    color: "#738a94",
  },
  white: {
    color: "#fff",
  },
  sm: {
    padding: "2px 3px",
    lineHeight: "30px",
    fontSize: "10px",
  },
  md: {
    padding: "10px 6px",
    lineHeight: "28px",
    fontSize: "12px",
  },
  lg: {
    padding: "12px 8px",
    width: "100%",
  },
  transparent: {
    color: "#141c3a",
    opacity: ".9",
    background: "transparent",
    "&:hover,&:focus": {
      color: "blue",
      background: "transparent",
    },
  },
  primary: {
    color: "#fff",
    opacity: ".9",
    background: "blue",
    width: "100%",
    borderRadius: "2px",
  },
  round: {
    display: "block",
    padding: " 9px 16px",
    border: "1px solid #aebbc1",
    fontSize: "0.75rem",
    lineHeight: "1",
    fontWeight: "800",
    borderRadius: "20px",
    transition: "all .2s ease",
    "&:hover": {
      borderColor: "#4b35ef",
      color: "#4b35ef",
      textDecoration: "none",
    },
  },
  button: {
    fontSize: "12px",
    height: "100%",
    // width: "100%",
    "&:hover,&:focus": {
      color: "blue",
      background: "transparent",
    },
  },
  "@media (min-width: 800px)": {
    transparent: {
      paddingLeft: "12px",
      paddingRight: "12px",
    },
  },
};
export default buttonStyle;

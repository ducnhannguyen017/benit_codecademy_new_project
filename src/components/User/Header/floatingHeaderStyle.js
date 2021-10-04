const floatingHeaderStyle = {
  floatingHeader: {
    visibility: "hidden",
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
    zIndex: "5",
    display: "flex",
    alignItems: "center",
    height: "60px",
    borderBottom: "1px solid rgba(0,0,0,.06)",
    background: "#fff",
    transition: "all .5s cubic-bezier(.19,1,.22,1)",
    transform: "translate3d(0,-120%,0)",
    "& $floatingHeaderShare, & $floatingHeaderShare a": {
      display: "flex",
      alignItems: "center",
      "& a": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      "& i": {
        width: "auto",
        height: "16px",
        fill: "#141c3a",
      },
      "& svg": {
        width: "auto",
        height: "16px",
        fill: "#141c3a",
      },
    },
    "& $floatingHeaderShare": {
      justifyContent: "flex-end",
      paddingLeft: "2%",
      fontSize: "0.8125rem",
      lineHeight: "1",
      flexWrap: "nowrap",
      width: "auto",
      "& $floatingHeaderShareLabel": {
        flexShrink: "0",
        display: "flex",
        alignItems: "center",
        marginRight: "10px",
        color: "#141c3a",
        fontWeight: "bolder",
        width: "auto",
        "& i": {
          width: "18px",
          height: "18px",
          margin: "10px 0 5px 10px",
          stroke: "rgba(0,0,0,.7)",
          // transform: "rotate(90deg)",
          fill: "#141c3a",
        },
      },
      "& $floatingHeaderShareTw,& $floatingHeaderShareFb": {
        alignItems: "center",
        width: "60px",
        height: "60px",
        color: "#fff",
        lineHeight: "48px",
        textAlign: "center",
        transition: "all .5s cubic-bezier(.19,1,.22,1)",
      },
      "& svg": {
        width: "auto",
        height: "16px",
        fill: "#141c3a",
      },
    },
    "& $floatingHeaderShare a": {
      justifyContent: "center",
    },
  },
  floatingHeaderActive: {
    visibility: "visible !important",
    transition: "all .5s cubic-bezier(.22,1,.27,1)",
    transform: "translateZ(0)",
  },
  floatingHeaderLogo: {
    overflow: "hidden",
    margin: "0 0 0 20px",
    fontSize: "1.6rem",
    lineHeight: "1em",
    letterSpacing: "-1px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    "& a": {
      display: "flex",
      alignItems: "center",
      color: "#15171a",
      lineHeight: "1.1em",
      fontWeight: "700",
    },
    "& img": {
      maxHeight: "20px",
      margin: "0 10px 0 0",
    },
  },
  floatingHeaderDivider: {
    margin: "0 5px",
    lineHeight: "1em",
  },
  floatingHeaderTitle: {
    flex: "1",
    overflow: "hidden",
    margin: "0",
    color: "#2e2e2e",
    fontSize: "1rem",
    lineHeight: "1.3em",
    fontWeight: "700",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  floatingHeaderShare: {},
  floatingHeaderShareLabel: {},
  floatingHeaderShareTw: {},
  floatingHeaderShareFb: {},
  progress: {
    position: "absolute",
    right: "0",
    bottom: "-1px",
    left: "0",
    width: "100%",
    height: "2px",
    border: "none",
    background: "transparent",
    appearance: "none",
  },
  processContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    display: "block",
    width: "100%",
    height: "2px",
    backgroundColor: "transparent",
  },
  processBar: {
    display: "block",
    width: "50%",
    height: "inherit",
    backgroundColor: "#64edbf",
  },
  "@media (max-width: 450px)": {
    floatingHeaderShareLabel: {
      display: "none !important",
    },
  },
  "@media (max-width: 800px)": {
    floatingHeaderLogo: {
      marginLeft: "10px",
      "& a": {
        color: "#2e2e2e",
      },
    },
    floatingHeaderDivider: {
      visibility: "hidden",
    },
    floatingHeaderTitle: {
      visibility: "hidden",
    },
  },
  "@media (max-width: 900px)": {
    floatingHeader: {
      height: "40px",
    },
    floatingHeaderLogo: {
      fontSize: "1.5rem",
    },
    floatingHeaderTitle: {
      fontSize: "1.5rem",
    },
    floatingHeaderShare: {
      "& $floatingHeaderShareTw,& $floatingHeaderShareFb": {
        width: "40px !important",
        height: "40px !important",
        lineHeight: "38px",
      },
    },
  },
};

export default floatingHeaderStyle;

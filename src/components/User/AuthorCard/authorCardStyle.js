const authorCardStyle = {
  authorCard: {},
  authorCardName: {},
  authorCardContent: {},
  authorProfileImage: {},
  authorCardButton: {},
  postDetailFooterRight: {},
  authorDetail: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "840px",
    margin: "0 auto",
    padding: "3vw 0 6vw",
    flexWrap: "nowrap",
    "& $authorCard": {
      display: "flex",
      alignItems: "center",
      flexWrap: "nowrap",
      "& $authorProfileImage": {
        marginRight: "15px",
        borderRadius: "100%",
        objectFit: "cover",
      },
      "& $authorCardContent": {
        width: "80%",
        "& $authorCardName": {
          margin: "0 0 2px",
          padding: "0",
          "& a": {
            color: "#15171a",
            fontWeight: "700",
          },
        },
        "& p": {
          margin: "0",
          color: "#738a94",
          lineHeight: "1.3em",
          fontWeight: "bolder",
        },
      },
    },
  },
  sm: {
    "& $authorProfileImage": {
      width: "60px",
      height: "60px",
    },
    "& $authorCardName": {
      fontSize: "1.25rem",
    },
    "& $authorCardContent p": {
      fontSize: "0.9375rem",
    },
    "& $postDetailFooterRight": {
      flexShrink: "0",
      marginLeft: "20px",
      "& $authorCardButton": {
        display: "block",
        padding: " 9px 16px",
        border: "1px solid #aebbc1",

        fontSize: "0.75rem",
        lineHeight: "1",
        fontWeight: "800",
        borderRadius: "20px",
        transition: "all .2s ease",
      },
    },
  },
  authorMeta: {},
  authorStats: {},
  bull: {},
  socialLink: {},
  lg: {
    paddingBottom: "0px",
    flexWrap: "wrap",
    "& $authorCard": {
      alignItems: "flex-start !important",
      marginBottom: "10px",
    },
    "& $authorMeta": {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      marginBottom: "10px",
      marginLeft: "120px",
      // font-family: Nunito Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      fontStyle: "italic",
      "& $authorStats": {
        "& $bull": {
          display: "inline-block",
          margin: "0 12px",
          opacity: ".5",
        },
      },
      "& $socialLink": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0",
        padding: "10px",
        color: "#15171a",
        opacity: ".8",
        "&:hover": {
          opacity: "1",
        },
        "& svg": {
          height: "1.1875rem",
        },
      },
    },
    "& $authorProfileImage": {
      width: "100px",
      height: "100px",
    },
    "& $authorCardName": {
      fontSize: "2.375rem",
    },
    "& $authorCardContent p": {
      fontSize: "1.25rem",
      maxWidth: "600px",
      marginTop: "15px !important",
    },
  },

  input: {
    "&::before": {
      content: "Select some files",
      display: "inline-block",
      background: "linear-gradient(top, #f9f9f9, #e3e3e3)",
      border: "1px solid #999",
      borderRadius: "3px",
      padding: "5px 8px",
      outline: "none",
      whiteSpace: "nowrap",
      cursor: "pointer",
      textShadow: "1px 1px #fff",
      fontWeight: "700",
      fontSize: "10pt",
    },
  },
  textField: {
    width: "90%",
    margin: "12px auto",
    fontSize: "20px",
    fontWeight: "600",
    display: "flex",
    // margin:"auto",
    "& .MuiSelect": {
      height: "50px",
      background: "rgb(232,232,232)",
    },
  },
};
export default authorCardStyle;

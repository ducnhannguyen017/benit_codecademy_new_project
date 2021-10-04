const postCardStyle = {
  postCard: {
    display: "flex",
    flex: "1 1 300px",
    flexDirection: "column",
    minHeight: "300px",
    overflow: "hidden",
    margin: "0 20px 40px",
    background: "#fff 50%",
    backgroundSize: "cover",
    borderRadius: "2px",
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 15%)",
    transition: "all .5s ease",
    "&:hover": {
      boxShadow: "-2px 8px 22px 0 rgb(0 0 0 / 15%)",
      transition: "all .2s ease",
    },
  },
  postCardImageLink: {
    position: "relative",
    display: "block",
    overflow: "hidden",
    borderRadius: "2px 2px 0 0",
  },
  postCardImage: {
    width: "auto",
    height: "200px",
    background: "#c5d2d9 no-repeat 50%",
    backgroundSize: "cover",
  },
  postCardContent: {
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  postCardContentLink: {
    position: "relative",
    display: "block",
    padding: "25px 25px 0",
    color: "#15171a",
  },
  postCardHeader: {
    display: "block",
  },
  postCardTags: {
    display: "block",
    marginBottom: "4px",
    color: "#ffc740",
    fontSize: " 0.75rem",
    lineHeight: "1.15em",
    fontWeight: "500",
    letterSpacing: ".5px",
    textTransform: "uppercase",
  },
  postCardTitle: {
    marginTop: "0",
    fontSize: "1.25rem",
  },
  postCardExcerpt: {
    fontFamily:
      "Nunito Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
  },
  postCardMeta: {
    padding: "0 25px 25px",
  },
  authorProfileImage: {
    width: "25px",
    height: "25px",
    marginRight: "5px",
    borderRadius: "100%",
    objectFit: "cover",
  },
  postCardAuthor: {
    fontSize: "0.8125rem",
    fontWeight: "600",
    letterSpacing: ".5px",
    textTransform: "uppercase",
  },
  fullyPostCard: {},
  noFullyPostCard: {},
  "@media (min-width: 795px)": {
    fullyPostCard: {
      "&:nth-child(6n+1):not(.no-image)": {
        flex: "1 1 100%",
        flexDirection: "row",
        "& $postCardImageLink": {
          position: "relative",
          flex: "1 1 auto",
          borderRadius: "5px 0 0 5px",
        },
        "& $postCardImage": {
          position: "absolute",
          width: "100%",
          height: "100%",
        },
        "& $postCardContent": {
          flex: "1 1 357px",
          maxWidth: "357px",
        },
        "& $postCardContentLink": {
          padding: "30px 40px 0",
        },
        "& h2": {
          // "& h2": {
          fontSize: "1.625rem",
          // },
        },
        "& $postCardExcerpt": {
          "& p": {
            fontSize: "1.125rem",
            lineHeight: "1.55rem",
          },
        },
        "& $postCardMeta": {
          padding: "0 40px 30px",
        },
      },
    },
  },
};
export default postCardStyle;

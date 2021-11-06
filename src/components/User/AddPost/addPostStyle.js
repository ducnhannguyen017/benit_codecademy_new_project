const postManipulationStyle = (theme) => ({
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
  postManipulationWrapper: {
    background: "#fff 50%",
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 15%)",
    height: "1200px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    width: "90%",
    height: 300,
    marginBottom: 10,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  hover: {
    cursor: "pointer",
    "&:hover": {
      background: "#fff 50%",
      boxShadow: "0 2px 8px 0 rgb(0 0 0 / 30%)",
      height: "1000px",
    },
  },
  active: {
    background: "#fff 50%",
    boxShadow: "0 2px 8px 0 rgb(0 0 0 / 30%)",
    height: "1000px",
  },
});
export default postManipulationStyle;

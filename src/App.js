import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategory } from "redux/actions/CategoryAction";
import RootRoute from "screens/RootRoute";

const useStyles = makeStyles({
  siteWrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const classes = useStyles();
  return (
    <div className={classes.siteWrapper}>
      <CssBaseline />
      <RootRoute />
    </div>
  );
}

export default App;

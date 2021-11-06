import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "redux/actions/CategoryAction";
import { categorySelector } from "redux/reducers/CategoryReducer";
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

  const temp = useSelector(categorySelector);
  console.log(temp);

  const classes = useStyles();
  return (
    <div className={classes.siteWrapper}>
      <CssBaseline />
      <RootRoute />
    </div>
  );
}

export default App;

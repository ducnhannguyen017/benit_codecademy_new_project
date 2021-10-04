import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import RootRoute from "screens/RootRoute";

const useStyles = makeStyles({
  siteWrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.siteWrapper}>
      <CssBaseline />
      <RootRoute />
    </div>
  );
}

export default App;

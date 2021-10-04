import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import style from "components/User/HeaderContent/headerContentStyle";

const useStyle = makeStyles(style);
function HeaderContent(props) {
  const { siteTitle, siteDescription } = props;
  const classes = useStyle();
  return (
    <Grid component="div" container className={classes.siteHeaderContent}>
      <Grid component="h1" item className={classes.siteTitle}>
        {siteTitle}
      </Grid>
      <Grid component="h2" item className={classes.siteDescription}>
        {siteDescription}
      </Grid>
    </Grid>
  );
}

export default HeaderContent;

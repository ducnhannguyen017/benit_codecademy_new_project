import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import style from "components/User/Footer/footerStyle";
import clsx from "clsx";

const useStyle = makeStyles(style);
function Footer() {
  const classes = useStyle();
  return (
    <Box component="footer" className={clsx(classes.siteFooter, classes.outer)}>
      <Box className={classes.inner}>
        <Box className={classes.siteFooterContentPrimary}>
          <Box component="section" className={classes.copyright}>
            <Link to="/user">Codecademy News</Link> © 2021
          </Box>
          <Box component="nav" className={classes.siteFooterNav}>
            <Link to="/user">Latest Posts</Link>
            <Link to="facebook.com">Facebook</Link>
            <Link to="twitter.com">Twitter</Link>
          </Box>
        </Box>
        <Grid container className={classes.siteFooterContentSecondary}>
          <Grid item component="nav" className={classes.siteFooterNav}>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Cookie Policy</Link>
            <Link to="/">Do Not Sell My Personal Information</Link>
            <Link to="/">Terms</Link>
          </Grid>
          <Grid item component="section" className={classes.copyright}>
            Made with ️❤️ in NYC © 2021 Codecademy
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;

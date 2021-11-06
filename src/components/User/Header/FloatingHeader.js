import { Box, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import style from "components/User/Header/floatingHeaderStyle";
import clsx from "clsx";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

const useStyle = makeStyles(style);
function FloatingHeader(props) {
  const { floatingHeaderActive } = props;

  useEffect(() => {
    if (floatingHeaderActive) {
      window.addEventListener("scroll", floatingActiveOnScroll);
    }
    return function cleanup() {
      if (floatingHeaderActive) {
        window.removeEventListener("scroll", floatingActiveOnScroll);
      }
    };
  });

  const floatingActiveOnScroll = () => {
    const windowsScroll = window.pageYOffset;

    const htmlTag = document.getElementsByTagName("html")[0];
    const processBarWidth =
      (windowsScroll / (htmlTag.scrollHeight - htmlTag.scrollTop)) * 100 + "%";

    if (document.getElementById("floatingHeader") !== null) {
      if (windowsScroll > floatingHeaderActive.height) {
        document
          .getElementById("floatingHeader")
          .classList.add(classes[floatingHeaderActive]);
        document.getElementById("processBar").style.width = processBarWidth;
      } else {
        document
          .getElementById("floatingHeader")
          .classList.remove(classes[floatingHeaderActive]);
      }
    }
  };
  const classes = useStyle();
  return (
    <Grid
      container
      id="floatingHeader"
      className={clsx(classes.floatingHeader, classes.floatingHeaderActive)}
    >
      <Grid item className={classes.floatingHeaderLogo}>
        <Link to="/user">
          <img
            src="https://www.codecademy.com/resources/blog/content/images/2021/05/blog-logo-3.svg"
            alt=""
          />
        </Link>
      </Grid>
      <Grid item component="span" className={classes.floatingHeaderDivider}>
        —
      </Grid>
      <Grid item className={classes.floatingHeaderTitle}>
        10 Swift Code Challenges for Beginners
      </Grid>
      <Grid item container className={classes.floatingHeaderShare}>
        <Grid item container className={classes.floatingHeaderShareLabel}>
          Share this
          <i className="fas fa-hand-point-right"></i>
        </Grid>
        <Link to="twitter.com" className={classes.floatingHeaderShareTw}>
          <TwitterIcon />
        </Link>
        <Link to="facebook.com" className={classes.floatingHeaderShareFb}>
          <FacebookIcon />
        </Link>
      </Grid>
      <Grid item className={classes.progress} value="700" max="7189">
        <Box className={classes.processContainer}>
          <span id="processBar" className={classes.processBar}></span>
        </Box>
      </Grid>
    </Grid>
  );
}

export default FloatingHeader;

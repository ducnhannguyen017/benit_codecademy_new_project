import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import style from "components/User/AuthorCard/authorCardStyle";
import { Link } from "react-router-dom";
import Button from "components/UI/Button/Button";
import clsx from "clsx";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyle = makeStyles(style);
function AuthorCard(props) {
  const classes = useStyle();
  const { size } = props;
  const authorCardClasses = clsx({
    [classes[size]]: size,
    [classes.authorDetail]: true,
  });
  return (
    <Grid container component="footer" className={authorCardClasses}>
      <Grid className={classes.authorCard} item component="section" container>
        <img
          className={classes.authorProfileImage}
          src="https://www.codecademy.com/resources/blog/content/images/2021/07/Adam-Carpenter.png"
          alt=""
        />
        <Grid item component="section" className={classes.authorCardContent}>
          <h4 className={classes.authorCardName}>
            <Link to="/user/author">Adam Carpenter</Link>
          </h4>
          <p>
            Adam Carpenter is a tech, fintech, and business innovations writer.
            Passionate about user safety, Adam writes about cybersecurity
            solutions, software, and innovations.
          </p>
        </Grid>
      </Grid>
      {size === "lg" ? (
        <div className={classes.authorMeta}>
          <div className={classes.authorStats}>
            47 posts <span className={classes.bull}>•</span>
          </div>
          <Link className={classes.socialLink} to="facebook.com">
            <FacebookIcon />
          </Link>
          <Link className={classes.socialLink} to="facebook.com">
            <TwitterIcon />
          </Link>
        </div>
      ) : (
        <Grid className={classes.postDetailFooterRight} item>
          <Button textColor="gray" border="round" to="">
            Read More
          </Button>
        </Grid>
      )}
    </Grid>
  );
}

export default AuthorCard;

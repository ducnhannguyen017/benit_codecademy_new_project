import React from "react";
import style from "components/User/ReadNext/readNextStyle";
import { Box, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PostCard from "components/UI/PostCard/PostCard";

const useStyle = makeStyles(style);
function ReadNext() {
  const classes = useStyle();
  return (
    <Box component="aside" className={clsx(classes.readNext, classes.outer)}>
      <Box className={classes.inner}>
        <Grid container className={classes.readNextFeed}>
          <Grid
            component="article"
            item
            container
            className={classes.readNextCard}
          >
            <Box component="header" className={classes.readNextCardHeader}>
              <small className={classes.readNextCardHeaderSiteTitle}>
                — Codecademy News —
              </small>
              <h3 className={classes.readNextCardHeaderTitle}>
                <Link to="/user/learning-tips">Learning to code</Link>
              </h3>
            </Box>
            <Grid item container className={classes.readNextDivider}>
              <AllInclusiveIcon />
            </Grid>
            <Grid item container className={classes.readNextCardContent}>
              <Grid item container component="ul">
                <Grid item component="li">
                  <Link to="/user/detail">
                    What Is Information Technology (IT)?
                  </Link>
                </Grid>
                <Grid item component="li">
                  <Link to="/user/detail">
                    What Is Information Technology (IT)?
                  </Link>
                </Grid>
                <Grid item component="li">
                  <Link to="/user/detail">
                    What Is Information Technology (IT)?
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Box component="footer" className={classes.readNextCardFooter}>
              <Link to="/">See all 157 posts →</Link>
            </Box>
          </Grid>
          <PostCard
            postCardImage="https://www.codecademy.com/resources/blog/content/images/2021/09/Featured-Thumbnails_1200x558-3.png"
            postCardTags="Career Advice"
            postCardTitle="How to Negotiate a Job Offer for Software Engineers"
            postCardExcerpt="Learn how to negotiate job offers as a Software Engineer, including benefits and how to practice."
            authorProfileImage="https://www.codecademy.com/resources/blog/content/images/2021/07/Adam-Carpenter.png"
            postCardAuthor="Adam Carpenter"
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default ReadNext;

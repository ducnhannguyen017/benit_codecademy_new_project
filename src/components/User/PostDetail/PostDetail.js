import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import styles from "components/User/PostDetail/postDetailStyle";
import clsx from "clsx";
import { Link } from "react-router-dom";
import FloatingHeader from "components/User/Header/FloatingHeader";
import ReadNext from "components/User/ReadNext/ReadNext";
import Footer from "components/User/Footer/Footer";
import AuthorCard from "components/User/AuthorCard/AuthorCard";

const useStyle = makeStyles(styles);
function PostDetail() {
  const classes = useStyle();

  return (
    <>
      <Box component="main" className={clsx(classes.siteMain, classes.outer)}>
        <Box className={classes.inner}>
          <Box component="article" className={classes.postDetail}>
            <Box component="header" className={classes.postDetailHeader}>
              <Grid
                container
                component="section"
                className={classes.postDetailMeta}
              >
                <Grid
                  item
                  component="time"
                  className={classes.postDetailMetaDate}
                >
                  Published 28 September 2021
                </Grid>
                <span className={classes.dateDivider}>/</span>
                <Link to="/user/learning-tips">Learning to code</Link>
              </Grid>
              <h1 className={classes.postDetailTitle}>
                How To Use Your Programming Skills for Social Good
              </h1>
            </Box>
            <Box component="section" className={classes.postDetailContent}>
              <Grid container className={classes.postContent}>
                <Box component="figure" className={classes.postDetailImage}>
                  <img
                    alt=""
                    src="https://www.codecademy.com/resources/blog/content/images/size/w1600/2021/09/What-is-deep-learning-.png"
                    sizes="(min-width: 1200px) 1200px"
                  />
                </Box>
                <p>
                  Deep learning is one of the hottest up-and-coming job sectors
                  in the world, with a market currently ranging between $3.5 and
                  $5.8 trillion. On average, a Deep Learning Engineer earns ,
                  but salaries can climb even higher.
                </p>
                <h2>The basics of deep learning</h2>
              </Grid>
            </Box>
            <AuthorCard size="sm" />
          </Box>
        </Box>
      </Box>
      <ReadNext />
      <FloatingHeader floatingHeaderActive={{ height: 100 }} />
      <Footer />
    </>
  );
}

export default PostDetail;

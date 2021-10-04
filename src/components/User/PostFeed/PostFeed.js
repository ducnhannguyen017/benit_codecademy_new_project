import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import styles from "components/User/PostFeed/postFeedStyle";
import PostCard from "components/UI/PostCard/PostCard";
import clsx from "clsx";

import CkEditor from "components/User/PostManipulation/PostManipulation";
const useStyle = makeStyles(styles);

const data = [1, 2, 3, 4, 5, 6, 7];
function PostFeed(props) {
  const { action } = props;
  const classes = useStyle();
  return (
    <>
      <Box component="main" className={clsx(classes.siteMain, classes.outer)}>
        <Box className={classes.inner}>
          {action === "on" ? <CkEditor /> : null}
          <Grid container className={classes.postFeed}>
            {data.map((row) => (
              <PostCard
                postCardImage="https://www.codecademy.com/resources/blog/content/images/2021/09/Featured-Thumbnails_1200x558-3.png"
                postCardTags="Career Advice"
                postCardTitle="How to Negotiate a Job Offer for Software Engineers"
                postCardExcerpt="Learn how to negotiate job offers as a Software Engineer, including benefits and how to practice."
                authorProfileImage="https://www.codecademy.com/resources/blog/content/images/2021/07/Adam-Carpenter.png"
                postCardAuthor="Adam Carpenter"
                type={props.type}
                action={action}
                to="/user/detail"
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default PostFeed;

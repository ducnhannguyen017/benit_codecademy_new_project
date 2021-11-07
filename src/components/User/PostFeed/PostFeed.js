import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import styles from "components/User/PostFeed/postFeedStyle";
import PostCard from "components/UI/PostCard/PostCard";
import clsx from "clsx";

import AddPost from "components/User/AddPost/AddPost";
const useStyle = makeStyles(styles);

function PostFeed(props) {
  const { action, postsByUser, postDetail } = props;
  const classes = useStyle();

  return (
    <>
      <Box component="main" className={clsx(classes.siteMain, classes.outer)}>
        <Box className={classes.inner}>
          {action === "on" ? <AddPost postDetail={postDetail} /> : null}
          <Grid container className={classes.postFeed}>
            {postsByUser === undefined
              ? null
              : postsByUser.map((row) => (
                  <PostCard
                    postCardImageId={row.image.id}
                    postCardImage={row.image.filename}
                    postCardTags={row.category.name}
                    postCardTitle={row.title}
                    postCardExcerpt={row.excerpt}
                    authorProfileImage={row.appUser.avatar}
                    postCardAuthor={row.appUser.name}
                    type={props.type}
                    action={action}
                    to={`/user/detail/${row.id}`}
                    key={row.id}
                    id={row.id}
                  />
                ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default PostFeed;

import { Box, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import parse from "html-react-parser";
import styles from "components/User/PostDetail/postDetailStyle";
import clsx from "clsx";
import { Link } from "react-router-dom";
import ReadNext from "components/User/ReadNext/ReadNext";
import AuthorCard from "components/User/AuthorCard/AuthorCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "redux/actions/PostAction";
import { postsDetailSelector } from "redux/reducers/PostDetailReducer";
import FloatingHeader from "components/User/Header/FloatingHeader";

const useStyle = makeStyles(styles);
function PostDetail(props) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { id } = props;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var date;

  useEffect(() => {
    dispatch(getPostDetail(id));
  }, [dispatch]);

  const postDetail = useSelector(postsDetailSelector);
  console.log(postDetail);
  if (postDetail.isLoading === false) {
    date = new Date(postDetail.postDetail.data.updatedAt);
  }

  return (
    <>
      {postDetail.isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            component="main"
            className={clsx(classes.siteMain, classes.outer)}
          >
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
                      Published: {date.toLocaleDateString("en-US", options)}
                    </Grid>
                    <span className={classes.dateDivider}>/</span>
                    <Link
                      to={`/user/tag/${postDetail.postDetail.data.category.tag}`}
                    >
                      {postDetail.postDetail.data.category.title}
                    </Link>
                  </Grid>
                  <h1 className={classes.postDetailTitle}>
                    {postDetail.postDetail.data.title}
                  </h1>
                </Box>
                <Box component="section" className={classes.postDetailContent}>
                  <Grid container className={classes.postContent}>
                    <Box component="figure" className={classes.postDetailImage}>
                      <img
                        alt=""
                        src={postDetail.postDetail.data.image.filename}
                        sizes="(min-width: 1200px) 1200px"
                      />
                    </Box>
                    {parse(postDetail.postDetail.data.content.toString())}
                    {/* {postDetail.postDetail.data.content} */}
                  </Grid>
                </Box>
                <AuthorCard
                  author={postDetail.postDetail.data.appUser}
                  size="sm"
                />
              </Box>
            </Box>
          </Box>
          <FloatingHeader
            title={postDetail.postDetail.data.title}
            floatingHeaderActive={{ height: 100 }}
          />
          <ReadNext id={postDetail.postDetail.data.category.id} />
        </>
      )}
    </>
  );
}

export default PostDetail;

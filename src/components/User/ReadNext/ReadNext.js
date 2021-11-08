import React, { useEffect } from "react";
import style from "components/User/ReadNext/readNextStyle";
import { Box, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import PostCard from "components/UI/PostCard/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByCate } from "redux/actions/PostAction";
import { postsByCateSelector } from "redux/reducers/PostsByCateReducer";
import { useHistory } from "react-router";

const useStyle = makeStyles(style);
function ReadNext(props) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = props;
  useEffect(() => {
    dispatch(getPostsByCate(id));
  }, [dispatch]);

  const postsByCate = useSelector(postsByCateSelector);
  console.log(postsByCate);
  return (
    <>
      {/* {postByCate !== {} && ( */}
      {postsByCate.isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Box
            component="aside"
            className={clsx(classes.readNext, classes.outer)}
          >
            <Box className={classes.inner}>
              <Grid container className={classes.readNextFeed}>
                <Grid
                  component="article"
                  item
                  container
                  className={classes.readNextCard}
                >
                  <Box
                    component="header"
                    className={classes.readNextCardHeader}
                  >
                    <small className={classes.readNextCardHeaderSiteTitle}>
                      — Codecademy News —
                    </small>
                    <h3 className={classes.readNextCardHeaderTitle}>
                      <Link to="/user/learning-tips">
                        {postsByCate.postsByCate.data[0].category.title}
                      </Link>
                    </h3>
                  </Box>
                  <Grid item container className={classes.readNextDivider}>
                    <AllInclusiveIcon />
                  </Grid>
                  <Grid item container className={classes.readNextCardContent}>
                    <Grid item container component="ul">
                      {postsByCate.postsByCate.data
                        .slice(0, 3)
                        .map((element) => (
                          <Grid item component="li" key={element.id}>
                            <Link
                              to={`/user/detail/${element.id}`}
                              onClick={() => history.go(0)}
                            >
                              {element.title}
                            </Link>
                          </Grid>
                        ))}
                    </Grid>
                  </Grid>
                  <Box
                    component="footer"
                    className={classes.readNextCardFooter}
                  >
                    <Link
                      to={`/user/tag/${postsByCate.postsByCate.data[0].category.tag}`}
                    >
                      See all {postsByCate.postsByCate.data.length} posts →
                    </Link>
                  </Box>
                </Grid>
                {postsByCate.postsByCate.data.slice(0, 3).map((element) => (
                  <PostCard
                    postCardImage={element.image.filename}
                    postCardTags={element.category.name}
                    postCardTitle={element.title}
                    postCardExcerpt={element.excerpt}
                    authorProfileImage={element.appUser.avatar}
                    postCardAuthor={element.appUser.name}
                    key={element.id}
                    to={`/user/detail/${element.id}`}
                  />
                ))}
              </Grid>
            </Box>
          </Box>
          {/* )}{" "} */}
        </>
      )}
    </>
  );
}

export default ReadNext;

import React, { useEffect, useState } from "react";
import Header from "components/User/Header/Header";
import Search from "components/User/Search/Search";
import PostFeed from "components/User/PostFeed/PostFeed";
import AuthorCard from "components/User/AuthorCard/AuthorCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "redux/actions/AuthAction";
import {
  deletePostDetail,
  getPostDetail,
  getPostsByUser,
} from "redux/actions/PostAction";
import { userByIdSelector } from "redux/reducers/UserByIdReducer";
import { postsByUserSelector } from "redux/reducers/PostsByUserReducer";
import { postsDetailSelector } from "redux/reducers/PostDetailReducer";
import { CircularProgress } from "@material-ui/core";

function Profile(props) {
  const { match } = props;
  const dispatch = useDispatch();
  dispatch(deletePostDetail());
  document.documentElement.scrollTop = 0;

  useEffect(() => {
    dispatch(getUserById(match.params.userId));
    dispatch(getPostsByUser(match.params.userId));
    if (
      match.params.postId &&
      match.path === "/user/profile/:userId/edit/:postId"
    ) {
      dispatch(getPostDetail(match.params.postId));
    }
  }, [dispatch]);

  const author = useSelector(userByIdSelector);
  const posts = useSelector(postsByUserSelector);
  const postDetail = useSelector(postsDetailSelector);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const action =
    currentUser !== null &&
    Number(match.params.userId) === Number(currentUser.id)
      ? "on"
      : "off";

  const [searchTerm, setSearchTerm] = useState("");
  const getSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  var data;
  if (searchTerm !== "" && !posts.isLoading) {
    data = posts.postsByUser.data.filter((element) =>
      element.title.toLowerCase().includes(searchTerm)
    );
  } else {
    data = posts.postsByUser.data;
  }

  return (
    <>
      {author.isLoading && posts.isLoading && postDetail.isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Header />
          <Search getSearchTerm={getSearchTerm} />
          <AuthorCard
            action={action}
            countPosts={
              posts.postsByUser.data !== undefined &&
              posts.postsByUser.data.length
            }
            author={author.userById.data}
            size="lg"
            userId={match.params.userId}
          />
          <PostFeed
            postDetail={postDetail.postDetail.data}
            posts={data}
            action={action}
            userId={match.params.userId}
          />
        </>
      )}
    </>
  );
}

export default Profile;

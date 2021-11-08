import React, { useEffect, useState } from "react";
import Header from "components/User/Header/Header";
import Search from "components/User/Search/Search";
import PostFeed from "components/User/PostFeed/PostFeed";
import AuthorCard from "components/User/AuthorCard/AuthorCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "redux/actions/AuthAction";
import { getPostDetail, getPostsByUser } from "redux/actions/PostAction";
import { userByIdSelector } from "redux/reducers/UserByIdReducer";
import { postsByUserSelector } from "redux/reducers/PostsByUserReducer";
import { postsDetailSelector } from "redux/reducers/PostDetailReducer";
import { CircularProgress } from "@material-ui/core";

function Profile(props) {
  const { match } = props;
  const dispatch = useDispatch();
  console.log(match);

  useEffect(() => {
    dispatch(getUserById(match.params.userId));
    dispatch(getPostsByUser(match.params.userId));
    if (match.params.postId) {
      dispatch(getPostDetail(match.params.postId));
    }
  }, [dispatch]);

  const author = useSelector(userByIdSelector);
  const posts = useSelector(postsByUserSelector);
  const postDetail = useSelector(postsDetailSelector);
  console.log(author);
  console.log(posts);
  console.log(postDetail);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const action =
    currentUser !== null &&
    Number(match.params.userId) === Number(currentUser.id)
      ? "on"
      : "off";

  console.log(
    currentUser !== null &&
      Number(match.params.userId) === Number(currentUser.id)
  );

  const [searchTerm, setSearchTerm] = useState("");
  const getSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  console.log(searchTerm);
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
            postsByUser={posts.postsByUser.data}
            action={action}
            userId={match.params.userId}
          />
        </>
      )}
    </>
  );
}

export default Profile;

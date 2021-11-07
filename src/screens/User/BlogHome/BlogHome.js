import Header from "components/User/Header/Header";
import Search from "components/User/Search/Search";
import PostFeed from "components/User/PostFeed/PostFeed";
import React, { useEffect, useState } from "react";
import Footer from "components/User/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getPostList } from "redux/actions/PostAction";
import { allPostSelector } from "redux/reducers/PostReducer";
import { CircularProgress } from "@material-ui/core";

function BlogHome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  const postList = useSelector(allPostSelector);
  console.log(postList);

  const [searchTerm, setSearchTerm] = useState("");
  const getSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  console.log(searchTerm);
  var data;

  if (searchTerm !== "" && !postList.isLoading) {
    data = postList.post.data.filter((element) =>
      element.title.toLowerCase().includes(searchTerm)
    );
  } else {
    data = postList.post.data;
  }

  console.log(data);
  return (
    <>
      <Header />
      <Search getSearchTerm={getSearchTerm} />
      {postList.isLoading === false ? (
        <PostFeed postsByUser={data} type="fullyPostCard" />
      ) : (
        <CircularProgress />
      )}

      <Footer />
    </>
  );
}

export default BlogHome;

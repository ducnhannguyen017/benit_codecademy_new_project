import { CircularProgress } from "@material-ui/core";
import Header from "components/User/Header/Header";
import PostFeed from "components/User/PostFeed/PostFeed";
import Search from "components/User/Search/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostList } from "redux/actions/PostAction";
import { categorySelector } from "redux/reducers/CategoryReducer";
import { allPostSelector } from "redux/reducers/PostReducer";

function Category(props) {
  const { match } = props;
  const { category, isLoading } = useSelector(categorySelector);
  var headerContent;
  if (!isLoading) {
    headerContent = category.data.find(
      (element) => element.tag === match.params.tag
    );
  }
  //get all posts
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");
  const getSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const postList = useSelector(allPostSelector);
  const data = postList.isLoading
    ? null
    : postList.post.data.filter(
        (element) =>
          element.category.tag === match.params.tag &&
          element.title.toLowerCase().includes(searchTerm)
      );

  return (
    <>
      <Header headerContent={headerContent} />
      <Search getSearchTerm={getSearchTerm} />
      {postList.isLoading === false ? (
        <PostFeed posts={data} type="noFullyPostCard" />
      ) : (
        <CircularProgress />
      )}
    </>
  );
}

export default Category;

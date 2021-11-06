import Header from "components/User/Header/Header";
import Search from "components/User/Search/Search";
import PostFeed from "components/User/PostFeed/PostFeed";
import React, { useEffect, useState } from "react";
import Footer from "components/User/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import tokenService from "api/tokenService";
import { authSelector } from "redux/reducers/AuthReducer";
import { getPostList } from "redux/actions/PostAction";
import {
  allPostSelector,
  selectPostBySearchTerm,
} from "redux/reducers/PostReducer";
import { CircularProgress } from "@material-ui/core";
import { refreshApi } from "api/api";

const headerContents = [
  {
    siteTitle: "Career Advice",
    siteDescription:
      "Interested in a career in web development, programming, computer science, or data science? Find tips, advice, and answers to questions about careers in coding.",
  },
  {
    siteTitle: "Learning Tips",
    siteDescription:
      "Interested in a career in web development, programming, computer science, or data science? Find tips, advice, and answers to questions about careers in coding.",
  },
  {
    siteTitle: "Course Updates",
    siteDescription:
      "Interested in a career in web development, programming, computer science, or data science? Find tips, advice, and answers to questions about careers in coding.",
  },
  {
    siteTitle: "News",
    siteDescription:
      "Interested in a career in web development, programming, computer science, or data science? Find tips, advice, and answers to questions about careers in coding.",
  },
  {
    siteTitle: "Business",
    siteDescription:
      "Interested in a career in web development, programming, computer science, or data science? Find tips, advice, and answers to questions about careers in coding.",
  },
];
const listNavLink = [
  {
    siteTitle: "Blog Home",
  },
  ...headerContents,
];
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

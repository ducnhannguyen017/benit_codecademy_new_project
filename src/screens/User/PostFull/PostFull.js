import Header from "components/User/Header/Header";
import Search from "components/User/Search/Search";
import React from "react";
import PostDetail from "components/User/PostDetail/PostDetail";
import Footer from "components/User/Footer/Footer";
import FloatingHeader from "components/User/Header/FloatingHeader";

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
function PostFull(props) {
  const { match } = props;
  return (
    <>
      <Header listNavLink={listNavLink} />
      <FloatingHeader floatingHeaderActive={{ height: 100 }} />
      <Search />
      <PostDetail id={match.params.postId} />
      <Footer />
    </>
  );
}

export default PostFull;

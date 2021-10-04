import React from "react";
import Header from "components/User/Header/Header";
import Search from "components/User/Search/Search";
import PostFeed from "components/User/PostFeed/PostFeed";
import AuthorCard from "components/User/AuthorCard/AuthorCard";

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
function Profile() {
  return (
    <>
      <Header listNavLink={listNavLink} />
      <Search />
      <AuthorCard size="lg" />
      <PostFeed action="on" />
    </>
  );
}

export default Profile;

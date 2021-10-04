import Header from "components/User/Header/Header";
import PostFeed from "components/User/PostFeed/PostFeed";
import Search from "components/User/Search/Search";
import React from "react";
import { convertToSlug } from "utils/User/userUtils";

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
function Category(props) {
  const { category } = props;

  const headerContent = headerContents.find(
    (headerContent) => convertToSlug(headerContent.siteTitle) === category
  );
  return (
    <>
      <Header listNavLink={listNavLink} headerContent={headerContent} />
      <Search />
      <PostFeed type="noFullyPostCard" />
    </>
  );
}

export default Category;

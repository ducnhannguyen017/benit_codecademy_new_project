import Header from "components/User/Header/Header";
import Search from "components/User/Search/Search";
import React, { useState } from "react";
import PostDetail from "components/User/PostDetail/PostDetail";
import Footer from "components/User/Footer/Footer";

function PostFull(props) {
  const { match } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const getSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  console.log(searchTerm);

  return (
    <>
      <Header />
      <Search getSearchTerm={getSearchTerm} />
      <PostDetail id={match.params.postId} />
      <Footer />
    </>
  );
}

export default PostFull;

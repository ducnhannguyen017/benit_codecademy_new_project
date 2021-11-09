import Header from "components/User/Header/Header";
import Search from "components/User/Search/Search";
import React from "react";
import PostDetail from "components/User/PostDetail/PostDetail";
import Footer from "components/User/Footer/Footer";
import { useHistory } from "react-router";

function PostFull(props) {
  const { match } = props;
  const history = useHistory();
  const getSearchTerm = (searchTerm) => {
    history.push("/");
  };

  return (
    <>
      <Header />
      <Search getSearchTerm={getSearchTerm} />
      <PostDetail id={match.params.id} />
      <Footer />
    </>
  );
}

export default PostFull;

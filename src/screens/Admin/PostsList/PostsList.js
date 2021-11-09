import React, { useEffect, useState } from "react";
import AppBar from "components/Admin/AppBar/AppBar";
import Content from "components/Admin/Content/Content";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router";
import { getPostList } from "redux/actions/PostAction";
import { allPostSelector } from "redux/reducers/PostReducer";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, CircularProgress } from "@material-ui/core";
import { requestDeletePost } from "api/api";

const columns = [
  { field: "Title", headerName: "Title", size: "20%" },
  { field: "Excerpt ", headerName: "Excerpt ", size: "50%" },
  { field: "User", headerName: "User", size: "20%" },
  { field: "Category ", headerName: "Category ", size: "5%" },
  { field: "isPublic ", headerName: "isPublic ", size: "5%" },
];

function createData(row) {
  return {
    Id: row.id,
    Title: row.title,
    Excerpt: row.excerpt,
    User: (
      <>
        {row.appUser.name}
        <Avatar alt="" src={row.appUser.avatar} />
      </>
    ),
    Category: row.category.name,
    IsPublic: row.isPublic.toString(),
  };
}

// export var AccountListContext = createContext({});
export default function PostsList() {
  let history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  const postList = useSelector(allPostSelector);
  var rows;
  if (!postList.isLoading) {
    rows = [postList.post.data.map((element) => createData(element))];
  }

  const [id, setId] = useState();
  const deleteAction = async () => {
    if (window.confirm("Are you sure to delete")) {
      const res = await requestDeletePost(id);
      if (res.status === 200) {
        alert("Success");
        history.go(0);
        document.documentElement.scrollTop = 0;
      }
    }
  };
  const viewAction = async () => {
    history.push(`/user/detail/${id}`);
  };
  const getId = (id) => {
    setId(id);
  };

  const dropDownItems = [
    {
      id: 1,
      icon: <DeleteIcon />,
      text: "Delete",
      action: deleteAction,
    },
    {
      id: 1,
      icon: <ViewCarouselIcon />,
      text: "View",
      action: viewAction,
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <AppBar />
      {postList.isLoading ? (
        <CircularProgress />
      ) : (
        <Content
          rows={rows[0]}
          columns={columns}
          dropDownItems={dropDownItems}
          table="posts"
          getId={getId}
        />
      )}
    </div>
  );
}

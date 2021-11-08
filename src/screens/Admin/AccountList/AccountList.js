import React, { createContext, useEffect, useState } from "react";
import AppBar from "components/Admin/AppBar/AppBar";
import Content from "components/Admin/Content/Content";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "redux/actions/AuthAction";
import { userListSelector } from "redux/reducers/UserListReducer";
import { Avatar } from "@material-ui/core";
import { requestDeleteUser } from "api/api";

const columns = [
  { field: "UserName ", headerName: "UserName ", size: "10%" },
  { field: "FullName ", headerName: "Full Name ", size: "20%" },
  { field: "Introduction ", headerName: "Introduction ", size: "40%" },
  { field: "Roles ", headerName: "Roles", size: "10%" },
  { field: "Avatar ", headerName: "Avatar", size: "5%" },
];

function createData(row) {
  return {
    Id: row.id,
    Username: row.username,
    FullName: row.name,
    Introduction: row.introduction,
    Role: row.roles.map((element) => element.name + "\n"),
    Avatar: <Avatar alt="" src={row.avatar} />,
  };
}

export var AccountListContext = createContext({});
export default function AccountList() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const userList = useSelector(userListSelector);
  console.log(userList);
  var rows;
  if (!userList.isLoading && userList.userList.data !== undefined) {
    rows = [userList.userList.data.map((element) => createData(element))];
  }
  console.log(rows);

  const [id, setId] = useState();
  const deleteAction = async () => {
    if (window.confirm("Are you sure to delete")) {
      const res = await requestDeleteUser(id);
      console.log(res);
      if (res.status === 200) {
        alert("Success");
        history.go(0);
        document.documentElement.scrollTop = 0;
      }
    }
  };
  const viewAction = async () => {
    history.push(`/user/profile/${id}`);
  };
  const getId = (id) => {
    setId(id);
  };
  console.log(id);

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
      {userList.isLoading ? null : (
        <Content
          rows={rows[0]}
          columns={columns}
          dropDownItems={dropDownItems}
          expand="off"
          getId={getId}
        />
      )}
    </div>
  );
}

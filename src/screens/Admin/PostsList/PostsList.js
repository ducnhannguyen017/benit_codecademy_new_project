import React, { createContext } from "react";
import AppBar from "components/Admin/AppBar/AppBar";
import Content from "components/Admin/Content/Content";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router";

const columns = [
  { field: "UserName ", headerName: "UserName ", size: "15%" },
  { field: "PassWord ", headerName: "Password ", size: "15%" },
  { field: "FullName ", headerName: "Full Name ", size: "20%" },
  { field: "Introduction ", headerName: "Introduction ", size: "50%" },
];

const rows = [
  createData(
    "1",
    "305",
    "Nguyen hoang Duc nHan",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "2",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "3",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "4",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "5",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "6",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "7",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "8",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "9",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "Snow",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "Snow",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
  createData(
    "Snow",
    "305",
    "SnowJon",
    "Adam Carpenter is a tech, fintech, and business innovations writer. Passionate about user safety, Adam writes about cybersecurity solutions, software, and innovations."
  ),
];
function createData(Username, Password, FullName, Introduction) {
  return {
    Username,
    Password,
    FullName,
    Introduction,
    Posts: [
      {
        Time: "2020-01-05",
        Title: "How To Use Your Programming Skills for Social Good",
        Excerpt:
          "Learn how to negotiate job offers as a Software Engineer, including benefits and how to practice.",
        Public: true,
      },
      {
        Time: "2020-01-05",
        Title: "How To Use Your Programming Skills for Social Good",
        Excerpt:
          "Learn how to negotiate job offers as a Software Engineer, including benefits and how to practice.",
        Public: true,
      },
    ],
  };
}

export var AccountListContext = createContext({});
export default function PostsList() {
  let history = useHistory();
  const deleteAction = () => {
    alert("deleted");
    history.push("/user");
  };
  const viewAction = () => {
    alert("redirecting to View");
    history.push("/user/profile");
  };
  const dropDownItems = [
    {
      icon: <DeleteIcon />,
      text: "Delete",
      action: deleteAction,
    },
    {
      icon: <ViewCarouselIcon />,
      text: "View",
      action: viewAction,
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <AppBar />
      <Content
        rows={rows}
        columns={columns}
        dropDownItems={dropDownItems}
        table="posts"
      />
    </div>
  );
}

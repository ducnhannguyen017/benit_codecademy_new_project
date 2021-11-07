import { Avatar, Popover } from "@material-ui/core";
import React from "react";
import MuiButton from "@material-ui/core/Button";
import Button from "components/UI/Button/Button";
import { useHistory } from "react-router";

function CustomAvatar() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClickDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const logOut = () => {
    localStorage.removeItem("currentUser");
    history.push("/sign-in");
  };

  const pathname = window.location.pathname;

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Avatar
        alt=""
        onClick={handleClickDropDown}
        src={currentUser.avatar}
        aria-describedby={id}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {currentUser.roles.includes("ROLE_ADMIN") &&
          pathname.includes("admin/") ? (
            <Button to={`/`} size="lg">
              Home Page
            </Button>
          ) : (
            <Button to={`/admin`} size="lg">
              Admin Page
            </Button>
          )}
          <Button to={`/user/profile/${currentUser.id}`} size="lg">
            Profile
          </Button>
          <MuiButton
            onClick={logOut}
            style={{ fontSize: "12px", color: "#351DED" }}
          >
            <b>Log Out</b>
          </MuiButton>
        </div>
      </Popover>
    </>
  );
}

export default CustomAvatar;

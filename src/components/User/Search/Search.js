import {
  Avatar,
  Box,
  InputBase,
  makeStyles,
  Popover,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import MuiButton from "@material-ui/core/Button";
import Button from "components/UI/Button/Button";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import style from "./searchStyle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import tokenService from "api/tokenService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostList, setSearchTerm } from "redux/actions/PostAction";
import { useHistory } from "react-router";
import CustomAvatar from "components/UI/CustomAvatar/CustomAvatar";

const useStyle = makeStyles(style);
function Search(props) {
  const classes = useStyle();
  const history = useHistory();
  const { getSearchTerm } = props;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = (e) => {
    getSearchTerm(searchTerm);
  };

  const logOut = () => {
    localStorage.removeItem("currentUser");
    history.push("/sign-in");
  };
  return (
    <Box className={clsx(classes.outer, classes.siteSearch)}>
      <Box className={classes.inner}>
        <Box className={classes.siteSearchWrapper}>
          <InputBase className={classes.inputField} onChange={handleChange} />
          <MuiButton onClick={handleClick} style={{ background: "#1557FF" }}>
            <SearchIcon />
          </MuiButton>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "2rem",
            }}
          >
            {currentUser !== null && <CustomAvatar />}
            {currentUser === null && (
              <>
                <ExitToAppIcon />
                <Button to="/sign-in" size="sm">
                  Sign In
                </Button>
                <Button to="/sign-up" size="sm">
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Search;

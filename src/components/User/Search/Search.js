import { Box, InputBase, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import MuiButton from "@material-ui/core/Button";
import Button from "components/UI/Button/Button";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import style from "./searchStyle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch } from "react-redux";
import { getPostList } from "redux/actions/PostAction";
import CustomAvatar from "components/UI/CustomAvatar/CustomAvatar";

const useStyle = makeStyles(style);
function Search(props) {
  const classes = useStyle();
  const { getSearchTerm } = props;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = (e) => {
    getSearchTerm(searchTerm);
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

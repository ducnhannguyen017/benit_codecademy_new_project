import { Box, InputBase, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import Button from "components/UI/Button/Button";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import style from "./searchStyle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyle = makeStyles(style);
function Search() {
  const classes = useStyle();
  return (
    <Box className={clsx(classes.outer, classes.siteSearch)}>
      <Box className={classes.inner}>
        <Box className={classes.siteSearchWrapper}>
          <InputBase className={classes.inputField} />
          <Button size="sm" color="primary">
            <SearchIcon />
          </Button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "2rem",
            }}
          >
            <ExitToAppIcon />
            <Button to="/sign-in" size="sm">
              Log In
            </Button>
            <Button to="/sign-up" size="sm">
              Log Out
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Search;

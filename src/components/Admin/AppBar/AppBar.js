import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MarkunreadMailboxIcon from "@material-ui/icons/MarkunreadMailbox";
import MuiAppBar from "@material-ui/core/AppBar";
import style from "components/Admin/AppBar/appBarStyle";
import clsx from "clsx";
import { Link } from "react-router-dom";
import CustomAvatar from "components/UI/CustomAvatar/CustomAvatar";

const useStyle = makeStyles(style);
function AppBar() {
  const classes = useStyle();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CssBaseline />
      <MuiAppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <CustomAvatar />
        </Toolbar>
      </MuiAppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button>
              <Link to="/admin/accounts-list" className={classes.link}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Account List" />
              </Link>
            </ListItem>
            <ListItem button>
              <Link to="/admin/posts-list" className={classes.link}>
                <ListItemIcon>
                  <MarkunreadMailboxIcon />
                </ListItemIcon>
                <ListItemText primary="Posts" />
              </Link>
            </ListItem>
          </div>
        </List>
        <Divider />
      </Drawer>
    </>
  );
}

export default AppBar;

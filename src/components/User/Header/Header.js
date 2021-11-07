import React from "react";
import {
  Box,
  CircularProgress,
  Drawer,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import style from "components/User/Header/headerStyle";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Button from "components/UI/Button/Button";
import { Link } from "react-router-dom";
import HeaderContent from "components/User//HeaderContent/HeaderContent";
import { useSelector } from "react-redux";
import { categorySelector } from "redux/reducers/CategoryReducer";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(style);
function Header(props) {
  const { headerContent } = props;

  const { isLoading, category } = useSelector(categorySelector);
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <AppBar
          elevation={0}
          className={clsx(classes.siteHeader, classes.outer)}
        >
          <Box className={classes.inner}>
            <Toolbar className={classes.siteNav}>
              <Box className={classes.siteNavLeft}>
                <Link to="/user" className={classes.siteNavLogo}>
                  <img
                    src="https://www.codecademy.com/resources/blog/content/images/2021/05/blog-logo-3.svg"
                    alt="Codecademy News"
                    className={classes.siteImgLogo}
                  />
                </Link>
              </Box>
              <Box className={classes.siteNavCenter}>
                <ul className={classes.nav}>
                  <Hidden smDown>
                    {category.data === undefined
                      ? null
                      : category.data.map((element) => (
                          <li key={element.id} className={classes.navLink}>
                            <Button
                              to={"/user/tag/" + element.tag}
                              size="md"
                              color="transparent"
                            >
                              {element.name}
                            </Button>
                          </li>
                        ))}
                  </Hidden>
                  <Hidden mdUp>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerToggle}
                      style={{ color: "black" }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Hidden>
                </ul>
              </Box>
            </Toolbar>
            <Hidden mdUp implementation="js">
              <Drawer
                variant="temporary"
                anchor={"right"}
                open={mobileOpen}
                classes={{
                  paper: classes.drawerPaper,
                }}
                onClose={handleDrawerToggle}
              >
                <div className={classes.appResponsive}>
                  {category.data === undefined
                    ? null
                    : category.data.map((element) => (
                        <li key={element.id} className={classes.navLink}>
                          <Button
                            to={"/user/tag/" + element.tag}
                            size="md"
                            color="transparent"
                          >
                            {element.name}
                          </Button>
                        </li>
                      ))}
                </div>
              </Drawer>
            </Hidden>
            {headerContent === undefined ? null : (
              <HeaderContent
                siteTitle={headerContent.title}
                siteDescription={headerContent.description}
              />
            )}
          </Box>
        </AppBar>
      )}
    </>
  );
}

export default Header;

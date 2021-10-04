import React from "react";
import { Box, makeStyles, Toolbar } from "@material-ui/core";
import style from "components/User/Header/headerStyle";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Button from "components/UI/Button/Button";
import { Link } from "react-router-dom";
import HeaderContent from "components/User//HeaderContent/HeaderContent";
import { convertToSlug } from "utils/User/userUtils";

const useStyles = makeStyles(style);
function Header(props) {
  const { listNavLink, headerContent } = props;
  const classes = useStyles();
  return (
    <AppBar elevation={0} className={clsx(classes.siteHeader, classes.outer)}>
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
              {listNavLink.map((row) => (
                <li className={classes.navLink}>
                  <Button
                    to={"/user/" + convertToSlug(row.siteTitle)}
                    size="md"
                    color="transparent"
                  >
                    {row.siteTitle}
                  </Button>
                </li>
              ))}
            </ul>
          </Box>
        </Toolbar>
        {headerContent === undefined ? null : (
          <HeaderContent
            siteTitle={headerContent.siteTitle}
            siteDescription={headerContent.siteDescription}
          />
        )}
      </Box>
    </AppBar>
  );
}

export default Header;

import {
  CircularProgress,
  Grid,
  makeStyles,
  Button as MuiButton,
} from "@material-ui/core";
import React, { useState } from "react";
import style from "components/User/AuthorCard/authorCardStyle";
import { Link } from "react-router-dom";
import Button from "components/UI/Button/Button";
import clsx from "clsx";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { requestUploadAvatar } from "api/api";
import { useHistory } from "react-router";

const useStyle = makeStyles(style);
function AuthorCard(props) {
  const classes = useStyle();
  const history = useHistory();
  const { size, author } = props;
  const authorCardClasses = clsx({
    [classes[size]]: size,
    [classes.authorDetail]: true,
  });

  const [selectedFile, setSelectedFile] = useState();
  console.log(selectedFile);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const uploadAvatar = async () => {
    try {
      let formData = new FormData();
      formData.append("file", selectedFile);
      const res = await requestUploadAvatar(currentUser.id, formData);
      console.log(res);
      res.status === 200 ? alert("Success") : alert("Error");
      history.go(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {author === undefined ? (
        <CircularProgress />
      ) : (
        <Grid container component="footer" className={authorCardClasses}>
          <Grid
            className={classes.authorCard}
            item
            component="section"
            container
          >
            <img
              className={classes.authorProfileImage}
              src={author.avatar}
              alt=""
            />
            <Grid
              item
              component="section"
              className={classes.authorCardContent}
            >
              <h4 className={classes.authorCardName}>
                <Link to={`/user/profile/${author.id}`}>{author.name}</Link>
              </h4>
              <p>{author.introduction}</p>
            </Grid>
          </Grid>
          {size === "lg" ? (
            <div className={classes.authorMeta}>
              <div className={classes.authorStats}>
                47 posts <span className={classes.bull}>•</span>
              </div>
              <Link className={classes.socialLink} to="facebook.com">
                <FacebookIcon />
              </Link>
              <Link className={classes.socialLink} to="facebook.com">
                <TwitterIcon />
              </Link>
              <input
                onChange={(value) => {
                  setSelectedFile(value.target.files[0]);
                }}
                className={classes.input}
                id="input"
                type="file"
              />
              <MuiButton
                style={{ fontSize: "14px", background: "rgb(21, 87, 255)" }}
                onClick={uploadAvatar}
              >
                <b>Upload</b>
              </MuiButton>
            </div>
          ) : (
            <Grid className={classes.postDetailFooterRight} item>
              <Button textColor="gray" border="round" to="">
                Read More
              </Button>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
}

export default AuthorCard;

import {
  CircularProgress,
  Grid,
  makeStyles,
  Button as MuiButton,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import style from "components/User/AuthorCard/authorCardStyle";
import { Link } from "react-router-dom";
import Button from "components/UI/Button/Button";
import clsx from "clsx";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { requestUpdateUser, requestUploadAvatar } from "api/api";
import { useHistory } from "react-router";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { useDispatch } from "react-redux";
import { getUserById } from "redux/actions/AuthAction";

const useStyle = makeStyles(style);
function AuthorCard(props) {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const { size, author, action, countPosts, userId } = props;
  const authorCardClasses = clsx({
    [classes[size]]: size,
    [classes.authorDetail]: true,
  });

  console.log(author);
  const [selectedFile, setSelectedFile] = useState();
  console.log(selectedFile);

  const currentUser = author;
  // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const uploadAvatar = async () => {
    try {
      let formData = new FormData();
      formData.append("file", selectedFile);
      const res = await requestUploadAvatar(currentUser.id, formData);
      console.log(res);
      currentUser.avatar = res.data.avatar;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      res.status === 200 ? alert("Success") : alert("Error");
      history.go(0);
    } catch (error) {
      console.log(error);
    }
  };
  const [editPersonalInfor, setEditPersonalInfor] = useState(false);
  const editName = () => {
    setEditPersonalInfor((prev) => !prev);
  };
  useEffect(() => {
    setEditPersonalInfor(false);
  }, [userId]);

  const [updateForm, setUpdateForm] = useState({
    name: author === undefined ? "" : author.name,
    introduction: author === undefined ? "" : author.introduction,
  });
  useEffect(() => {
    setUpdateForm({
      ...updateForm,
      name: author === undefined ? "" : author.name,
      introduction: author === undefined ? "" : author.introduction,
    });
  }, [author]);
  const { name, introduction } = updateForm;
  const savePersonalInfor = async () => {
    try {
      const res = await requestUpdateUser(currentUser.id);
      console.log(res);
      res.status === 200 ? alert("Success") : alert("error");
      dispatch(getUserById(userId));
      editName();
    } catch (error) {}
  };
  const handleChangeUpdateForm = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };
  console.log(updateForm);
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
              {size === "lg" ? (
                <>
                  {editPersonalInfor === false && (
                    <>
                      <h4 className={classes.authorCardName}>
                        <span>{author.name}</span>
                      </h4>
                      <p>{author.introduction}</p>
                      {action === "on" && (
                        <BorderColorIcon onClick={editName} />
                      )}
                    </>
                  )}
                  {editPersonalInfor === true && (
                    <>
                      <TextField
                        label="Name"
                        variant="filled"
                        className={classes.textField}
                        name="name"
                        defaultValue={name}
                        onChange={handleChangeUpdateForm}
                      />
                      <TextField
                        label="Introduction"
                        variant="filled"
                        className={classes.textField}
                        name="introduction"
                        defaultValue={introduction}
                        onChange={handleChangeUpdateForm}
                      />
                      <MuiButton
                        style={{
                          fontSize: "14px",
                          background: "rgb(21, 87, 255)",
                        }}
                        onClick={savePersonalInfor}
                      >
                        <b>Save</b>
                      </MuiButton>
                      <MuiButton
                        style={{
                          fontSize: "14px",
                          background: "red",
                          marginLeft: "10px",
                        }}
                        onClick={editName}
                      >
                        <b>Cancle</b>
                      </MuiButton>
                    </>
                  )}
                </>
              ) : (
                <>
                  <h4 className={classes.authorCardName}>
                    <Link to={`/user/profile/${author.id}`}>{author.name}</Link>
                  </h4>
                  <p>{author.introduction}</p>
                </>
              )}
            </Grid>
          </Grid>
          {size === "lg" ? (
            <div className={classes.authorMeta}>
              <div className={classes.authorStats}>
                {countPosts} posts <span className={classes.bull}>•</span>
              </div>
              <Link className={classes.socialLink} to="facebook.com">
                <FacebookIcon />
              </Link>
              <Link className={classes.socialLink} to="facebook.com">
                <TwitterIcon />
              </Link>
              {action === "on" && (
                <>
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
                </>
              )}
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

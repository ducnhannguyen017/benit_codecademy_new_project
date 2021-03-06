import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  ImageList,
  makeStyles,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import style from "components/User/AddPost/addPostStyle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "redux/actions/CategoryAction";
import { categorySelector } from "redux/reducers/CategoryReducer";
import { imageListSelector } from "redux/reducers/ImageListReducer";
import { getImageList } from "redux/actions/ImageAction";
import Button from "@material-ui/core/Button";
import { requestPostSavePost } from "api/api";
import { getPostsByUser } from "redux/actions/PostAction";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles(style);

function AddPost(props) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const { postDetail, userId } = props;
  const editor = null;
  const [addPostForm, setAddPostForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    isPublic: true,
    username: JSON.parse(localStorage.getItem("currentUser")).username,
    imageId: Number,
    categoryTag: "news",
  });

  useEffect(() => {
    if (postDetail) {
      setAddPostForm({
        ...postDetail,
        categoryTag: postDetail === undefined ? null : postDetail.category.tag,
        imageId: postDetail === undefined ? null : postDetail.image.id,
        username: JSON.parse(localStorage.getItem("currentUser")).username,
      });
    }
  }, [postDetail]);
  const { title, excerpt, content, isPublic, categoryTag } = addPostForm;
  const handleChangeAddPostForm = (e) => {
    setAddPostForm({ ...addPostForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getImageList());
  }, [dispatch]);
  const categories = useSelector(categorySelector);
  const images = useSelector(imageListSelector);

  const handleClickImage = (e) => {
    if (document.getElementById("image").querySelector(".active") !== null) {
      document
        .getElementById("image")
        .querySelector(".active")
        .classList.remove("active");
    }
    e.target.offsetParent.classList.add("active");
    setAddPostForm({ ...addPostForm, imageId: e.target.getAttribute("value") });
  };
  const handleChangePublic = (e) => {
    setAddPostForm({
      ...addPostForm,
      [e.target.name]: Boolean(e.target.checked),
    });
  };

  const handleClickSavePost = async () => {
    try {
      const res = await requestPostSavePost({
        ...addPostForm,
        isPublic: Boolean(isPublic),
      });
      res.status === Number(200) ? alert(" Post Success") : alert("L???i");
      history.go(0);
      dispatch(getPostsByUser(userId));
    } catch (error) {
      alert("L???i");
    }
  };

  return (
    <>
      {categories.isLoading && images.isLoading ? (
        <CircularProgress />
      ) : (
        <div className={classes.postManipulationWrapper}>
          <div style={{ width: "90%", margin: "auto" }}>
            <Typography className={classes.textField} component="h2">
              Make your post
            </Typography>
            <Switch
              color="primary"
              inputProps={{ "aria-label": "checkbox with default color" }}
              name="isPublic"
              checked={isPublic}
              onChange={handleChangePublic}
            />
            Public
            <TextField
              label="Title"
              variant="filled"
              className={classes.textField}
              name="title"
              value={title}
              onChange={handleChangeAddPostForm}
            />
            <TextField
              label="Excerpt"
              variant="filled"
              className={classes.textField}
              name="excerpt"
              value={excerpt}
              onChange={handleChangeAddPostForm}
            />
            <TextField
              id="filled-select-currency"
              select
              label="Category"
              variant="filled"
              className={classes.textField}
              value={categoryTag}
              name="categoryTag"
              onChange={handleChangeAddPostForm}
            >
              {categories.category.data !== undefined &&
                categories.category.data.map((option) => (
                  <MenuItem key={option.id} value={option.tag}>
                    {option.name}
                  </MenuItem>
                ))}
            </TextField>
            <div className={classes.root}>
              <ImageList rowHeight={180} className={classes.image} id="image">
                {images.imageList.data === undefined ? (
                  <CircularProgress />
                ) : (
                  images.imageList.data.map((item) => (
                    // <div>
                    <MenuItem
                      key={item.id}
                      className={classes.hover}
                      onClick={handleClickImage}
                      value={item.id}
                    >
                      <img src={item.filename} alt={item.id} value={item.id} />
                    </MenuItem>
                    // </div>
                  ))
                )}
              </ImageList>
            </div>
            <div
              style={{
                width: "90%",
                boxShadow: "0 2px 8px 0 rgb(0 0 0 / 15%)",
                margin: "auto",
              }}
            >
              <CKEditor
                onReady={(editor) => {
                  if (editor !== null) {
                    editor.ui
                      .getEditableElement()
                      .parentElement.insertBefore(
                        editor.ui.view.toolbar.element,
                        editor.ui.getEditableElement()
                      );
                  }
                  // editor = editor;
                }}
                onError={({ willEditorRestart }) => {
                  if (willEditorRestart) {
                    editor.ui.view.toolbar.element.remove();
                  }
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setAddPostForm({ ...addPostForm, content: data });
                }}
                editor={DecoupledEditor}
                data={content}
                config={{ width: "75%" }}
                name="content"
              />
            </div>
            <Button
              style={{
                marginTop: "15px",
                position: "relative",
                right: "-26px",
              }}
              variant="contained"
              color="primary"
              onClick={handleClickSavePost}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddPost;

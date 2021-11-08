import { Box, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import styles from "components/UI/PostCard/postCardStyle";
import { Link } from "react-router-dom";
import clsx from "clsx";
import DropDown from "components/UI/DropDown/DropDown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { requestDeletePost } from "api/api";

const useStyle = makeStyles(styles);

function PostCard(props) {
  const {
    postCardImage,
    postCardTags,
    postCardTitle,
    postCardExcerpt,
    authorProfileImage,
    postCardAuthor,
    type,
    to,
    id,
  } = props;
  const { action } = props;
  const classes = useStyle();

  const history = useHistory();
  const deleteAction = async () => {
    if (window.confirm("Are you sure to delete")) {
      const res = await requestDeletePost(id);
      console.log(res);
      if (res.status === 200) {
        alert("Success");
        history.go(0);
        document.documentElement.scrollTop = 0;
      }
    }
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const EditAction = () => {
    history.push(`/user/profile/${currentUser.id}/edit/${id}`);
    history.go(0);
  };
  const dropDownItems = [
    {
      id: 1,
      icon: <DeleteIcon />,
      text: "Delete",
      action: deleteAction,
    },
    {
      id: 2,
      icon: <EditIcon />,
      text: "Edit",
      action: EditAction,
    },
  ];

  return (
    <Grid
      component="article"
      item
      className={clsx({ [classes.postCard]: true, [classes[type]]: type })}
      container
    >
      <Link to={to} item className={classes.postCardImageLink}>
        <Box
          className={classes.postCardImage}
          style={{
            backgroundImage: "url(" + postCardImage + ")",
          }}
        ></Box>
      </Link>
      <Grid item className={classes.postCardContent}>
        <Link to={to} className={classes.postCardContentLink}>
          <Box component="header" className={classes.postCardHeader}>
            <Box component="span" className={classes.postCardTags}>
              {postCardTags}
            </Box>
            <Box component="h2" className={classes.postCardTitle}>
              {postCardTitle}
            </Box>
          </Box>
          <Box component="section" className={classes.postCardExcerpt}>
            <p>{postCardExcerpt}</p>
          </Box>
        </Link>
        <Box component="footer" className={classes.postCardMeta}>
          <img
            alt=""
            src={authorProfileImage}
            className={classes.authorProfileImage}
          />
          <Box component="span" className={classes.postCardAuthor}>
            {postCardAuthor}
          </Box>
        </Box>
      </Grid>
      {action === "on" ? (
        <div style={{ position: "absolute" }}>
          <DropDown dropDownItems={dropDownItems} />
        </div>
      ) : null}
    </Grid>
  );
}

export default PostCard;

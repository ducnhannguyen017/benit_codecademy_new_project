import { Box, Grid, makeStyles, Switch } from "@material-ui/core";
import React from "react";
import styles from "components/UI/PostCard/postCardStyle";
import { Link } from "react-router-dom";
import clsx from "clsx";
import DropDown from "components/UI/DropDown/DropDown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyle = makeStyles(styles);
const dropDownItems = [
  {
    icon: <DeleteIcon />,
    text: "Delete",
  },
  {
    icon: <EditIcon />,
    text: "Edit",
  },
  {
    icon: (
      <Switch
        defaultChecked
        color="primary"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    ),
    text: "Public",
  },
];
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
  } = props;
  const { action } = props;

  const classes = useStyle();
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

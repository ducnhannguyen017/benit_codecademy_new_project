import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    width: 700,
    height: 300,
    marginBottom: 10,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  hover: {
    cursor: "pointer",
    "&:hover": {
      background: "#fff 50%",
      boxShadow: "0 2px 8px 0 rgb(0 0 0 / 30%)",
      height: "1000px",
    },
  },
  textField: {
    width: "90%",
    margin: "12px auto",
    fontSize: "20px",
    fontWeight: "600",
    display: "flex",
    // margin:"auto",
    "& .MuiSelect": {
      height: "50px",
      background: "rgb(232,232,232)",
    },
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const itemData = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/benit-codecademy-news-app.appspot.com/o/1.png?alt=media&token=02efe23f-fcbf-4076-8711-69b134efc80c",
    title: "Image",
    author: "author",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/benit-codecademy-news-app.appspot.com/o/1.png?alt=media&token=02efe23f-fcbf-4076-8711-69b134efc80c",
    title: "Image",
    author: "author",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/benit-codecademy-news-app.appspot.com/o/1.png?alt=media&token=02efe23f-fcbf-4076-8711-69b134efc80c",
    title: "Image",
    author: "author",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/benit-codecademy-news-app.appspot.com/o/1.png?alt=media&token=02efe23f-fcbf-4076-8711-69b134efc80c",
    title: "Image",
    author: "author",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/benit-codecademy-news-app.appspot.com/o/1.png?alt=media&token=02efe23f-fcbf-4076-8711-69b134efc80c",
    title: "Image",
    author: "author",
  },
];

export default function CustomImageList(props) {
  const classes = useStyles();
  const { imageList } = props;
  const [image, setImage] = useState();

  const handleClickImage = () => {};

  return (
    <>
      <TextField
        id="filled-read-only-input"
        label="Image"
        defaultValue={image}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
        className={classes.textField}
      />
      <div className={classes.root}>
        <ImageList rowHeight={180} className={classes.image}>
          {/* <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">December</ListSubheader>
          </ImageListItem> */}
          {imageList.map((item) => (
            <ImageListItem
              key={item.id}
              className={classes.hover}
              onClick={handleClickImage}
            >
              <img src={item.filename} alt={item.id} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}

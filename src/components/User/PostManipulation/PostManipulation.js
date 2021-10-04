import React, { useState } from "react";
import { makeStyles, MenuItem, TextField, Typography } from "@material-ui/core";
import style from "components/User/PostManipulation/postManipulationStyle";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

const useStyle = makeStyles(style);

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
function CkEditor() {
  const classes = useStyle();
  const [currency, setCurrency] = useState(1);
  const editor = null;

  const onChangeHandle = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <div className={classes.postManipulationWrapper}>
        <Typography className={classes.textField} component="h2">
          Make your post
        </Typography>
        <TextField
          label="Title"
          variant="filled"
          className={classes.textField}
        />
        <TextField
          label="Excerpt"
          variant="filled"
          className={classes.textField}
        />
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={currency}
          onChange={onChangeHandle}
          variant="filled"
          className={classes.textField}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <CKEditor
          onReady={(editor) => {
            editor.ui
              .getEditableElement()
              .parentElement.insertBefore(
                editor.ui.view.toolbar.element,
                editor.ui.getEditableElement()
              );
            // editor = editor;
          }}
          onError={({ willEditorRestart }) => {
            if (willEditorRestart) {
              editor.ui.view.toolbar.element.remove();
            }
          }}
          onChange={(event, editor) => console.log({ event, editor })}
          editor={DecoupledEditor}
          data=""
          // config={ /* the editor configuration */ }
        />
      </div>
    </>
  );
}

export default CkEditor;

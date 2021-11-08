import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { makeStyles, Popover, Typography } from "@material-ui/core";
import style from "components/UI/DropDown/dropDownStyle";

const useStyles = makeStyles(style);
function DropDown(props) {
  const classes = useStyles();
  const { dropDownItems, getId, idPassed } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  console.log(idPassed);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (getId) {
      getId(idPassed);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <MoreHorizIcon
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{ padding: "12px 6px" }}
      >
        {dropDownItems.map((dropDownItem) => (
          <div
            key={dropDownItem.id}
            onClick={dropDownItem.action}
            className={classes.link}
          >
            {dropDownItem.icon === undefined ? null : dropDownItem.icon}
            <Typography className={classes.typography}>
              {dropDownItem.text}
            </Typography>
          </div>
        ))}
      </Popover>
    </>
  );
}

export default DropDown;

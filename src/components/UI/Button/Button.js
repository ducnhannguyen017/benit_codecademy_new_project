import React from "react";
import MuiButton from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import styles from "components/UI/Button/buttonStyle";
import clsx from "clsx";

const useStyle = makeStyles(() => ({
  ...styles,
}));
function Button(props) {
  const { children, size, color, to, border, textColor, ...rest } = props;
  const classes = useStyle();
  const btnClasses = clsx({
    [classes[color]]: color,
    [classes[border]]: border,
    [classes[textColor]]: textColor,
  });

  return (
    <MuiButton
      className={clsx({
        [classes.button]: true,
        [classes.root]: true,
        [classes[size]]: size,
      })}
      {...rest}
    >
      <Link to={to} className={btnClasses}>
        <b>{children}</b>
      </Link>
    </MuiButton>
  );
}

export default Button;

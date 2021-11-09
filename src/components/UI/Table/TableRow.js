import { IconButton, TableCell } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import DropDown from "components/UI/DropDown/DropDown";
import MuiTableRow from "@material-ui/core/TableRow";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
function TableRow(props) {
  const { expand, row, dropDownItems, getId } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <>
      <MuiTableRow className={classes.root}>
        {expand === "on" ? (
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        ) : null}
        {Object.values(row)
          .slice(1)
          .map((element) => (
            <TableCell>{element}</TableCell>
          ))}
        <TableCell>
          <DropDown
            idPassed={row.Id}
            getId={getId}
            dropDownItems={dropDownItems}
          />
        </TableCell>
      </MuiTableRow>
    </>
  );
}

export default TableRow;

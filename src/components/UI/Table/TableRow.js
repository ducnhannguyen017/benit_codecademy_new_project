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
  console.log(row.Id);

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
      {/* <MuiTableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Posts
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <MuiTableRow>
                    <TableCell>Time</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Excerpt</TableCell>
                    <TableCell align="right">Public</TableCell>
                    <TableCell align="right">&nbsp;</TableCell>
                  </MuiTableRow>
                </TableHead>
                <TableBody>
                  {row.Posts.map((postRow) => (
                    <MuiTableRow key={postRow.Time}>
                      <TableCell component="th" scope="row">
                        {postRow.Time}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {postRow.Title}
                      </TableCell>
                      <TableCell>{postRow.Excerpt}</TableCell>
                      <TableCell align="right">
                        {postRow.Public.toString()}
                      </TableCell>
                      <TableCell align="right">
                        <DropDown dropDownItems={dropDownItems} />
                      </TableCell>
                    </MuiTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            <Link to="/admin/posts-list">See more </Link>
          </Collapse>
        </TableCell>
      </MuiTableRow> */}
    </>
  );
}

export default TableRow;

import React from "react";

import MuiTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import MuiTableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TablePagination } from "@material-ui/core";
import TableRow from "components/UI/Table/TableRow";

export default function Table(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { expand, rows, columns, dropDownItems, getId } = props;

  console.log(rows);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <MuiTable aria-label="collapsible table">
          <colgroup>
            {expand === "on" ? <col style={{ width: "1%" }} /> : null}

            {columns.map((column) => (
              <col style={{ width: column.size }} />
            ))}
            <col style={{ width: "1%" }} />
          </colgroup>
          <TableHead>
            <MuiTableRow>
              {expand === "on" ? <TableCell>&nbsp;</TableCell> : null}
              {columns.map((column) => (
                <TableCell>{column.headerName}</TableCell>
              ))}
              <TableCell>&nbsp;</TableCell>
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                // <RowDataGrid key={row.id} row={row} />

                <TableRow
                  // key={row.id}
                  row={row}
                  dropDownItems={dropDownItems}
                  expand={expand}
                  getId={getId}
                />
              ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

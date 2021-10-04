import { Box, Container, Grid, makeStyles, Paper } from "@material-ui/core";
import Table from "components/UI/Table/Table";
import React from "react";
import style from "components/Admin/Content/contentStyle";
import Footer from "components/Admin/Footer/Footer";

const useStyles = makeStyles(style);
function Content(props) {
  const { expand, rows, columns, dropDownItems } = props;
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Table
                rows={rows}
                columns={columns}
                dropDownItems={dropDownItems}
                expand={expand}
              />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Footer />
        </Box>
      </Container>
    </main>
  );
}

export default Content;

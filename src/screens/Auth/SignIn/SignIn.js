import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "components/User/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { postAuth } from "redux/actions/AuthAction";
import { Button, CircularProgress } from "@material-ui/core";
import { authSelector } from "redux/reducers/AuthReducer";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  rememberMe: {
    marginBottom: "24px",
  },
  help: {
    marginTop: "16px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formLogin;

  const handleChangeFormLogin = (e) =>
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });

  const currentUser = localStorage.getItem("currentUser");
  const handleSubmitFormLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(postAuth({ username: username, password: password }));
    } catch (error) {}
  };
  const user = useSelector(authSelector);
  useEffect(() => {
    if (!user.isLoading) {
      if (user.error !== null) {
        alert("Wrong username or password");
      }
    }
    if (currentUser) {
      window.location.href = "/";
    }
  }, [currentUser, user]);

  return (
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmitFormLogin}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              autoComplete="username"
              autoFocus
              onChange={handleChangeFormLogin}
              value={username}
              name="username"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangeFormLogin}
              value={password}
              name="password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              className={classes.rememberMe}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {user.isLoading ? (
                <CircularProgress color="action" />
              ) : (
                <>Sign In</>
              )}
            </Button>
            <Grid container className={classes.help}>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="sign-up">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

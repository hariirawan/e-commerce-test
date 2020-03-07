import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Redirect, useLocation } from "react-router-dom";
import { useStyleLogin } from "./login.style";
import { useDispatch, useSelector } from "react-redux";
import { action_login } from "../../redux/actions/action-login/action-login";

export default function Login(props) {
  const classes = useStyleLogin();
  const dispatch = useDispatch();
  const location = useLocation();
  const store = useSelector(state => state.login);

  const handleLogin = e => {
    e.preventDefault();
    action_login(dispatch);
  };

  if (store.status)
    return <Redirect to={{ pathname: "/", state: { from: location } }} />;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Grid container>
            <Grid item xs>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item xs>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleLogin}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In With Facebook
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In With Google
          </Button>
        </form>
      </div>
    </Container>
  );
}

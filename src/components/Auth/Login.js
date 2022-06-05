import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import authService from "../Auth/service.auth";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useEffect } from "react";




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitAction, setSubmitAction] = React.useState(false);

  /*useEffect(() => {
      if(authService.isLoggedIn()) {
        props.history.push('/my-bookings');
      }
  }, []);*/

  useEffect(() => {
    async function doAuth() {
      if (!submitAction) {
        return;
      }

      try {
        let { data } = await authService.doAuth(email, password);
        console.log(data)

        window.location.reload();
      } catch (ex) {

      } finally {
        setSubmitAction(false);
      }
    }

    doAuth()

  }, [submitAction]);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitAction(true);
  }

  return (
    <div>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>

          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={submitForm}
            >
              SIGN IN
            </Button>
            <Grid container justify="flex-start">
              <Grid item>
                <Link to="signup" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

      </Container>
    </div>
  );
}
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom';
import './styles.css';


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();


  const schema = yup.object().shape({
    email: yup.string().required("This field is required"),
    password: yup.string().required("This field is required").min(8, "Password must be atleast 8 character"),

  })

  const formik = useFormik(
    {
      initialValues: {
        email: "",
        password: ""
      },
      validationSchema: schema,
      onSubmit: (data) => {
        console.log(data)
      }
    }
  )



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            values={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(formik.touched.email && formik.errors.email) ? true : false}
            helperText={(formik.touched.email && formik.errors.email)? formik.errors.email : ""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            values={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={(formik.touched.password && formik.errors.password) ? true : false}
            label="Password"
            type="password"
            id="password"
            helperText={(formik.touched.password && formik.errors.password)? formik.errors.password : ""}
          />
          <Grid container>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            </Grid>
            
            <Grid item xs={12} sm={6}>
            <Link to="/forgotpass" variant="body2" >
              Forgot password?
              </Link>

          </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

          <Link to='/Signup'><h4>Don't have account? SignUp</h4></Link>
        </form>
      </div>

    </Container >
  );
}
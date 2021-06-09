import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useHistory } from 'react-router-dom'
// import {useToasts} from 'react-toast-notifications';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border:'5px',
        backgroundColor:'',
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

export default function SignUp() {
    const classes = useStyles();
    // const {addToast} = useToasts();
    const history=useHistory();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schema = yup.object().shape({
        username: yup.string().required("This field is required"),
        password: yup.string().required("This field is required").min(6, "Password must be atleast 6 character"),
        email: yup.string().required("This field is required").email("Invalid Email address"),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
    })


    const formik = useFormik(
        {
            initialValues: {
                username:"",
                password:"",
                email: "",
                phone: "",
            },
            validationSchema: schema,
            onSubmit: (data) => {
                axios.post('http://127.0.0.1:8000/users/adduser/',data).then((res)=>{
                    console.log(res.data)
                    if(res.data.status==1){
                        console.log("registred succcessfully")
                        history.push('/signin')
                        // addToast("Registred succcessfully")
                    }
                    else{
                        console.log("fail to registered")
                    }
                }).catch((error)=>{
                    console.log(error);
                    console.log("Something went wrong");
                })
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
                    Sign up
          </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                    
                            <TextField
                                variant="outlined"
                                helperText={(formik.touched.firstName && formik.errors.firstName)? formik.errors.firstName : ""}
                                fullWidth
                                id="username"
                                name="username"
                                label="Username"
                                values={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={(formik.touched.firstName && formik.errors.firstName) ? true : false}
        
                                
                            />
                        <br /><br />
                        <TextField
                                variant="outlined"
                                helperText={(formik.touched.password && formik.errors.password) ? formik.errors.password : ""}
                                fullWidth
                                name="password"
                                values={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                label="Password"
                                id="password"
                                error={(formik.touched.password && formik.errors.password) ? true : false}
                               
                            />
                        <br /><br />
                            <TextField
                                variant="outlined"
                                helperText={(formik.touched.email && formik.errors.email)? formik.errors.email : ""}
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                values={formik.values.email}
                                onChange={formik.handleChange}
                                error={(formik.touched.email && formik.errors.email) ? true : false}
                                onBlur={formik.handleBlur}
                                
                            />
                        <br /><br />
                        <TextField
                                variant="outlined"
                                helperText={(formik.touched.email && formik.errors.email)? formik.errors.email : ""}
                                fullWidth
                                id="phone"
                                label="Phone Number"
                                name="phone"
                                values={formik.values.phone}
                                onChange={formik.handleChange}
                                error={(formik.touched.email && formik.errors.phone) ? true : false}
                                onBlur={formik.handleBlur}
                                
                            />
                        <br /><br />
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
             </Button>

                    <Link to='/Signin'><h4>Already Registered? Signin here</h4></Link>
                </form>
            </div>

        </Container>
    );
}
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, lighten } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import '../pages/styles.css'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { useFormik } from 'formik'
import * as yup from 'yup';
import axios from 'axios';


const drawerWidth = 240;
const icons = [
    <HomeIcon />,
    <AccountCircleIcon />,
    <AddBoxIcon />,
]

const routes = ['/admin/dashboard', '/admin/dashboard/about', '/admin/dashboard/newdeals'];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        marginLeft: 240,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: - drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function NewDeals({ history }) {
    
    const category=["Fashion(men)","Mobile & Tablets","Groceries","Books","Fashion(women)"];

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };




    const [age, setAge] = React.useState('');
    


    const handleChange = (event) => {
        setAge(event.target.value);
    };


    const schema = yup.object().shape({
        dealName: yup.string().required("This field is required"),
        category: yup.string().required("This field is required"),
        discountPrice: yup.string().required("This field is required"),
        originalPrice: yup.string().required("This field is required"),
    })


      const formik = useFormik(
        {
            initialValues: {
                deal_name:"",
                category:"",
                product_name: "",
                original_price:"",
                discount: "",
                discount_price:"",
                
            },
            validationSchema: schema,
            onSubmit: (data) => {
                console.log(data)
                axios.post("http://127.0.0.1:8000/admin/addDeal",data).then((res)=>{
                    console.log(res.data)
                    if(res.status==1){
                        console.log(" Deal added Successfully")
                    }
                }).catch((error)=>{
                    console.log("Something went wrong")
                })

            }
        }
    )

    

    return (
         console.log(formik),
        <div className={classes.root}>
            <Router>
                <CssBaseline />

                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                    style={{ backgroundColor: '#107AE0' }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Admin Dashboard
          </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key={0} onClick={() => history.push(routes[0])}>
                            <ListItemIcon>{icons[0]}</ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                        <ListItem button key={1} onClick={() => history.push(routes[1])}>
                            <ListItemIcon>{icons[1]}</ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItem>
                        <ListItem button key={2} onClick={() => history.push(routes[2])}>
                            <ListItemIcon>{icons[2]}</ListItemIcon>
                            <ListItemText primary={"New Deals"} />
                        </ListItem>



                    </List>
                    <Divider />

                </Drawer>
            </Router>
            <main className={classes.content}>
                <Toolbar />
                <Typography paragraph>
                    <div className='outer-div'>
                        <div className="parent-div">
                            <div style={{ backgroundColor: '#107AE0', fontWeight: 'bold', boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.5), 0 4px 20px 0 rgba(0, 0, 0, 0.19)', color: 'white', textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue', height: '50px', paddingTop: '11px', paddingBottom: '2px', paddingLeft: '9px' }}>

                                Add New Hot Deals
                    </div>
                            <div className="div-content">
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item sm={6}>
                                            <TextField
                                                id="outlined-basic"
                                                label="Deal Name"
                                                style={{ width: 500 ,backgroundColor: 'white'}}
                                                name="deal_name"
                                                values={formik.values.deal_name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={(formik.touched.deal_name && formik.errors.deal_name) ? true : false}
                                                helperText={(formik.touched.deal_name && formik.errors.deal_name)? formik.errors.deal_name : ""}
                                                variant="outlined"></TextField>
                                        </Grid>

                                        <Grid item sm={6}>
                                          
                                                 <FormControl
                                                variant="outlined"
                                                className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    // value={age}
                                                    onChange={handleChange}
                                                    label="Category"
                                                    name="category"
                                                    style={{ width: 500, backgroundColor: 'white' }}
                                                >
                                                 {
                                                   category.length>0 ?  category.map((ele,index)=><MenuItem value={ele} key={index}>{ele}</MenuItem> ) : <MenuItem value=""><em>None</em></MenuItem>
                                                   
                                                 }
                                                    {/*  */}
                                                    
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid><br></br>


                                    <Grid container spacing={3}>
                                        <Grid item sm={6}>
                                            <TextField
                                                id="outlined-basic"
                                                label="Product name"
                                                style={{ width: 500,backgroundColor: 'white'}}
                                                name="product_name"
                                                values={formik.values.product_name}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={(formik.touched.category && formik.errors.product_name) ? true : false}
                                                helperText={(formik.touched.product_namee && formik.errors.product_name)? formik.errors.product_name: ""}
                                                variant="outlined"></TextField>
                                        </Grid>

                                        <Grid item sm={6}>
                                       
                                                 <TextField
                                                id="outlined-basic"
                                                label="Original Price"
                                                style={{ width: 500,backgroundColor: 'white' }}
                                                name="original_price"
                                                values={formik.values.original_price}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={(formik.touched.original_price && formik.errors.original_price) ? true : false}
                                                helperText={(formik.touched.original_price && formik.errors.original_price)? formik.errors.original_price : ""}
                                                variant="outlined"></TextField>
                                        </Grid>
                                    </Grid><br></br>


                                    <Grid container spacing={3}>
                                        <Grid item sm={6}>
                                        <TextField
                                                id="outlined-basic"
                                                label="Discount"
                                                style={{ width: 500,backgroundColor: 'white'}}
                                                name="discount"
                                                values={formik.values.discount}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={(formik.touched.category && formik.errors.discount) ? true : false}
                                                helperText={(formik.touched.discount && formik.errors.discount)? formik.errors.discount: ""}
                                                variant="outlined"></TextField>
                                        </Grid>
                                        <Grid item sm={6}>
                                        <TextField
                                                id="outlined-basic"
                                                label="Discount Price"
                                                style={{ width: 500,backgroundColor: 'white'}}
                                                name="discount_price"
                                                values={formik.values.discount_price}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={(formik.touched.discount_price && formik.errors.discount_price) ? true : false}
                                                helperText={(formik.touched.discount_price && formik.errors.discount_price)? formik.errors.discount_price: ""}
                                                variant="outlined"></TextField>
                                        </Grid>


                                    </Grid><br></br><br></br>

                                    <Button variant="contained" id="button" style={{ backgroundColor: '#10E194', width: 250 }} disableElevation type="submit">Save</Button>


                                </form>
                            </div>
                        </div>
                    </div>

                </Typography>

            </main>
        </div>

    );
}

export default withRouter(NewDeals);
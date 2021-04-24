// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme, lighten } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import HomeIcon from '@material-ui/icons/Home';
// import AddBoxIcon from '@material-ui/icons/AddBox';
// import { BrowserRouter as Router, withRouter } from "react-router-dom";
// import BorderColorIcon from '@material-ui/icons/BorderColor';
// import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid'
// import Button from '@material-ui/core/Button';
// import '../pages/styles.css'



// const drawerWidth = 240;
// const icons = [
//     <HomeIcon />,
//     <AddBoxIcon />,
//     <BorderColorIcon />
// ]

// const routes = ['/admin/dashboard', '/admin/dashboard/addcustomer', '/admin/dashboard/newdeals'];

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     link: {
//         textDecoration: 'none',
//         color: theme.palette.text.primary
//     },
//     appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     hide: {
//         display: 'none',
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: theme.spacing(0, 1),
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-end',
//     },
//     content: {
//         flexGrow: 1,
//         marginLeft: 240,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: - drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create('margin', {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     },
// }));

// function AddCustomer({ history }) {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(true);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     return (

//         <div className={classes.root}>
//             <Router>
//                 <CssBaseline />

//                 <AppBar
//                     position="fixed"
//                     className={clsx(classes.appBar, {
//                         [classes.appBarShift]: open,
//                     })}
//                     style={{ backgroundColor: '#107AE0' }}
//                 >
//                     <Toolbar>
//                         <IconButton
//                             color="inherit"
//                             aria-label="open drawer"
//                             onClick={handleDrawerOpen}
//                             edge="start"
//                             className={clsx(classes.menuButton, open && classes.hide)}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" noWrap>
//                             Admin Dashboard
//           </Typography>
//                     </Toolbar>
//                 </AppBar>
//                 <Drawer
//                     className={classes.drawer}
//                     variant="persistent"
//                     anchor="left"
//                     open={open}
//                     classes={{
//                         paper: classes.drawerPaper,
//                     }}
                    
//                 >
//                     <div className={classes.drawerHeader}>
//                         <IconButton onClick={handleDrawerClose}>
//                             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                         </IconButton>
//                     </div>
//                     <Divider />
//                     <List>
//                         <ListItem button key={0} onClick={() => history.push(routes[0])}>
//                             <ListItemIcon>{icons[0]}</ListItemIcon>
//                             <ListItemText primary={"Home"} />
//                         </ListItem>
//                         <ListItem button key={1} onClick={() => history.push(routes[1])}>
//                             <ListItemIcon>{icons[1]}</ListItemIcon>
//                             <ListItemText primary={"Add Customer"} />
//                         </ListItem>
//                         <ListItem button key={2} onClick={() => history.push(routes[2])}>
//                             <ListItemIcon>{icons[2]}</ListItemIcon>
//                             <ListItemText primary={"New Deals"} />
//                         </ListItem>



//                     </List>
//                     <Divider />

//                 </Drawer>
//             </Router>
//             <main className={classes.content}>
//                 <Toolbar />
//                 <Typography paragraph>
//                     <div className='outer-div'>
//                     <div className="parent-div">
//                         <div style={{ backgroundColor: '#107AE0', fontWeight: 'bold', boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.5), 0 4px 20px 0 rgba(0, 0, 0, 0.19)', color: 'white', textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue', height: '50px', paddingTop: '11px', paddingBottom: '2px', paddingLeft: '9px' }}>

//                             Add Details of New Customer
//                     </div>
//                         <div className="div-content">
//                             <form>
//                                 <Grid container spacing={3}>
//                                     <Grid item sm={6}>
//                                         <TextField id="outlined-basic" label="" style={{ width: 500 }} variant="outlined"></TextField>
//                                     </Grid>
//                                     <Grid item sm={6}>
//                                         <TextField id="outlined-basic" label="" style={{ width: 500 }} variant="outlined"></TextField>
//                                     </Grid>
//                                 </Grid><br></br>

//                                 <Grid container spacing={3}>
//                                     <Grid item sm={6}>
//                                         <TextField id="outlined-basic" label="" style={{ width: 500 }} variant="outlined"></TextField>
//                                     </Grid>
//                                     <Grid item sm={6}>
//                                         <TextField id="outlined-basic" label="" style={{ width: 500 }} variant="outlined"></TextField>
//                                     </Grid>
//                                 </Grid><br></br>

//                                 <Grid container spacing={3}>
//                                     <Grid item sm={6}>
//                                         <TextField id="outlined-basic" label="" style={{ width: 500 }} variant="outlined"></TextField>
//                                     </Grid>

//                                 </Grid><br></br><br></br>
//                                 <Button variant="contained" id="button" style={{backgroundColor:'#10E194'}} disableElevation type="submit">Submit</Button>


//                             </form>
//                         </div>
//                     </div>
//                     </div>
//                 </Typography>

//             </main>
//         </div>

//     );
// }

// export default withRouter(AddCustomer);
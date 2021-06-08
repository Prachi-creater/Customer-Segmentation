import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Chart from "react-apexcharts";
import '../pages/styles.css'


const drawerWidth = 240;
const icons = [
    <HomeIcon />,
    <AccountCircleIcon />,
    <AddBoxIcon />,



]

const routes = ['/admin/dashboard', '/admin/dashboard/about', '/admin/dashboard/newdeals','/admin/dashboard/personinfo'];

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
        padding: theme.spacing(0
            , 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

 export default function Dashboard({ history }) {

 

   

    
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (


        <div className={classes.root}>
            <Router>
                <CssBaseline />

                <AppBar
                    position="fixed"
                    className="appbar"
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
                        <div className='item-1'>
                            <Typography variant="h6" noWrap>
                                Admin Dashboard
                        </Typography>
                        </div>

                        <div className='item-2'>

                            <IconButton>
                                <Avatar src="/broken-image.jpg" />

                            </IconButton>
                        </div>

                        <div className='item-3'>
                            <Button color="inherit">Logout</Button>
                        </div>


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
                    <div>
                        <div className='chart-div'>
                        
                        <ApexChart></ApexChart>
                        </div> <br></br>
                        <br></br>


                        <div className="homepage-container">
                            <div onClick={()=>history.push('/admin/dashboard/personinfo')} style={{ backgroundColor: '#2196f3', width: '150px', height: '150px', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>age group above 60</div>
                            <div onClick={()=>history.push('/admin/dashboard/personinfo')} style={{ backgroundColor: '#2196f3', width: '150px', height: '150px', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>age group from 40-60</div>
                            <div onClick={()=>history.push('/admin/dashboard/personinfo')} style={{ backgroundColor: '#2196f3', width: '150px', height: '150px', marginBottom: 20 }}>age group from 20-40</div>
                        </div>
                    </div>
                </Typography>

            </main>
        </div>


    );
}

// export default withRouter(Dashboard);

function ApexChart() {
    const initialState = {
      series: [
        {
          name: "",
          data: [],
        },
        {
          name: "",
          data: [],
        },
        {
          name: "",
          data: [],
        },
      ],
      options: {
        chart: {
          id: "Customer Segmenation Scatter Plot",
          height: 350,
          type: "scatter",
          zoom: {
            enabled: true,
            type: "xy",
          },
        },
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1);
            },
          },
        },
        yaxis: {
          tickAmount: 7,
        },
      },
  
     
  }
  
  const [state, setstate] = useState(initialState);
  
  useEffect(() => {
      //make axios request and setstate data coming from api
  
      
  }, [])
  
  return (
    <div id="chart">
      <Chart
        options={state.options}
        series={state.series}
        type="scatter"
        height={350}
        width={800}
      />
    </div>
  );
  }
  
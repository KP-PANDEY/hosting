import React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import * as authAction from '../../action/action/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Hidden, ListItemIcon, Card, Grid, Avatar, Tooltip } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItemText from '@material-ui/core/ListItemText'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Logo from '../../menu.jpeg';
import AdminLogo from '../../Admin.jpg'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Popover from '@material-ui/core/Popover';
import UpdateIcon from '@material-ui/icons/Update';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';

const drawerWidth =240;
var placed=1;
var approved=1;
let details= JSON.parse(localStorage.getItem("details"))
var drive=details.Notifications
const Example = () => <Avatar style={{ width: 130, height: 130, marginLeft:30}} src={details.image} />



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    flex:1
  },
  appBar: {
    backgroundColor:"#64b5f6",
     
  },

  media: {
    height: 140,
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
    marginTop:64,
    // backgroundColor:"#000000"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft:60,
    
  },
  notif:{
   // flexShrink: 0,
   // display: 'flex',
    alignItems: 'center',
    width: theme.spacing(40),
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(15),
        },
    height: "auto",
    overflow:1,
    //background:"#212121"
    // [theme.breakpoints.down('sm')]: {
    //   width: 130,
    // },
    // padding: theme.spacing(0, 1),
    // //...theme.mixins.toolbar,
    // justifyContent: 'flex-end',
    // //marginLeft:800,
    // //height:400,
    // [theme.breakpoints.down('sm')]: {
    //   height: 170,
    // },
    //position:"absolute",

  },
  
  button: {
    backgroundColor: "",
    
    '&:focus': {
        backgroundColor: "#757575",
        
    }

}
 
 

 
}));

function MiniDrawer(props) {
  const classes = useStyles();
  const [] = React.useState();
  const [open, setOpen] = React.useState(true);
 // const notify=React.useState(false);
  const pathname= props.location.pathname
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open2 = Boolean(anchorEl);
  const id = open2 ? 'simple-popover' : undefined;

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handlechange = () => {

    props.history.push("/EditUser")
  }
  
  const handlechange1=()=>{
  
    props.history.push('/UpcomingDrive')
   
  }
  const handlechange2 = () => {

    props.history.push('/PDF')
    //window.location.href="/Drive";
    // count=true;
    // localStorage.setItem("count",count);

  }
 
  const home=()=>{
    props.history.push("/")
   
    
  }

  const LOGOUT=()=>{
    alert("LOGGING YOU OUT")
    props.action.auth.Logout()
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    props.history.push("/")

  };
  
 
  console.log(pathname)

 
  return (
    
    <Grid  >
    <AppBar
      position="fixed"
      style={{backgroundColor:"#202020",color:"white"}}
      // className={clsx(classes.appBar, {
      //   [classes.appBarShift]: open,
      // })}
    >
        <Toolbar>
         
          <Hidden lgUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}>
          <MenuIcon />
        </IconButton>
        </Hidden>
        <Typography  variant="h6" className={classes.title}>
           WELCOME
        </Typography >
          
          <IconButton style={{color:"white"}}>
            <Tooltip title="HOME">
                <AccountBalanceIcon  onClick={home} />
            </Tooltip>
            </IconButton>
            <IconButton style={{color:"white"}}>
              
              <Badge badgeContent={(details.Notifications)? drive+placed+approved:placed+approved} color="secondary" >
              <Tooltip title="NOTIFICATION">
                <NotificationsIcon onClick={handleClick} />
                </Tooltip>
                  <Popover
                    id={id}
                    open={open2}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                   
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    >
                      
                      <Grid  className={classes.notif}>
                        <Grid container
                        direction="column"
                        justify="flex-start"
                        alignItems="stretch"
                        >
                        <Button onClick={()=>{
                          if(approved)
                              approved--
                        }}>
                          {(details.Approve)?"CONGRATULATIONS YOU HAVE BEEN APPROVED BY ADMIN" :"OPPS.. YOUR APPROVAL IS PENDING"}
                        </Button>
                        </Grid>
                        <Divider/>
                        <Grid container
                        direction="column"
                        justify="flex-start"
                        alignItems="stretch"
                       >
                        <Button onClick={()=>{
                          if(placed)
                          placed--
                        }}>
                          {(details.Placed)?"CONGRATULATIONS YOU HAVE BEEN PLACED ":"OPPS.. YET TO BE PLACED"}
                        </Button>
                        </Grid>
                        <Divider/>
                        {/* {(drive)? */}
                        <Grid container
                        direction="column"
                        justify="flex-start"
                        alignItems="stretch"
                      >
                        <Tooltip title="VIEW DRIVE">
                        <Button onClick={()=>{
                          props.history.push("/UpcomingDrive")
                          drive=0
                        }}>
                          {drive}  NEW  DRIVE HAS BEEN ADDED &nbsp;
                        
              
                         </Button>
                         </Tooltip>
                        </Grid>

                      </Grid>
                </Popover>
              </Badge>
              
            </IconButton>
            &nbsp;&nbsp;
           
           <Button style={{color:"white"}} onClick={LOGOUT}>
            LOGOUT
            <Tooltip title="LOGOUT">
            <ExitToAppIcon />
            </Tooltip>
            </Button>
           
      
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
        <Hidden lgUp>
        <Grid className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
             <ChevronLeftIcon /> 
          </IconButton>
        </Grid>
        </Hidden>
        <Divider />
        <Card >
      <CardActionArea  >
        <CardMedia
          className={classes.media}
          image={Logo}
        >
       <Example/> 
      {/* <Avatar className={classes.large} src={details.image}></Avatar> */}
      
        
          
        </CardMedia>
       
        <CardContent>
         <Typography  variant="h6"  >
            {props.name}
          </Typography> 
        </CardContent>
      </CardActionArea>
    
    </Card>
      
        <List  style={{color:"212121"}}  >
      <ListItem  className={classes.button} button    selected={'/Admin' === pathname} onClick={home}>
        <ListItemIcon> <AccountBalanceIcon style={{color:"red"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>HOME</Typography>}></ListItemText>
     </ListItem>
     <ListItem  className={classes.button} button     onClick={handlechange} selected={'/View' === pathname}>
        <ListItemIcon> <UpdateIcon style={{color:"green"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>EDIT/UPDATE</Typography>}></ListItemText>
     </ListItem>
     <ListItem  className={classes.button} button   onClick={handlechange1} selected={'/Placement' === pathname}>
        <ListItemIcon> <ListAltOutlinedIcon style={{color:"green"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>DRIVE DETAILS</Typography>}></ListItemText>
        {/* <Badge badgeContent={(details.Notifications)? drive:null} color="secondary" ></Badge> */}
     </ListItem>
     <ListItem  className={classes.button} button   onClick={handlechange2} selected={'/Drive' === pathname}>
        <ListItemIcon>  <SystemUpdateAltIcon style={{color:"green"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>DOWNLOAD RESUME</Typography>}></ListItemText>
     </ListItem>
  
    
     <Divider />
     
    </List>
    </Drawer>
    
  
    </Grid>
    



  );
}




const mapStateToProps = (state) => {
  debugger
  const token = state.Token;
  const role = state.Role;
  const name = state.Name;
  
  return {
    token: token,
    role: role,
    name: name,
    
  }
}

const mapDispatchToProps = dispatch => ({
  action:
  {
    auth: bindActionCreators(authAction, dispatch)
  }

})
export default
  connect(mapStateToProps, mapDispatchToProps)(
    withRouter(MiniDrawer))
//export default withRouter(MiniDrawer)
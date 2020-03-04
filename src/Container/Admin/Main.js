import React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Button from '@material-ui/core/Button';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import * as authAction from '../../action/action/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Hidden, ListItemIcon, Card, Grid, Avatar } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ListItemText from '@material-ui/core/ListItemText'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import Logo from '../../menu.jpeg';
import AdminLogo from '../../Admin.jpg'
import { Tooltip } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Popover from '@material-ui/core/Popover';



const drawerWidth =240;




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

    props.history.push("/View")
  }
  
  const handlechange1=()=>{
  
    props.history.push("/Place")
   
  }
  const handlechange2 = () => {

    props.history.push("/Drive")
    //window.location.href="/Drive";
    // count=true;
    // localStorage.setItem("count",count);

  }
  const handlechange3 = () => {
    //  window.location.href="/Approve";
    props.history.push("/Approve")


  }
  const handlechange4=()=>{
  
   // window.location.href="/EditDrive"
    props.history.push("/EditDrive")
   
    
  }

  const handlechange5=()=>{
  
    //window.location.href="/Company"
    props.history.push("/Company")
   
    
  }
  const home=()=>{
    props.history.push("/Admin")
   
    
  }

  const LOGOUT=()=>{
    alert("LOGGING YOU OUT")
    props.action.auth.Logout()
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    props.history.push("/")

  };

  
  console.log(pathname)
 // props.action.auth.ShowPending()
  // var pending=JSON.parse(localStorage.getItem("Pending"))
  // var notif=pending.length
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
          <Tooltip title="HOME PAGE">
          <IconButton style={{color:"white"}}>
                <AccountBalanceIcon  onClick={home} />
            </IconButton>
            </Tooltip>
            <IconButton style={{color:"white"}}>
              {/* <Badge badgeContent={1} color="secondary" > */}
                <Tooltip title="NOTIFICATIONS">
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
                         <Tooltip title="APPROVE NOW">
                        <Button onClick={()=>{
                           // notif=0
                            props.history.push("/Approve")
                          
                        }}>
                          NEW APPROVALS ARE STILL PENDING &nbsp;
                        
              
                         </Button>
                         </Tooltip>
                        </Grid>
                        <Divider/>
                       
                        </Grid>
                         
        
      </Popover>
             
            </IconButton>
            &nbsp;&nbsp;
           <Tooltip title="GOOD BYE :)">
           <Button style={{color:"white"}} onClick={LOGOUT}>
            LOGOUT
            <ExitToAppIcon />
            </Button>
            </Tooltip>
           
      
            </Toolbar>
           
            </AppBar>
            <BottomNavigation style={{background:"#212121"}} className={classes.root}>
            <BottomNavigationAction >WELCOME</BottomNavigationAction> 
            <BottomNavigationAction>welcome</BottomNavigationAction>
            </BottomNavigation>
      
     
    
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
       
        <Avatar className={classes.large} src={AdminLogo}></Avatar>
      
        
          
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
        <ListItemIcon> <AssignmentIndIcon style={{color:"#212121"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>Student details</Typography>}></ListItemText>
     </ListItem>
     <ListItem  className={classes.button} button   onClick={handlechange1} selected={'/Placement' === pathname}>
        <ListItemIcon> <EmojiPeopleIcon style={{color:"black"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>Placed student</Typography>}></ListItemText>
     </ListItem>
     <ListItem  className={classes.button} button   onClick={handlechange2} selected={'/Drive' === pathname}>
        <ListItemIcon>  <LibraryBooksIcon style={{color:"black"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>Add Drive details</Typography>}></ListItemText>
     </ListItem>
     <ListItem  className={classes.button}  button   onClick={handlechange3} selected={'/Approved' === pathname}>
        <ListItemIcon>   <AssignmentTurnedInIcon style={{color:"black"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>Approve Students </Typography>}></ListItemText>
     </ListItem>
     <ListItem  className={classes.button} button   onClick={handlechange4} selected={'/viewDRIVE' === pathname}>
        <ListItemIcon>   <VisibilityIcon style={{color:"#212121"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>View Drive Details</Typography>}></ListItemText>
     </ListItem>
     <ListItem   className={classes.button} button   onClick={handlechange5} selected={'/Company' === pathname}>
        <ListItemIcon>   <BusinessOutlinedIcon style={{color:"black"}} /></ListItemIcon>
        <ListItemText primary={<Typography variant="button" display="block" style={{ color: '#212121' }}>Company Details</Typography>}></ListItemText>
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
    name: name
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
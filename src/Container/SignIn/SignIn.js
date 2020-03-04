import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import * as authAction from '../../action/action/action'
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SignInLogo from '../../SignIn.jpeg'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';



const styles = theme => ({
    // root: {
    //     display: 'flex',
    //     alignItems: 'center',
    //   },
    media: {
        height:"100vh",
        paddingTop: '56.25%', // 16:9,
        marginTop: 0
    }
    ,
    content: {
        height: "100vh",
        overflow: "auto"
        //paddingTop: '56.25%', // 16:9,
        //marginTop:'30'
    },
    
    // wrapper: {
    //     margin: theme.spacing(1),
    //     position: 'relative',
    //   },
    // buttonSuccess: {
    //     backgroundColor: green[500],
    //     '&:hover': {
    //       backgroundColor: green[700],
    //     },
    //   },
   
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        // top: '50%',
        // left: '50%',
        // marginTop: -12,
        marginLeft: 12,
      }

})



class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            EmailAddress: '',
            Password: '',
            set: true,
        };
        this.validator = new SimpleReactValidator();
    }

    MyChangeHandler = (event) => {
        //this.myshow(event
        event.preventDefault();
        console.log(event.target.name)
        console.log("value", event.target.value)

        this.setState({ [event.target.name]: event.target.value })
      //this.props.history.push("/Notification")
    }

    MySubmitHandler = (event) => {
        event.preventDefault();
        console.log("submitt")
        if (this.validator.allValid()) {
                      
            console.log(this.state)
            debugger
            this.props.action.auth.Login(this.state)
                .then(() => {
                    debugger
                    const token = localStorage.getItem("token");
                    //const token = this.props.token
                    if (token) {
                        const role = localStorage.getItem("role");
                        const name = localStorage.getItem("name");
                        // {<CircularProgress size={340} className={classes.buttonProgress} />}
                        alert("WELCOME " + name + " YOU ARE " + role)

                    }
                    else {
                        alert("unauthoriswd");
                    }
                })
        }
        else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

  
    handleClick = (event) => {
        event.preventDefault();
        console.log("calling")
        this.props.history.push("/SignUp")
    }


    render() {

       
 
        const { classes } = this.props
        return (
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item sm={0} md={6} >
                    <Card >
                        <CardActionArea  >
                            <CardMedia
                                className={classes.media}
                                image={SignInLogo}
                            >
                            </CardMedia>
                        </CardActionArea>
                    </Card>
                </Grid>
               

                <Grid item xs={12} sm={12} md={6}>
                    <Grid container
                        className={classes.content}
                        direction="column"
                        justify="center"
                        alignItems="center">

                       
                        <form  >
                            <Typography variant="h4" className="text-center">
                                SIGN IN
                             </Typography>
                            <hr></hr>

                            <TextField
                                style={{ padding: 10, width: 363 }}
                                label="EMAIL ADDRESS"
                                type="text"
                                name="EmailAddress"
                                placeholder="EMAIL ADDRESS"
                                variant="outlined"

                                onChange={this.MyChangeHandler}
                                onBlur={() => this.validator.showMessageFor('EmailAddress')} >
                            </TextField>

                            {this.validator.message('EmailAddress', this.state.EmailAddress, 'required|email')}
                            <br></br>

                            <TextField
                                style={{ padding: 10, width: 363 }}
                                label="PASSWORD"
                                type="password"
                                name="Password"
                                placeholder="EMAIL PASSWORD"
                                variant="outlined"
                                required
                                onChange={this.MyChangeHandler}
                                onBlur={() => this.validator.showMessageFor('Password')} >
                            </TextField>
                            {this.validator.message('Password', this.state.Password, 'required')}
                            <br></br>
                           
                            <Button style={{ height: 50, background: '#424242' }} variant="contained" type="submit" className="btn btn-primary btn-block" onClick={this.MySubmitHandler}>  Sign In&nbsp;&nbsp; <LockOpenIcon /> </Button>
                            <p className="forgot-password text-right">
                                <br></br>
                                <Typography variant="h6" className="forgot-password text-right">
                                    New User? <a href="" onClick={this.handleClick}>Sign Up --></a>
                                </Typography>

                            </p>
                        </form>
                    </Grid>
                </Grid>
            </Grid>

        );
    }
}

const mapStateToProps = (state) => {
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


export default connect(mapStateToProps, mapDispatchToProps)(compose(
    withRouter,
    withStyles(styles)
)(SignIn))

import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authAction from '../../action/action/action'
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SignInLogo from '../../SignIn.jpeg'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';


const axios = require('axios').default;


const styles = theme => ({

  media: {
    height: "100vh"
    // paddingTop: '56.25%', // 16:9,

  }
  ,
  content: {
    height: "100vh",
    overflow: "auto",
    

  }

})

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Email: "",
      Branch: "",
      RollNo: "",
      Year: "",
      MobileNumber: "",
      Gender: "",
      Address: "",
      Age: "",
      FatherName: "",
      MotherName: "",
      DOB: "",
      SSC: "",
      HSC: "",
      Btech: "",
      Backlogs: "",
      SchoolSSC: "",
      SchoolHHC: "",
      Password: "",
      image:"",
    };
    this.validator = new SimpleReactValidator();

  }
  myChangeHandler = (event) => {
    //this.myshow(event
    console.log(event.target.name)
    console.log("value", event.target.value)

    this.setState({ set: false, [event.target.name]: event.target.value })
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        console.log("image code", event.target.files[0].size)
        if (event.target.files[0].size > 5000) {
            alert("image size is not acceptable ***Less then 6kb")
            event.target.value=''

        }
        else {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({ image: e.target.result });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
      }
    

}

  MySubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitt")
    if (this.validator.allValid()) {
      console.log(this.state)
      this.props.action.auth.Register(this.state)
        .then((response) => {
          debugger
          alert(this.props.msg);
          this.props.history.push("/")
        }).catch((e) => {
          alert(e);
        })
    }
    //export default apical
    else {
      console.log("else")
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log("calling")
    debugger
    this.props.history.push("/")
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
            direction="row"
            justify="center"
            alignItems="center">

            <form >
                    
                <Typography variant="h4" className="text-center">
                SIGN UP
               </Typography>
               <hr></hr>
               <Avatar  style={{ height: 100, width: 100 }} src={this.state.image} />
                            <TextField
                                style={{ padding: 10, width: 363 ,}}
                                type="file"
                                variant="outlined"
                                onChange={this.onImageChange}
                            />

                            <br />

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="Enter Name"
                  type="text"
                  variant="outlined"
                  name="Name"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("Name")}
                />
                {this.validator.message("Name", this.state.Name, "required")}
                <br></br>
                <TextField
                  style={{ padding: 10, width: 363 }}
                  // id="outlined-password-input"
                  name="FatherName"
                  label="Father Name"
                  type="text"
                  variant="outlined"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("FatherName")}
                />
                {this.validator.message(
                  "Name",
                  this.state.FatherName,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="Mother Name"
                  type="text"
                  variant="outlined"
                  name="MotherName"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("MotherName")}
                />
                {this.validator.message(
                  "MotherName",
                  this.state.MotherName,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="Mobile Number"
                  type="tel"
                  variant="outlined"
                  name="MobileNumber"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("MobileNumber")}
                />
                {this.validator.message(
                  "Mobile Number",
                  this.state.MobileNumber,
                  "required"
                )}
                <br></br>

                <TextField
                 
                 style={{ padding: 10, width: 363 }}
                  onChange={this.myChangeHandler}
                  select
                  label="Year Of Addmission"
                  onBlur={() => this.validator.showMessageFor("Year")}
                  SelectProps={{
                    native: true
                  }}
                  name="Year"
                  variant="outlined"
                >
                  <option></option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                </TextField>
                 
                {this.validator.message(
                  "Year",
                  this.state.Year,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-select-currency-native"
                  onChange={this.myChangeHandler}
                  select
                  label="Branch"
                  onBlur={() => this.validator.showMessageFor("Branch")}
                  SelectProps={{
                    native: true
                  }}
                  name="Branch"
                  variant="outlined"
                >
                  <option></option>
                  <option value="CSE">CSE</option>
                  <option value="ME">ME</option>
                  <option value="CE">CE</option>
                  <option value="EE">EE</option>
                  <option value="ECE">EC</option>
                  <option value="AE">AE</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                 
                </TextField>
                {this.validator.message(
                  "Branch",
                  this.state.Branch,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="date"
                  label="DOB"
                  type="date"
                  onBlur={() => this.validator.showMessageFor("Branch")}
                  InputLabelProps={{
                    shrink: true
                  }}
                  name="DOB"
                  onChange={this.myChangeHandler}
                  variant="outlined"
                />
                  {this.validator.message(
                  "DOB",
                  this.state.DOB,
                  "required"
                )}
                 
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-select-currency-native"
                  select
                  label="gender"
                  SelectProps={{
                    native: true
                  }}
                  name="Gender"
                  variant="outlined"
                  onChange={this.myChangeHandler}
                >
                  <option></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
               
                </TextField>
                {this.validator.message(
                  "Gender",
                  this.state.Gender,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="Enter Roll Number"
                  type="text"
                  variant="outlined"
                  name="RollNo"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("Roll Number")}
                />
                {this.validator.message(
                  "Roll Number",
                  this.state.RollNo,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="Enter Age"
                  type="number"
                  variant="outlined"
                  name="Age"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("Age")}
                />
                {this.validator.message("Age", this.state.Age, "required")}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="Enter Email"
                  type="email"
                  variant="outlined"
                  name="Email"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("Email")}
                />
                {this.validator.message(
                  "Email",
                  this.state.Email,
                  "required|email"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="Enter Address"
                  type="text"
                  variant="outlined"
                  name="Address"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("Address")}
                />
                {this.validator.message(
                  "Address",
                  this.state.Address,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="10th percentage"
                  type="number"
                  variant="outlined"
                  name="SSC"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("SSC")}
                />
                {this.validator.message("SSC", this.state.SSC, "required")}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="12th percentage"
                  type="number"
                  variant="outlined"
                  name="HSC"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("HSC")}
                />
                {this.validator.message(
                  "HSC",
                  this.state.HSC,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="B.tech percentage"
                  type="number"
                  variant="outlined"
                  name="Btech"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("Btech")}
                />
                {this.validator.message(
                  "Btect",
                  this.state.Btech,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="Enter Backlogs"
                  type="text"
                  variant="outlined"
                  name="Backlogs"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("Backlogs")}
                />
                {this.validator.message(
                  "Backlogs",
                  this.state.Backlogs,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="10th School Name"
                  type="text"
                  variant="outlined"
                  name="SchoolSSC"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("SchoolSSC")}
                />
                {this.validator.message(
                  "SchoolSSC",
                  this.state.SchoolSSC,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="12th School Name"
                  type="text"
                  variant="outlined"
                  name="SchoolHHC"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("SchoolHHC")}
                />
                {this.validator.message(
                  "SchoolHHC",
                  this.state.SchoolHHC,
                  "required"
                )}
                <br></br>

                <TextField
                  style={{ padding: 10, width: 363 }}
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  variant="outlined"
                  name="Password"
                  onChange={this.myChangeHandler}
                  onBlur={() => this.validator.showMessageFor("Password")}
                />
                {this.validator.message(
                  "Password",
                  this.state.Password,
                  "required"
                )}
                <br></br>




                <Button style={{ height: 50, background: '#424242' }} type="submit" className="btn btn-primary btn-block" onClick={this.MySubmitHandler}> <CreateIcon/> &nbsp;&nbsp;Sign Up</Button>
                <br></br>
                {/* <h2 className="forgot-password text-right">
                        Already registered <a href="" onClick={this.handleClick}>sign in?</a>
                    </h2> */}
                <Typography variant="h6" className="forgot-password text-right">
                  Already registered <a href="" onClick={this.handleClick}>sign in?</a>
                </Typography>
            </form>
          </Grid>
        </Grid>
      </Grid>

    );
  }
}
const mapStateToProps = (state) => {
  debugger
  const msg = state.msg;
  return {
    msg: msg
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
)(SignUp))

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import * as authAction from '../../action/action/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Typography } from '@material-ui/core';



const styles = theme => ({

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginLeft: 240,
    fontSize: 20
  },

})


class Layout extends Component {
  constructor() {

    super()
    this.state = {
      Branch: "",
      SSC: 0,
      HSC: 0,
      Btech: 0,
      Year: "",
      Backlogs: 0,
      Gender: "",


    }
  }

  // componentDidMount(){
  //   window.location.reload(true)

  // }

  myChangeHandler = (event) => {
    if (event.target.name === "SSC" || event.target.name === "HSC" || event.target.name === "Btech" || event.target.name === "Backlogs") {
      if (event.target.value === "") {
        event.target.value = 0;
      }
    }

    this.setState({ [event.target.name]: event.target.value })

    console.log(this.state);
    console.log(event.target.value)


  }

  mySubmitHandler = (event) => {
    //var submit=0;
    //submit++;
    debugger

    event.preventDefault();
    console.log("submitt")
    console.log(this.state)
    debugger
    this.props.action.auth.ViewStudent(this.state)
      .then((response) => {
        debugger
        console.log(response.data)
        alert("WELCOME  name  YOU ARE ")

        // k= JSON.stringify(response.data)
        // localStorage.setItem("data",k)
        // window.location.href='/ViewStudent'
        this.props.history.push("/ViewStudent");

      }).catch(er => {
        console.log(er);
        alert(er)
      })
  }

  render() {


    return (
      // <main className={classes.content}>

      <Grid container 
      direction="row"
      justify="center"
      alignItems="flex-end"
    >
        <form >
        <br></br>
          <br></br>
          <Typography variant="h6" className="text-center">
          SELECT THE REQUIREMENTS :
          </Typography>
          <br></br>
          <Grid container 
                        direction="row"
                        justify="center"
                        alignItems="flex-end">
            
          <TextField
            style={{ padding: 10, width: 363 }}
            id="outlined-select-currency-native"
            select
            label="BRANCH"
            name="Branch"
            SelectProps={{
              native: true
            }}
            variant="outlined"
            onClick={this.myChangeHandler}>
            <option></option>
            <option value="CSE">CSE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="EE">EE</option>
            <option value="ECE">ECE</option>
            <option value="AE">AE</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>

          </TextField>

          <TextField
            style={{ padding: 10, width: 363 }}
            label="SSC PERCENTAGE"
            type="number"
            name="SSC"
            placeholder="ABOVE THEN"
            variant="outlined"
            onChange={this.myChangeHandler}
          />
          </Grid>
          <Grid container style={{ marginTop: 30 }}
                        direction="row"
                        justify="center"
                        alignItems="flex-end">
          <TextField
            style={{ padding: 10, width: 363 }}
            label="HSC PERCENTAGE"
            type="number"
            name="HSC"
            placeholder="ABOVE THEN"
            variant="outlined"
            onChange={this.myChangeHandler}
          />

          <TextField
            style={{ padding: 10, width: 363 }}
            label="Btech"
            type="number"
            name="Btech"
            placeholder="ABOVE THEN"
            variant="outlined"
            onChange={this.myChangeHandler}
          />
          </Grid>
        

          <Grid container style={{ marginTop: 30 }}
                        direction="row"
                        justify="center"
                        alignItems="flex-end">
          <TextField
            style={{ padding: 10, width: 363 }}
            id="outlined-select-currency-native"
            select
            label="YEAR OF ADDMISSION"
            name="Year"
            SelectProps={{
              native: true
            }}
            variant="outlined"
            onClick={this.myChangeHandler}
          >
            <option></option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>

          </TextField>
          </Grid>
          <Grid container style={{ marginTop: 30 }}
                        direction="row"
                        justify="center"
                        alignItems="flex-end">
          <TextField
            style={{ padding: 10, width: 180 }}
            id="outlined-select-currency-native"
            select
            name="Backlogs"
            label="NO OF BACKLOGS"
            SelectProps={{
              native: true
            }}
            variant="outlined"
            onClick={this.myChangeHandler}
          >
            <option></option>
            <option value="">ANY</option>
            <option value="0">00</option>
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
          </TextField>

          <TextField
            style={{ padding: 10, width: 180 }}
            id="outlined-select-currency-native"
            select
            label="GENDER"
            name="Gender"
            SelectProps={{
              native: true
            }}
            variant="outlined"
            onClick={this.myChangeHandler}
          >
            <option></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="">ALL</option>
          </TextField>
          </Grid>
          
          <Grid container style={{ marginTop: 30 }}
                        direction="row"
                        justify="center"
                        alignItems="flex-end">

          <Button style={{ padding: 12, width: 358, background: '#424242',color:"white" }} type="submit" onClick={this.mySubmitHandler}  >SUBMIT</Button>
          </Grid>  

        </form>
      </Grid>





    )
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
)(Layout))

//default connect(mapStateToProps, mapDispatchToProps)(SignIn)
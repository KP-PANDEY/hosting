import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import { Button, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import * as authAction from '../../action/action/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from '@material-ui/core/Link'
import axios from 'axios'
import { Grid, Typography } from '@material-ui/core';
const drawerWidth = 240;

const styles = theme => ({

    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginLeft: drawerWidth,
        fontSize: 20
    },

})
var swit = false


class Layout extends Component {
    constructor() {
        console.log("compny")
        super()
        this.state = {
            Year: "",
        }
    }

    // componentDidMount(){
    //   window.location.reload(true)

    // }

    myChangeHandler = (event) => {

        this.setState({ [event.target.name]: event.target.value })

        console.log(this.state);
        console.log(event.target.value)


    }

    mySubmitHandler = (event) => {
        //var submit=0;
        //submit++;
        event.preventDefault()
        if(this.state.Year)
        {
        console.log("submitt")
        axios.post("http://localhost:3010/COMPANY",this.state)
        .then(res => {
        //  alert(res.data)
          console.log(res)
          localStorage.setItem("Company",JSON.stringify(res.data))
          this.props.history.push("/CompanyDetails")
      })
    }
    else{
        alert("PLEASE SELECT YEAR AND CONTINUE >>>>")
    }
      //  window.location.href='/CompanyDetails'

        // event.preventDefault();
        // console.log("submitt")
        // console.log(this.state)
        //   debugger

    }

    render() {
            return (
          
                <Grid container style={{ marginTop: 60 }}
                direction="row"
                justify="center"
                alignItems="flex-end">
                    <form >
                        <Typography variant="h6" className="text-center">
                            SELECT YEAR TO VIEW DETAILS :
                        </Typography> 
                         <br></br>
                            <br></br>
                            <TextField
                                style={{ padding: 10, width: 363 }}
                                id="outlined-select-currency-native"
                                select
                                label="YEAR"
                                name="Year"
                                SelectProps={{
                                    native: true
                                }}
                                variant="outlined"
                                onClick={this.myChangeHandler}>
                                <option value="0000"></option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>

                            </TextField>
                            <br></br>
                            <br></br>

                            <Button style={{ padding: 10, width: 363, background: '#424242', }} type="submit" onClick={this.mySubmitHandler}  >SUBMIT</Button>

                    
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
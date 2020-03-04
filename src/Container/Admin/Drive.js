import React, { Component } from 'react';
import Validation from 'simple-react-validator'
import axios from "axios"
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import * as authAction from '../../action/action/action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
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


class Drive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Company: '',
            location: '',
            Criteria: '',
            DOD: '',
            Description: '',
            degree: {
            }

        }
        this.Validator = new Validation();

    }
    handleChange = (event) => {
        console.log("change", event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    };
    handleCheck = (event) => {
        let value = event.target.name;
        if (event.target.checked) {

            if (value === "MCA") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        MCA: true
                    })
                })
            }
            if (value === "MBA") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        MBA: true
                    })
                })
            }
            if (value === "CSE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        CSE: true
                    })
                })
            }
            if (value === "ECE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        ECE: true
                    })
                })
            }
            if (value === "ME") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        ME: true
                    })
                })
            } if (value === "AE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        AE: true
                    })
                })
            } if (value === "EE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        EE: true
                    })
                })
            }
            if (value === "CE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        CE: true
                    })
                })
            }
        }

        else {
            if (value === "MCA") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        MCA: false
                    })
                })
            }
            if (value === "MBA") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        MBA: false
                    })
                })
            }
            if (value === "CSE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        CSE: false
                    })
                })
            }
            if (value === "ME") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        ME: false
                    })
                })
            }
            if (value === "AE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        AE: false
                    })
                })
            }
            if (value === "ECE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        ECE: false
                    })
                })
            }
            if (value === "CE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        CE: false
                    })
                })
            }
            if (value === "EE") {
                this.setState({
                    degree: Object.assign({}, this.state.degree, {
                        EE: false
                    })
                })
            }
        }
    }
    SubmitHandler = (event) => {
        event.preventDefault();
        if (this.Validator.allValid()) {
            this.props.action.auth.AddDrive(this.state)
                .then((response) => {
                    debugger
                    console.log(response.data)
                    alert("DRIVE ADDED ")
                    window.location.reload()
                    // alert(response.data[0].Name)
                    // window.location.href='/ViewStudent'
                    // this.props.history.push("/ViewStudent");

                }).catch(er => {
                    console.log(er);
                    alert(er)
                })
        }
        else {
            alert("ALL FEILDS ARE REQUIRED")
           // this.Validator.showMessages()
            this.forceUpdate();

        }
    };
    render() {
        const { classes } = this.props
        return (
            <Grid
                container style={{ marginTop: 30 }}
                direction="row"
                justify="center"
                alignItems="flex-end">
                
              

                <form className="DriveFrom">
                <Typography variant="h6" className="text-center"> ENTER COMPANY DETAILS :</Typography>
                    <Grid container style={{ marginTop: 30 }}
                        direction="row"
                        justify="center"
                        alignItems="flex-end">
            
                   
                    <TextField
                        label="Company Name"
                        name="Company"
                        variant="outlined"
                        onChange={this.handleChange}
                        style={{ width: 320, paddingLeft: 3, marginLeft: 10, marginRight: 10, marginTop: 15 }}
                    />
                    {this.Validator.message('Company', this.state.Company, 'required')}

                    <TextField
                        label="Description"
                        variant="outlined"
                        name="Description"
                        variant="outlined"
                        onChange={this.handleChange}
                        style={{ width: 320, paddingLeft: 3, marginLeft: 10, marginRight: 10, marginTop: 15 }}
                    />
                       {this.Validator.message('Description', this.state.Description, 'required')}
                    </Grid>
        
                    <Grid container style={{ marginTop: 30 }}
                        direction="row"
                        justify="center"
                        alignItems="flex-end">
                    <TextField
                        label="Criteria"
                        name="Criteria"
                        variant="outlined"
                        onChange={this.handleChange}
                        style={{ width: 208, paddingLeft: 3, marginLeft: 10, marginRight: 10, marginTop: 15 }}
                    />
                    {this.Validator.message('Criteria', this.state.Criteria, 'required')}

                 
                    {/* <FormLabel style={{ marginLeft:9, marginTop: 15, width: 300, marginRight: 30 }} component="legend">Pick the  Date of upcoming Drive</FormLabel> */}

                    <TextField
                        onChange={this.handleChange}
                        name="DOD"
                        variant="outlined"
                        style={{ width: 208, paddingLeft: 3, marginLeft: 10, marginRight: 10, marginTop: 15 }}
                        type="date"
                    />
                    {this.Validator.message('DOD', this.state.DOD, 'required')}

                    <TextField
                        label="Location"
                        name="location"
                        variant="outlined"
                        onChange={this.handleChange}
                        style={{ width: 208, paddingLeft: 3, marginLeft: 10, marginRight: 10, marginTop: 15 }}

                    />
                    {this.Validator.message('location', this.state.location, 'required')}
                    </Grid>
                    <br></br>
                    <Grid container
                        direction="row"
                        justify="center"
                        alignItems="flex-end">
                        
                      

                        <FormControl>
                            <FormGroup style={{ marginLeft: 15, paddingRight: 140 }}>
                                <FormControlLabel
                                    control={<Checkbox onChange={this.handleCheck} name="MBA" />}
                                    label="MBA"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={this.handleCheck} name="MCA" />}
                                    label="MCA "
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={this.handleCheck} name="CSE" />
                                    }
                                    label="CSE "
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={this.handleCheck} name="ME" />
                                    }
                                    label="ME"
                                />
                            </FormGroup>
                        </FormControl>

                        <FormControl>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={this.handleCheck} name="AE" />
                                    }
                                    label="AE"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={this.handleCheck} name="ECE" />
                                    }
                                    label="ECE"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={this.handleCheck} name="CE" />
                                    }
                                    label="CE"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={this.handleCheck} name="EE" />
                                    }
                                    label="EE"
                                />
                            </FormGroup >
                        </FormControl>

                        {this.Validator.message('Degree', this.state.degree.MBA || this.state.degree.ME || this.state.degree.MCA || this.state.degree.CSE || this.state.degree.ECE || this.state.degree.AE || this.state.degree.EE || this.state.degree.CE, 'required|accepted')}              

                    </Grid>
                   
                                    <br></br>
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-end">

                    <Button onClick={this.SubmitHandler} style={{ background: '#424242',width:320 }}
                        variant="contained" color="primary"><DoneOutlineOutlinedIcon />&nbsp;&nbsp;&nbsp; SUBMIT

                        </Button>
                    </Grid>
                </form>
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
)(Drive))

import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as authAction from '../../action/action/action'
import { bindActionCreators } from 'redux'
import axios from "axios"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid, Button, Paper } from '@material-ui/core';


class HomeUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Drive: []
        }
    }
    componentWillMount() {
        axios.post("http://localhost:3010/DriveData")
            .then((res) => {
                console.log(res.data)
                this.setState({ Drive: res.data })
            })

    }
    Logout = () => {
        this.props.action.auth.Logout()
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        window.location.href = '/'

    }
    Home=()=>{
        this.props.history.push('/User')
    }
    render() {


        console.log("state", this.state)
        return (
            <Grid container style={{ marginTop: 80 }}
            direction="column"
            justify="center"
            alignItems="center"
            >
                <Paper>
                    <TableContainer >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>CompanyName</TableCell>
                                    <TableCell align="right">Location</TableCell>
                                    <TableCell align="right">Criteria</TableCell>
                                    <TableCell align="right">Date of Drive</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">Eligible branches</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.Drive.map(row => (
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {row.Company}
                                        </TableCell>
                                        <TableCell align="right">{row.location}</TableCell>
                                        <TableCell align="right">{row.Criteria}</TableCell>
                                        <TableCell align="right">{row.DOD}</TableCell>
                                        <TableCell align="right">{row.Description}</TableCell>
                                        <TableCell align="right">{row.degree}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </Paper>

                    </Grid>
               
        )
    }
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
    connect(mapStateToProps, mapDispatchToProps)(HomeUser)
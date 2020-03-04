import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios"
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'recompose'
import { Grid, Typography, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { Chart, Series, CommonSeriesSettings, Legend, Export, Tooltip, Title } from 'devextreme-react/chart';

const styles = theme => ({

  root: {
    width: '100%',
  },
  table: {
    minWidth: 200,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    // [theme.breakpoints.down('sm')]:{
    //   marginLeft:110
    // },
  //  marginLeft: 200,
    fontSize: 20
  },
  paper: {
    width: '65%',
    // marginLeft: theme.spacing(8),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },

})

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



// Year: "2020"
// CSE: 2
// ME: 0
// AE: 0
// CE: 0
// EE: 0
// EC: 3
// MBA: 10
// MCA: 

function createData(Year, CSE, ME, AE,CE,EE,EC,MBA,MCA) {
  return { Year, CSE, ME, AE,CE,EE,EC,MBA,MCA };
}

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      graphData: '',
      table: false
    }
  }


  componentWillMount() {
    axios.post("/PlacementGraphdata")
      .then((res) => {
        console.log("componentWillMount of graph Data", res.data)
        this.setState({ graphData: res.data })
      })

  }

  CallTabularView = () => {
    if (this.state.table) {
      this.setState({ table: false })
    }
    else {
      this.setState({ table: true })
    }
  }




  render() {
    const arr = this.state.graphData;
    const rows = [];
    
    for (var k in arr) {
      console.log(arr[k])
      rows[k] = createData(
        arr[k].Year,
        arr[k].CSE,
        arr[k].ME,
        arr[k].AE,
        arr[k].CE,
        arr[k].EE,
        arr[k].EC,
        arr[k].MBA,
        arr[k].MCA,
      );
    }
    const v = this.state.graphData;
    const { classes } = this.props;
    return (
      (this.props.token && this.props.token !== "") &&



      <Grid container style={{ marginTop: 30 }}
        direction="column"
        justify="center"
        alignItems="center"
      >
       
        <Chart
          id="chart"
          dataSource={v}
          // width={1000} height={'100vh'}

          //  palette = {this.palette}
          palette="soft"
        >
          <Title
            text="Placement Graph"




          />


          <CommonSeriesSettings argumentField="Year" type="fullstackedbar" />
          <Series valueField="CSE" name="CSE" />
          <Series valueField="ME" name="ME" />
          <Series valueField="AE" name="AE" />
          <Series valueField="EE" name="EE" />
          <Series valueField="EC" name="EC" />
          <Series valueField="CE" name="CE" />
          <Series valueField="MBA" name="MBA" />
          <Series valueField="MCA" name="MCA" />


          <Legend verticalAlignment="top"
            horizontalAlignment="center"
            itemTextPosition="right"
          />

          <Export enabled={true} />
          <Tooltip
            enabled={true}
            customizeTooltip={this.customizeTooltip}
          />
        </Chart>

        <Button onClick={this.CallTabularView}  variant="outlined">
          {(this.state.table) ?"CHART VIEW ":"TABLE VIEW"}
          </Button>

        {(this.state.table) &&

          <TableContainer>
            <Grid container style={{ marginTop: 30 }}
              direction="column"
              justify="center"
              alignItems="center"
             >
               <Paper>
              <Table size='small'className={classes.table}>

                <TableHead>
                  <TableRow>
                    <TableCell>YEAR </TableCell>
                    <TableCell align="right">CSE</TableCell>
                    <TableCell align="right">ME</TableCell>
                    <TableCell align="right">AE</TableCell>
                    <TableCell align="right">CE</TableCell>
                    <TableCell align="right">EE</TableCell>
                    <TableCell align="right">EC</TableCell>
                    <TableCell align="right">MBA</TableCell>
                    <TableCell align="right">MCA</TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.Year}>
                      <TableCell component="th" scope="row">
                        {row.Year}
                      </TableCell>
                      <TableCell align="right">{row.CSE}</TableCell>
                      <TableCell align="right">{row.ME}</TableCell>
                      <TableCell align="right">{row.AE}</TableCell>
                      <TableCell align="right">{row.CE}</TableCell>
                      <TableCell align="right">{row.EE}</TableCell>
                      <TableCell align="right">{row.EC}</TableCell>
                      <TableCell align="right">{row.MBA}</TableCell>
                      <TableCell align="right">{row.MCA}</TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </Paper>
            </Grid>
          </TableContainer>


        }
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

const mapDispatchToProps = () => ({
  actions: {


  }
});

export default connect(mapStateToProps, mapDispatchToProps)(compose(
  withRouter,
  withStyles(styles)
)(Admin))

//export default connect(mapStateToProps, mapDispatchToProps)(Header)
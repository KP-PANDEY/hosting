import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { withStyles, Box, AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Avatar } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import TableContainer from '@material-ui/core/TableContainer';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        //  padding: 20

    },

    button: {
        width: 200,

    },
    AppBar: {

        background: theme.palette.background.paper,

        // width:"40%",
    },
    paper: {
        width: '65%',
        // marginLeft: theme.spacing(8),
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
      },
    table: {
        minWidth: 200,
      },
}));




function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

export default function User(props) {


    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const r = localStorage.getItem("details")
    var details = JSON.parse(r)
    //const Example = () => <Avatar style={{ width: 130, height: 130, marginLeft:30}} src={details.image} />

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    //   const Example = () => <Avatar style={{ width: 130, height: 130, marginLeft: 20 }} src={details.image} />
    return (


        <Grid className={classes.root}
            container
            direction="column"
            justify="center"
            alignItems="center"
        ><TableContainer>
            <Table size='small'className={classes.table}>
            <Grid container
                direction="row"
                justify="center"
                alignItems="stretch">
                     
                <Paper style={{ width: "60%", minWidth: 520, marginTop: 80 }}>
    <Typography variant="h6" > &nbsp; WELCOME {details.Name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(details.Approve)?<Tooltip title="APPROVED"><VerifiedUserIcon style={{color:"green",fontSize:50 }}/></Tooltip>:<Tooltip title="APPROVAL PENDING"><ErrorOutlineOutlinedIcon style={{color:"red",fontSize:50 }}/></Tooltip>}</Typography>
                    <Grid >
                        <Typography variant="h6" >&nbsp;  {details.Branch}</Typography>
                        <Typography variant="h6" > &nbsp;  {details.RollNo}</Typography>


                    </Grid>
                    <Grid container
                        direction="column"
                        justify="flex-start"
                        alignItems="stretch">
                        {/* <AppBar */}
                        {/* > */}
                        <Tabs className={classes.AppBar}
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="PERSONAL DETAILS" {...a11yProps(0)} />
                            <Tab label="EDUCATIONAL DETAILS" {...a11yProps(1)} />
                            <Tab label="CONTACT DETAILS" {...a11yProps(2)} />

                        </Tabs>

                    </Grid>
                    <TabPanel value={value} index={0}>


                        <Table style={{  minWidth: 500}}>

                            <TableBody >
                               
                                <TableRow>
                                    <TableCell >Father's Name</TableCell>
                                    <TableCell align="right" >{details.FatherName}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >Mother's Name</TableCell>
                                    <TableCell align="right">{details.MothersName}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >Gender</TableCell>
                                    <TableCell align="right" >{details.Gender}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >Birth Date</TableCell>
                                    <TableCell align="right" >{details.DOB}</TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value={value} index={1}>


                        <Table >
                       
                            <TableBody>
                                <TableRow>
                                    <TableCell >Higher Secondary  School Name</TableCell>
                                    <TableCell align="right" >{details.HSCSCHOOLNAME}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >Higer Secondary Score</TableCell>
                                    <TableCell align="right">{details.HSC}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >Senior Secondary  School Name</TableCell>
                                    <TableCell align="right">{details.SSCSCHOOLNAME}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >Senior Secondary Score</TableCell>
                                    <TableCell align="right">{details.SSC}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >BTech Aggregate</TableCell>
                                    <TableCell align="right" >{details.BTECHAGGREGATE}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >Active Backlogs</TableCell>
                                    <TableCell align="right">{details.Backlogs}</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TabPanel>
                    <TabPanel value={value} index={2}>


                        <Table >
                            <TableBody>
                                <TableRow>
                                    <TableCell >MObile NO:</TableCell>
                                    <TableCell align="right" >{details.MobileNumber}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell >Email Address</TableCell>
                                    <TableCell align="right">{details.Email}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell >Residance Address</TableCell>
                                    <TableCell align="right">{details.Address}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TabPanel>

                    <Grid container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start">
                         <Tooltip title="EDIT DETAILS">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            startIcon={<UpdateIcon />}
                            onClick={()=>{ props.history.push("/EditUser") }}
                            
                        >
                           
                            UPDATE DETAILS
                            
                        </Button>
                        </Tooltip>
                       
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<SystemUpdateAltIcon />}
                            onClick={()=>{ props.history.push("/PDF") }}
                        >
                            DOWNLOAD DETAILS
                        </Button>
                    </Grid>

                </Paper>
               
            </Grid>
            </Table>
            </TableContainer>



        </Grid>



    );

}


// export default FullWidthGri
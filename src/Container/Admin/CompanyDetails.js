import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Grid, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


function createData(Total, PlacedIN) {
    return { Total, PlacedIN };

}
const drawerWidth = 240;


const myObject = localStorage.getItem("Company")
//const myObject=[]=props.data;
const arr = (JSON.parse(myObject));
// const d = localStorage.getItem("result");
// const da = JSON.parse(d);
const rows = [];
for (var k in arr) {
    console.log(arr[k].Total)
    rows[k] = createData(
        arr[k].Total,
        arr[k].PlacedIN,

    );
}


function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
    { id: 'Total', label: 'Total', disablePadding: true, numeric: false },
    { id: 'PlacedIN', label: 'PlacedIN', disablePadding: false, numeric: true },

    // {id:'12th',label:'12th',disablePadding:false,numeric:true},
    // {id:'DEGREE AGGR.',label:'DEGREE AGGR.',disablePadding:false,numeric:true},
    // {label:'PlacedON',disablePadding:false,numeric:true}
]


//[
// {data},
// { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
// { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
// { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
// { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
// { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
//];




function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    const rows = [];
    for (var k in arr) {
        console.log(arr[k].Total)
        rows[k] = createData(
            arr[k].Total,
            arr[k].PlacedIN,
            //  arr[k].HSC,
            //  arr[k].BTECHAGGREGATE
        );
    }
  
    return (
       
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1">
                    {numSelected} selected
        </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle">
                        {/* COMPANY DETAILS OF {arr[0].PLACEDYEAR} */}
                    </Typography>
                )}


        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '60%',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(5),
    },
    table: {
        minWidth: 250,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        marginLeft: drawerWidth,
        fontSize: 20
    },





}));

export default function EnhancedTable() {

    const myObject = localStorage.getItem("Company")
    //const myObject=[]=props.data;
    const arr = (JSON.parse(myObject));
    // const d = localStorage.getItem("result");
    // const da = JSON.parse(d);
    const rows = [];
    for (var k in arr) {
        console.log(arr[k].Total)
        rows[k] = createData(
            arr[k].Total,
            arr[k].PlacedIN,

        );
    }
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.Total);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name, count) => {
        const selectedIndex = selected.indexOf(name, count);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name, count);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = event => {
        setDense(event.target.checked);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


    //   const UNPLACED = () => {
    //     console.log("export")


    //     console.log(selected)
    //     console.log(selected)
    //     // //  alert(<input type="text"/>)
    //     //   axios.post("http://localhost:3010/Unplaced",selected)
    //     //   .then(res => {
    //     //     alert(res.data)
    //     //     window.location.href='/Admin'
    //     //     console.log(res)
    //     })


    const Export = () => {
        console.log("export")
        const element = document.createElement("a");
        const file = new Blob([selected]);
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();

        console.log(selected)




    };
    return (

        <Grid container style={{ marginTop: 30 }}
            direction="row"
            justify="center"
            alignItems="flex-end">
            
            {(rows.length===0)?<Typography>NO DATA TO SHOW </Typography>:

            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.Total);
                                    const labelId = `enhanced-table-checkbox-${index}`;


                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => handleClick(event, row.Total, row.PlacedIN)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.Total}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">{row.Total}
                                            </TableCell>
                                            <TableCell align="right">{row.PlacedIN}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />

                <FormControlLabel
                    control={<Switch checked={dense} onChange={handleChangeDense} />}
                    label="Dense padding"
                />
                <Grid container style={{ marginTop: 30 }}
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end">
                    <Button onClick={Export} style={{ background: '#424242' }}
                        variant="contained" color="primary"> <ArrowForwardIcon />
                        EXPORT DETAILS
              </Button>
                </Grid>

            </Paper>
}
        </Grid>



    );
}
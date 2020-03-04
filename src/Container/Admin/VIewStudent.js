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
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SimpleReactValidator from 'simple-react-validator';
import TextField from '@material-ui/core/TextField';


function createData(Name, Branch, RollNo, Email, SSC, HSC, BTECHAGGREGATE) {
  return { Name, Branch, RollNo, Email, SSC, HSC, BTECHAGGREGATE };

}
const drawerWidth = 240;
var feild = false;
var placedin;
var placedon;


const myObject = localStorage.getItem("ViewStudent")
const arr = (JSON.parse(myObject));
const rows = [];

for (var k in arr) {
  console.log(arr[k].Name)
  rows[k] = createData(
    arr[k].Name,
    arr[k].Branch,
    arr[k].RollNo,
    arr[k].Email,
    arr[k].SSC,
    arr[k].HSC,
    arr[k].BTECHAGGREGATE
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
  { id: 'Name', label: 'Name', disablePadding: true, numeric: false },
  { id: 'Branch', label: 'Branch', disablePadding: false, numeric: true },
  { id: 'Roll NO', label: 'Roll NO', disablePadding: false, numeric: true },
  { id: 'Email', label: 'Email', disablePadding: false, numeric: true },
  { id: '10th', label: '10th', disablePadding: false, numeric: true },
  { id: '12th', label: '12th', disablePadding: false, numeric: true },
  { id: 'DEGREE AGGR.', label: 'DEGREE AGGR.', disablePadding: false, numeric: true },
  // {label:'SSC',disablePadding:false,numeric:true}
]



function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  const rows = [];
  for (var k in arr) {
    //console.log(arr[k].Name)
    rows[k] = createData(
      arr[k].Name,
      arr[k].Branch,
      arr[k].RollNo,
      arr[k].Email,
      arr[k].SSC,
      arr[k].HSC,
      arr[k].BTECHAGGREGATE
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
            STUDENT DETAILS
        </Typography>
        )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )} */}
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
    width: '65%',
    // marginLeft: theme.spacing(5),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
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

export default function EnhancedTable(props) {


  const myObject = localStorage.getItem("ViewStudent")
  const arr = (JSON.parse(myObject));
  const rows = [];

  for (var k in arr) {
    console.log(arr[k].Name)
    rows[k] = createData(
      arr[k].Name,
      arr[k].Branch,
      arr[k].RollNo,
      arr[k].Email,
      arr[k].SSC,
      arr[k].HSC,
      arr[k].BTECHAGGREGATE
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
  const ADDTOPLACED = () => {
    // AlertDialog();
    console.log(selected)
    console.log(placedin)
    console.log(placedon)
    
    //console.log(placedon.slice(0, 4));
    if (placedin && placedon) {
      const data = {
        name: selected,
        placedin: placedin,
        placedon: placedon,
        Year: placedon.slice(0, 4)
      }
      //  alert(<input type="text"/>)
      axios.post("http://localhost:3010/PlacementDetails",data)
      axios.post("http://localhost:3010/Plan",data)
      axios.post("http://localhost:3010/Placed", data)
        .then(res => {
          alert(res.data)
          console.log(res)
          localStorage.removeItem("ViewStudent")
          localStorage.removeItem("Pending")
          localStorage.removeItem("drive")
          localStorage.removeItem("Placed")
         // window.location.href = "/Admin"
         props.history.push("/")
        })
    } else {
      alert("PLACED IN FEILD IS REQUIRED TO BE FILLED");
    }
  }

  const PLACED = () => {
    // AlertDialog();
    console.log(selected)
    feild = true;
    setOrder();

  }

  const feildchange = (event) => {
    if (event.target.name == "placedin") {
      placedin = event.target.value;
    }
    else {
      placedon = event.target.value;
    }
  }


  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.Name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };



  const handleClick = (event, name, Branch) => {
    const selectedIndex = selected.indexOf(name, Branch);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
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

  return (
    <Grid container style={{ marginTop: 0 }}
      direction="row"
      justify="center"
      alignItems="flex-end">
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
                  const isItemSelected = isSelected(row.Name);
                  const labelId = `enhanced-table-checkbox-${index}`;


                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.Name, row.Branch)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">{row.Name}
                      </TableCell>
                      <TableCell align="right">{row.Branch}</TableCell>
                      <TableCell align="right">{row.RollNo}</TableCell>
                      <TableCell align="right">{row.Email}</TableCell>
                      <TableCell align="right">{row.SSC}</TableCell>
                      <TableCell align="right">{row.HSC}</TableCell>
                      <TableCell align="right">{row.BTECHAGGREGATE}</TableCell>
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
        <br></br>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Button onClick={PLACED} style={{ background: '#424242' }}
            variant="contained" color="primary"><EmojiPeopleIcon />
            ADD TO PLACED STUDENT LIST
      </Button>
          &nbsp;&nbsp;&nbsp;
      <Button onClick={Export} style={{ background: '#424242' }}
            variant="contained" color="primary"> <ArrowForwardIcon />
            EXPORT NAMES OF STUDENTS
      </Button>
          &nbsp;&nbsp;&nbsp;
        </Grid>
        &nbsp;&nbsp;&nbsp;
        {(feild) &&
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >

            <TextField
              style={{ width: 250, flex: 1 }}
              label="PLACED IN"
              type="text"
              name="placedin"
              variant="outlined"
              required
              onChange={feildchange}
            />
            &nbsp;&nbsp;&nbsp;

            <TextField
              style={{ width: 250, flex: 1 }}
              label="PLACED ON"
              type="date"
              name="placedon"
              variant="outlined"
              required
              onChange={feildchange}

            />

            <Button onClick={ADDTOPLACED} style={{ marginTop: 20, background: '#424242', }}
              variant="contained" color="primary"> <ArrowForwardIcon />
              SUBMIT
              </Button>
          </Grid>

        }
      </Paper>
    </Grid>

  );
}
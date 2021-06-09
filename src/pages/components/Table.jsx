import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';

const columns = [
  { id: 'Customer Id', label: 'Customer Id' },
  { id: 'Gender', label: 'Gender'},
  {
    id: 'Age',
    label: 'Age',
    align: 'right',
  },
  {
    id: 'Annual Income',
    label: 'Annual Income(k$)',
    align: 'right',
  },
  {
    id: 'Family Size',
    label: 'Family Size',

    align: 'right',
  },
  {
    id: 'Profession',
    label: 'Profession',

    align: 'right',
  },
  {
    id: 'Location',
    label: 'Location',

    align: 'right',
  },
  {
    id: 'Total',
    label: 'Total',

    align: 'right',
  },
  {
    id: 'Spending Score(1-100)',
    label: 'Spending Score(1-100)',

    align: 'right',
  },
  {
    id: 'Email',
    label: 'Email',

    align: 'right',
  }
];




const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {

  const [rows, setrows] = useState([])

  useEffect(() => {
      axios.get("http://127.0.0.1:8000/admin/customers").then((res)=>{
           
           setrows(res.data.data)

      }).catch((err)=>{
        console.log(err)
      })

  }, [])

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
            rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
              return (
                 console.log(index),
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                   <TableCell key={row[0]}  >
                    {row[1]}
                    </TableCell>
                    <TableCell key={row[0]} >
                    {row[2]}
                    </TableCell>
                    <TableCell key={row[0]} >
                    {row[3]}
                    </TableCell>
                    <TableCell key={row[0]} >
                    {row[4]}
                    </TableCell>
                    <TableCell key={row[0]} >
                    {row[5]}
                    </TableCell>
                    <TableCell key={row[0]} >
                    {row[6]}
                    </TableCell>
                    <TableCell key={row[0]} align='right'>
                    {row[7]}
                    </TableCell>
                    <TableCell key={row[0]} >
                    {row[8]}
                    </TableCell>
                    <TableCell key={row[0]} align='right'>
                    {row[9]}
                    </TableCell>
                    <TableCell key={row[0]} align='right'>
                    {row[10]}
                    </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100,200]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        // page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

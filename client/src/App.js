import './App.css';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: theme.spacing(3),
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});

function App(props) {
  const { classes } = props;

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCompleted((prevCompleted) => (prevCompleted >= 100 ? 0 : prevCompleted + 1));
    }, 20);

    const fetchData = async () => {
      try {
        const response = await fetch('/api/customers');
        if (!response.ok) {
          throw new Error('☹💥 Network response was not ok');
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Paper className={classes.root}>
      {loading ? (
        <div className={classes.progressContainer}>
          <CircularProgress className={classes.progress} variant='determinate' value={completed} />
        </div>
      ) : (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <Customer
                key={customer.id}
                id={customer.id}
                image={customer.image}
                name={customer.NAME}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
              />
            ))}
          </TableBody>
        </Table>
      )}
    </Paper>
  );
}

export default withStyles(styles)(App);

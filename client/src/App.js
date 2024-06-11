import './App.css';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});

function App(props) {
  const { classes } = props;
  const customers = [
    {
      id: 1,
      image: 'https://loremflickr.com/64/64',
      name: '박콩',
      birthday: '220208',
      gender: '여자',
      job: '고양이',
    },
    {
      id: 2,
      image: 'https://loremflickr.com/64/64',
      name: '호야',
      birthday: '200015',
      gender: '여자',
      job: '고양이',
    },
    {
      id: 3,
      image: 'https://loremflickr.com/64/64',
      name: '쿠키',
      birthday: '220208',
      gender: '여자',
      job: '고양이',
    },
  ];

  return (
    <Paper className={classes.root}>
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
          {customers.map((customer) => {
            return (
              <Customer
                key={customer.id}
                id={customer.id}
                image={customer.image}
                name={customer.name}
                birthday={customer.birthday}
                gender={customer.gender}
                job={customer.job}
              />
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);

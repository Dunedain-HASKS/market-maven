import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function createData(id, date, name, price, amount) {
  return { id, date, name, price, amount };
}

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [transactions, setTransactions] = React.useState([]);
  React.useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) return;
    fetch(`https://azathoth.onrender.com/user/${id}/transactions`).then(res => res.json()).then(data => {
      const newtransactions = data.data.map(async (transaction) => {
        const ticker = await fetch(`https://azathoth.onrender.com/companies/${transaction.stock.company}`).then(res => res.json()).then(data => data.data.ticker);
        return {
          id: transaction._id,
          date: transaction.date,
          stock: ticker,
          price: transaction.stock.historic_data[transaction.stock.historic_data.length - 1].price.close,
          amount: transaction.amount,
        }
      });
      Promise.all(newtransactions).then(data => {
        setTransactions(data);
      });
    });
  }, []);

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stock</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="right">Bought/Sold</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell align="right">{(row.amount > 0) ? "Buy" : "Sold"}</TableCell>
              <TableCell align="right">{`$${Math.abs(row.amount)}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}

import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits(props) {

React.useEffect(()=>{
  // console.log(props.stock.net_worth[props.stock.net_worth.length-1].date);
})

  return (
    <React.Fragment>
      <Title>Funds available</Title>
      <Typography component="p" variant="h4">
        $ {Math.round(props.stock.funds)}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      on  {props.stock.net_worth[props.stock.net_worth.length-1] ? props.stock.net_worth[props.stock.net_worth.length-1].date : null}

      </Typography>
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}

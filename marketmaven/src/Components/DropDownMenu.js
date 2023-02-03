import { useEffect, useState } from "react";
import axios from "axios";
// import Stock from "./Stock";
import Chart from "./Chart";

export default function DropdownMenu() {
  const [stocks, setStocks] = useState();
  const [selected, setSelected] = useState();
  const [chart, setChart]= useState({});

  useEffect(() => {
    
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    axios.get(url).then((response) => {
      setStocks(response.data);
    //   console.log(stocks);
    });
  }, []);

  function select(e) {
    const c = stocks?.find((x) => x.id === e.target.value);
    setSelected(c);
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${c.id}/market_chart?vs_currency=usd&days=30&interval=daily`
      )
      .then((response) => {
          setChart(response.data);
          // console.log(chart);
      });
  }

  return (
    <>
      <h1>Crypto Currencies</h1>
      <select
        onChange={select}
      >
        {stocks
          ? stocks.map((stocks) => {
              return (
                <option value={stocks.id} key={stocks.id}>
                  {stocks.name}
                </option>
              );
            })
          : null}
      </select>
      {selected ? <Chart chart={chart} stock={selected}/> : null}
    </>
  );
}

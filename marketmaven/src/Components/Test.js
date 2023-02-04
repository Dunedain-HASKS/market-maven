import { useEffect, useState } from "react";
import axios from "axios";
import { json, Link } from "react-router-dom";
import Chart from "../Pages/dashboard/Chart";

export default function Test() {
  const [stocks, setStocks] = useState();
  const [selected, setSelected] = useState();
  const [chart, setChart] = useState();

  const baseurl = "https://https://azathoth.onrender.com//";
  useEffect(() => {
    // axios.get(url).then((response) => {
    //   setStocks(response.data);
    //   console.log(stocks);
    // });

    fetch(baseurl + "stocks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        setStocks(data);
        // console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function select(e) {
    const c = stocks.data?.find((x) => x._id === e.target.value);
    console.log(c);

    setSelected(c);
    axios.get(baseurl + "/stocks" + c.id).then((response) => {
      setChart(response.data);
      console.log(chart);
    });
  }

  return (
    <>
      <h1>Test</h1>
      <select onChange={select}>
        {stocks
          ? stocks.data.map((stock) => {
              return (
                <option value={stock._id} key={stock._id}>
                  {stock.company.name}
                </option>
              );
            })
          : null}
      </select>
      {selected ? <Chart stock={selected} /> : null}
    </>
  );
}

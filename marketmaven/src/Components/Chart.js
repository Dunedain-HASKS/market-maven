import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../CanvasJS/canvasjs.react';
import Buy from './Buy';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
function Chart(props) {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    // console.log(props);
    
    const fetchedDataPoints = [];
    for (var i = 0; i < props.stock.historic_data.length; i++) {
      fetchedDataPoints.push({
        x: new Date(props.stock.historic_data[i].date),
        y: props.stock.historic_data[i].price.close
      });
  }setDataPoints(fetchedDataPoints);
  }, [props]);

  const options = {
    theme: "light2",
    title: {
      text: props ? props.stock.company.name : null
    },
    data: [{
      type: "line",
      xValueFormatString: "MMM YYYY",
      yValueFormatString: "#,##0.00",
      dataPoints: dataPoints
    }]
  }

  return (
    <>
    <div>
      <CanvasJSChart options={options} />
    </div>
    <div>
      <Buy stock={props}/>
    </div>
    </>
  );
}
 
export default Chart;

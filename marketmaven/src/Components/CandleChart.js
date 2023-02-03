import React, { useEffect, useState } from 'react';
import CanvasJSReact from '../CanvasJS/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  exportEnabled: true,
  title: {
    text: "Microsoft Corporation Stock Price - December 2017"
  },
  axisX: {
    valueFormatString: "D MMM"
    
  },
  axisY: {
    title: "Price",
    prefix: "$"
  },
  data: [
    {
      type: "candlestick",
      name: "Microsoft Corporation Price",
      showInLegend: true,
      yValueFormatString: "$##0.00",
      xValueType: "dateTime",
      dataPoints: []
    }
  ]
};

const CandleChart = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    fetch("https://canvasjs.com/data/gallery/react/microsoft-stock-price.json")
      .then(response => response.json())
      .then(data => {
        const newDataPoints = data.map(({ x, y }) => ({ x, y }));
        setDataPoints(newDataPoints);
      });
  }, []);

  options.data[0].dataPoints = dataPoints;

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default CandleChart;

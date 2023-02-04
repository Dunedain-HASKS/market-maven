// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';

// function createData(time, amount) {
//   return { time, amount };
// }


// // const data = [
// //   // createData('00:00', 1200),
// //   // createData('03:00', 300),
// //   // createData('06:00', 600),
// //   // createData('09:00', 800),
// //   // createData('12:00', 1500),
// //   // createData('15:00', 2000),
// //   // createData('18:00', 2400),
// //   // createData('21:00', 2400),
// //   // createData('24:00', undefined),



// // ];

// export default function Chart(props) {

//   const [dataPoints, setDataPoints] = React.useState([]);
  
//   const [data,setData] = React.useState([]);
//   React.useEffect(() => {
//     console.log(props);
//       const fetchedDataPoints = [];
//       for (var i = 0; i < props.stock.net_worth?.length; i++) {
//         fetchedDataPoints.push({
//           x: new Date(props.stock.net_worth[i]?.date),
//           y: props.stock.net_worth[i]?.value
//         }); 
//     }
//     setDataPoints(fetchedDataPoints);
//     console.log(dataPoints);
//     }, []);

//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Today</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={dataPoints}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis
//             dataKey="time"
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           />
//           <YAxis
//             stroke={theme.palette.text.secondary}
//             style={theme.typography.body2}
//           >
//             <Label
//               angle={270}
//               position="left"
//               style={{
//                 textAnchor: 'middle',
//                 fill: theme.palette.text.primary,
//                 ...theme.typography.body1,
//               }}
//             >
//               Portfolio
//             </Label>
//           </YAxis>
//           <Line
//             isAnimationActive={false}
//             type="monotone"
//             dataKey="amount"
//             stroke={theme.palette.primary.main}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }



import React, { useState, useEffect } from 'react';
import CanvasJSReact from '../../CanvasJS/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
function Chart(props) {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    // console.log(props);
    
    const fetchedDataPoints = [];
    for (var i = 0; i < props.stock.net_worth.length; i++) {
      fetchedDataPoints.push({
        x: new Date(props.stock.net_worth[i]?.date),
        y: props.stock.net_worth[i]?.value
      });
  }setDataPoints(fetchedDataPoints);
  }, [props]);

  const options = {
    theme: "light2",
    title: {
      text: "Portfolio"
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
    </>
  );
}
 
export default Chart;


// TODO: "Add Data from Mongo to test"
// TODO: "Do we want line chart?"

import React from 'react';
import { Line } from "react-chartjs-2";
const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];


export default function Chart() {
  return (
    <Line
      data={{
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      }}
      options={{
        legend: { display: false },
        scales: {
          yAxes: [{ ticks: { min: 6, max: 16 } }],
        }
      }
      }
    />

  )
}


// new Chart("myChart", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{
//       fill: false,
//       lineTension: 0,
//       backgroundColor: "rgba(0,0,255,1.0)",
//       borderColor: "rgba(0,0,255,0.1)",
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     scales: {
//       yAxes: [{ticks: {min: 6, max:16}}],
//     }
//   }
// });


//WHere do I put this to source this file
// src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

// Renders the graph
{/* <canvas id="myChart" style="width:100%;max-width:600px"></canvas> */ }
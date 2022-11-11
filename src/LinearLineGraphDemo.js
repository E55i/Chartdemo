import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import co2data from "./data/Co2-demo.json";

export default function LinearLineGraphDemo() {
  const data = {
    datasets: [
      {
        label: "Co2 ppm",
        data: [...co2data].reverse(),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "co2",
        parsing: {
          xAxisKey: "TimeYrBP",
          yAxisKey: "Co2ppm",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Demo Co2 plot",
      },
    },
    scales: {
      co2: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div style={{ width: "1000px" }}>
      <h1>LinearLineGraphDemo</h1>
      <Line options={options} data={data} />
    </div>
  );
}

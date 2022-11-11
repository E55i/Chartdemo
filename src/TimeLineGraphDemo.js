import React from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";

export default function TimeLineGraphDemo() {
  const data = {
    datasets: [
      {
        label: "Example Set 1",
        data: [
          {
            time: "2022-11-20",
            value: "12",
          },
          {
            time: "2022-11-11",
            value: "5",
          },
          {
            time: "2022-11-06",
            value: "7",
          },
          {
            time: "2022-10-15",
            value: "10",
          },
          {
            time: "2022-09-27",
            value: "8",
          },
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },
      {
        label: "Example Set 2",
        data: [
          {
            time: "2022-11-01",
            value: "5",
          },
          {
            time: "2022-10-30",
            value: "2",
          },
          {
            time: "2022-10-22",
            value: "10",
          },
        ],
        borderColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
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
        text: "Time Line Graph Demonstration",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "month",
        },
      },
      yAxis: {
        type: "linear",
      },
    },
  };

  return (
    <div style={{ width: "1000px" }}>
      <h1>TimeLineGraphDemo</h1>
      <Line options={options} data={data} />
    </div>
  );
}

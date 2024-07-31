import React, { useEffect } from "react";
import { Chart } from "chart.js";

const chart = () => {
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "16 Mar 2018",
            borderColor: "#4A5568",
            data: [600, 400, 620, 300, 200, 600, 230, 300, 200, 200, 100, 1200],
            fill: false,
            pointBackgroundColor: "#4A5568",
            borderWidth: 3,
            pointBorderWidth: 4,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 8,
            pointHoverBorderColor: "rgba(74, 85, 104, 0.2)",
          },
        ],
      },
      options: {
        legend: {
          display: true, // Set to true to display legend
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              display: true, // Change this to true to display y-axis
            },
          ],
        },
      },
    });

    // Cleanup to remove chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default Chart;

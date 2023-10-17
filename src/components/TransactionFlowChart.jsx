import React, { useEffect, useRef } from "react";
import { Chart, DoughnutController, ArcElement } from "chart.js/auto";

// Register the necessary components and controllers
Chart.register(DoughnutController, ArcElement);

const TransactionFlowChart = ({ totalSpent, totalFunded }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); // To keep track of the chart instance

  useEffect(() => {
    if (chartRef.current) {
      // Check if a previous chart instance exists and destroy it
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          //   labels: ["Total Spent", "Total Funded"],
          datasets: [
            {
              data: [totalSpent, totalFunded],
              backgroundColor: ["#EF9645", "#5DADEC"], // Customize the colors
            },
          ],
        },
        options: {
          cutout: "75%", // Adjust the cutout value to control spacing
          borderJoinStyle: "round",
        },
      });
    }
  }, [totalSpent, totalFunded]);

  return (
    <div>
      <canvas ref={chartRef} width={80} height={80}></canvas>
    </div>
  );
};

export default TransactionFlowChart;

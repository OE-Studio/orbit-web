import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const TransactionChart = () => {
  const { transactions } = useSelector((state) => state.transactions);
  const chartRef = useRef(null);

  useEffect(() => {
    // // Extract dates and amounts from the transaction data
    // const dates = transactions.map((transaction) => {
    //   return format(Date.parse(transaction.updatedAt), "MMM dd");
    // });
    // const amounts = transactions.map((transaction) => transaction.amount);

    // Function to calculate the sum of transactions for each day

    const calculateDailySum = () => {
      const dailyData = {};
      transactions.forEach((transaction) => {
        const date = transaction.updatedAt.split("T")[0]; // Assuming updatedAt is in ISO format
        if (dailyData[date]) {
          dailyData[date] += transaction.amount;
        } else {
          dailyData[date] = transaction.amount;
        }
      });
      return dailyData;
    };

    // Get the daily sum of transactions
    const dailySum = calculateDailySum();

    // Get the last 10 days of data
    const last10Days = Object.keys(dailySum).slice(-10);
    const dates = last10Days.map((item) => {
      return format(Date.parse(item), "MMM dd");
    });
    const data = last10Days.map((date) => dailySum[date]);

    // Create the gradient background color
    const gradientColor = chartRef.current
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 400);
    gradientColor.addColorStop(0, "#C8E7FF");
    gradientColor.addColorStop(1, "rgba(241, 247, 252, 0.20)");

    // Create the chart
    // const ctx = document.getElementById("transactionChart").getContext("2d");

    const chart = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: dates,
        datasets: [
          {
            label: "Amount",
            data: data,
            fill: true,
            backgroundColor: gradientColor,
            borderColor: "#7FBBF8",
            borderWidth: 2,
            pointStyle: "circle",
            pointRadius: 3,
            pointBorderColor: "#7FBBF8",
            pointBackgroundColor: "#7FBBF8",
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      },
    });

    // // Store the chart instance in the state for later use
    // setChartData(chart);

    // // Cleanup chart on component unmount
    return () => {
      chart.destroy();
    };
  }, [transactions]);

  return (
    <div className="w-[500px]" style={{ width: "500px", overflowX: "auto" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default TransactionChart;

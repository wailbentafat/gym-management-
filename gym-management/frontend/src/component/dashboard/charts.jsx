import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const MonthlyIncomeChart = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"], 
    datasets: [
      {
        label: "Income This Month",
        data: [200, 300, 400, 250], 
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex bg-white text_black  border-white w-7/8 ml-5 mr-6 h-full rounded-lg shadow-xl">
    <div className="chart-container ">
      <h2 className="text-xl  ml-2 font-bold">Monthly Income Chart</h2>
      <Bar data={data} options={options} />
    </div>
    </div>
    
  );
};

export default MonthlyIncomeChart;

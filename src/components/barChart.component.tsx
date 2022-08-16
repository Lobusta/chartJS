import { Bar } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

function BarChart({ chartData }) {
  Chart.register(CategoryScale);
  return <Bar data={chartData} />;
}

export default BarChart;

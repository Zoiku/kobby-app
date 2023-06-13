// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
import { ChartInterface } from "../interfaces";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );

const Charts = ({ title }: ChartInterface) => {
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top" as const,
  //       display: true,
  //     },
  //     title: {
  //       display: true,
  //       text: title.title,
  //     },
  //   },
  // };

  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  // ];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "Dataset",
  //       fill: true,
  //       data: [5, 3, 2, 7, 4, 8, 3, 4, 6],
  //       backgroundColor: "rgba(53, 162, 235, 0.5)",
  //     },
  //   ],
  // };

  return (
    <div className="main_chart_container">
      <div className="inner_container">
        {/* <Line className="main_chart" options={options} data={data} /> */}
      </div>
    </div>
  );
};

export default Charts;

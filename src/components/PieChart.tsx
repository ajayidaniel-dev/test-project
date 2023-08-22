import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ sentMoney, cashout, utilities }: any) => {
  const totalMoney = cashout + sentMoney + utilities;
  const sentMoneyData = (sentMoney / totalMoney) * 360;
  const cashoutData = (cashout / totalMoney) * 360;
  const utilitiesData = (utilities / totalMoney) * 360;
  const pieData = {
    series: [sentMoneyData, cashoutData, utilitiesData],
    options: {
      chart: {
        type: "donut",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
            },
          },
        },
      },
      colors: ["#032282", "#F4BE38", "#EDE1FF"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      labels: ["Sent Money", "Cashout", "Utilities"],
    },
  };
  return (
    <div className="w-full">
      <ReactApexChart
        options={pieData.options as ApexOptions}
        series={pieData.series}
        type="donut"
      />
    </div>
  );
};

export default PieChart;

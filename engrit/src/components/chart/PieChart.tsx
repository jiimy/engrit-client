'use client'
import React from 'react';
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from 'chart.js';
import s from './chart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);


// TODO:차트 커스텀
// https://www.chartjs.org/docs/latest/samples/legend/html.html

type pieType = {
  data?: any;
}

const PieChart = ({ data }: pieType) => {
  const pieOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Pie Chart Example',
      },
      legend: {
        display: true,
        position: 'right' as const,
      },
    },
  };

  const datas = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["a", "b", "c", "d"],
    datasets: [
      {
        data: [300, 50, 100, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
      },
    ],
  };

  return (
    <div className={s.chart_wrap}>
      <div className={s.chart}>
        <Pie
          data={datas}
          options={pieOptions}
        />
      </div>
    </div>
  )
};

export default PieChart;
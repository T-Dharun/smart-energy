import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ['Bulb1', 'Bulb2'],
    datasets: [
      {
        label: 'Colors',
        data: [12, 52],
        backgroundColor: [
          '#8A2BE2', // Blue Violet
          '#9370DB', // Medium Purple
        ],
        
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data}  style={{ maxHeight: '15em' }}/>;
}

export default PieChart;

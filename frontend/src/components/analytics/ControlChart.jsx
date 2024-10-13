import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

// Register necessary components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);


const ControlChart = () => {
  const value=useSelector(item=>item.energyMeter.data);
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: value,
  };
  console.log(value);
  const options = {
    responsive: true,
    animation: {
      // Disable animations
      duration: 0, // No animation duration
    },
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      tooltip: {
        backgroundColor: '#fff', // Tooltip background
        titleColor: '#333', // Tooltip title color
        bodyColor: '#333', // Tooltip body color
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333', // Y-axis tick color
        },
      },
      x: {
        ticks: {
          color: '#333', // X-axis tick color
        },
      },
    },
  };

  return (
  
      <Line data={data} options={options} />
  
  );
};

export default ControlChart;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import './Analytics.css';

function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/analytics')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const chartData = {
    labels: data.map((entry) => entry.label),
    datasets: [
      {
        label: 'Analytics Data',
        data: data.map((entry) => entry.value),
        backgroundColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h1>Analytics</h1>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default Analytics;

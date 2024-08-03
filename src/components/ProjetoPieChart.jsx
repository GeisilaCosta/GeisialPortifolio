import React from 'react';
import { Pie } from 'react-chartjs-2';

const ProjetoPieChart = () => {
  const data = {
    labels: ['JavaScript', 'HTML/CSS', 'React', 'Java', 'TypeScript'],
    datasets: [
      {
        data: [15, 10, 8, 12, 7], 
        backgroundColor: [
          '#ff638586',
          '#36a3eb78',
          '#ffcf5673',
          '#ffa0407b',
          '#4bc0c075',
        ],
        borderColor: '#020202',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="projeto-pie-chart">
        <h3>Projetos</h3>
      <Pie data={data} />
    </div>
  );
};

export default ProjetoPieChart;

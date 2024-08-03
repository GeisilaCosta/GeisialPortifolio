import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale } from 'chart.js/auto';

ChartJS.register(LinearScale);

const Grafico = () => {
  const linguagens = [
    { label: 'JavaScript', value: 80 },
    { label: 'HTML/CSS', value: 90 },
    { label: 'React', value: 70 },
    { label: 'Java', value: 70 },
    { label: 'Node.js', value: 60 },
    { label: 'React Native', value: 100 },
  ];

  const options = {
    indexAxis: 'y', // Define o eixo Y como vertical
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: linguagens.map((linguagem) => linguagem.label),
    datasets: [
      {
        label: 'Nível de habilidade',
        data: linguagens.map((linguagem) => linguagem.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    const canvas = document.getElementById('myChart');
    if (canvas) {
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  return (
    <div className="grafico">
     <h3>Linguagens</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Grafico;

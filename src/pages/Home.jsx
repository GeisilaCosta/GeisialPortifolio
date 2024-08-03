import React from 'react';
import ViewCounter from '../components/ViewCounter';
import Grafico from '../components/Grafico';
import ProjetoPieChart from '../components/ProjetoPieChart';

const Home = () => {
  return (
    <div className="home-container">
      <div style={{ display: 'flex', flexDirection: 'row-reverse', fontSize: '10px' }}>
        <ViewCounter />
      </div>
      <h1>Olá, seja bem vindo! Eu sou Geisila Costa!!</h1>
      
      <h2>- Analista de Desenvolvimento de Sistemas e Desenvolvedora Full Stack</h2>
    
      <p className="paragrafo">Aqui você encontrará informações sobre mim, meus projetos, tecnologias, linguagens e como entrar em contato.</p>

      <div className="grafico">
        <Grafico />
        <ProjetoPieChart />
      </div>
    </div>
  );
};

export default Home;
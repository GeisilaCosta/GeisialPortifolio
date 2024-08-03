import React from 'react';

const Projects = () => {
  return (
    <div>
      <h2>Projetos</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <li>
          <h3>Projeto 1</h3>
          <p>Descrição do Projeto 1.</p>
          <button style={{ backgroundColor: 'transparent', margin: '5px', marginBottom: '50px' }}>Ver Exemplos no GitHub</button>
        </li>
        <li>
          <h3>Projeto 2</h3>
          <p>Descrição do Projeto 2.</p>
          <button style={{ backgroundColor: 'transparent', margin: '5px', marginBottom: '50px' }}>Ver Exemplos no GitHub</button>
        </li>
        <li>
          <h3>Projeto 3</h3>
          <p>Descrição do Projeto 2.</p>
          <button style={{ backgroundColor: 'transparent', margin: '5px', marginBottom: '50px' }}>Ver Exemplos no GitHub</button>
        </li>
      </ul>
    </div>
  );
};

export default Projects;

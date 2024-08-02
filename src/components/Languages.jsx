import React from 'react';
import { saveAs } from 'file-saver';
import axios from 'axios';

const Languages = () => {
  const languages = [
    {
      name: "React",
      description: "Biblioteca JavaScript para construção de interfaces de usuário.",
      pdfUrl: "/pdfs/react.pdf", // Certifique-se de ter o arquivo PDF
      githubUrl: "https://github.com/seu-usuario/react-projects"
    },
    {
      name: "Java",
      description: "Linguagem de programação orientada a objetos.",
      pdfUrl: "/pdfs/java.pdf", // Certifique-se de ter o arquivo PDF
      githubUrl: "https://github.com/seu-usuario/java-projects"
    },
    // Adicione mais linguagens aqui
  ];

  const downloadPdf = (url) => {
    axios.get(url, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        saveAs(blob, "course-content.pdf");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Linguagens</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <h3>{language.name}</h3>
            <p>{language.description}</p>
            <button onClick={() => downloadPdf(language.pdfUrl)}>Baixar Conteúdo em PDF</button>
            <a href={language.githubUrl} target="_blank" rel="noopener noreferrer">Ver Exemplos no GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;

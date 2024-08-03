import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "React",
      description: "Aprenda React do zero ao avançado.",
      content: "Conteúdo detalhado do curso de React...",
      githubUrl: "https://github.com/seu-usuario/react-projects"
    },
    {
      id: 2,
      title: " Java",
      description: "Domine a linguagem Java.",
      content: "Conteúdo detalhado do curso de Java...",
      githubUrl: "https://github.com/seu-usuario/java-projects"
    },
    {
      id:3,
      title: " PHP",
      description: "Domine a linguagem PHP.",
      content: "Conteúdo detalhado do curso de Java...",
      githubUrl: "https://github.com/seu-usuario/java-projects"
    },
  ];

  return (
    <div>
      <h2 style={{padding: '10px', marginBottom: '30px'}}>Blog</h2>
      <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {posts.map(post => (
          <li style={{ flexBasis: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
            <p>{post.description}</p>
            <a href={post.githubUrl} target="_blank" rel="noopener noreferrer">
              <button style={{ backgroundColor: 'transparent', margin: '5px', marginBottom: '50px' }}>Ver Exemplos no GitHub</button>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

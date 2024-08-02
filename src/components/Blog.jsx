import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Curso de React",
      description: "Aprenda React do zero ao avançado.",
      content: "Conteúdo detalhado do curso de React...",
    },
    {
      id: 2,
      title: "Curso de Java",
      description: "Domine a linguagem Java.",
      content: "Conteúdo detalhado do curso de Java...",
    },
    // Adicione mais posts conforme necessário
  ];

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

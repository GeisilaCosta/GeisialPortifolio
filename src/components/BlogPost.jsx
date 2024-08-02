// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const posts = [
    {
      id: 1,
      title: "Curso de React",
      content: "Conteúdo detalhado do curso de React...",
    },
    {
      id: 2,
      title: "Curso de Java",
      content: "Conteúdo detalhado do curso de Java...",
    },
    // Adicione mais posts conforme necessário
  ];

  const post = posts.find(post => post.id.toString() === id);

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Post não encontrado.</p>
      )}
    </div>
  );
};

export default BlogPost;

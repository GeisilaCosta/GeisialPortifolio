import React from 'react';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
  };

  return (
    <div className="contact-container">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Digite seu nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Digite seu email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Digite sua mensagem"
          />
        </div>
        <button style={{ backgroundColor: 'transparent' }} type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;



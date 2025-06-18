import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Agendamento.css';

const Agendamento = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setDarkTheme(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme);
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const closeChatbot = () => {
    setIsChatbotVisible(false);
  };

  const toggleTheme = () => setDarkTheme(prev => !prev);

  return (
    <div className="scheduling-page">
      <div className="top-bar">
        <Link
          to="/"
          className="back-link"
          id="backLink"
          style={{ display: isChatbotVisible ? 'none' : 'flex' }}
        >
          &#8592; Voltar
        </Link>

        <div className="theme-change" onClick={toggleTheme}>
          <i className={`fa-solid ${darkTheme ? 'fa-sun' : 'fa-moon'}`}></i>
        </div>
      </div>

      <div
        className="header"
        id="schedulingHeader"
        style={{ display: isChatbotVisible ? 'none' : 'block' }}
      >
        Bem Vindo(a) ao Agendamento Consultório Saúde +
      </div>

      <div
        className="chatbot-container card"
        id="chatbotContainer"
        style={{ display: isChatbotVisible ? 'flex' : 'none' }}
      >
        <div className="card-header">
          <h3 className="h5 mb-0">Chatbot</h3>
          <button
            className="btn btn-sm btn-danger"
            id="closeChatbot"
            onClick={closeChatbot}
          >
            X
          </button>
        </div>
        <div className="card-body chatbot-body">
          <p className="text-left">
            Bem-vindo(a)! Sou a IA Catharina, digite oi para começarmos.
          </p>
          {/* Chat messages serão renderizadas aqui */}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            id="userInput"
            placeholder="Digite sua mensagem..."
          />
          <button id="sendButton">Enviar</button>
        </div>
      </div>

      <div
        className="informations"
        id="informationsText"
        style={{ display: isChatbotVisible ? 'none' : 'block' }}
      >
        <section>
          Para iniciarmos, fale em nosso chat clicando no botão começar.
        </section>
      </div>

      <button
        className="magic-button"
        id="magicButton"
        onClick={toggleChatbot}
        style={{ display: isChatbotVisible ? 'none' : 'block' }}
      >
        Começar
      </button>
    </div>
  );
};

export default Agendamento;

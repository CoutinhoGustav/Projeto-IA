import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importando Link do React Router
import './Contato.css';

const Contato = () => {
  useEffect(() => {
    const themeChangeIcon = document.getElementById("themeChangeIcon");
    const mobileNavIcon = document.getElementById("mobileNavIcon");
    const headerNavList = document.getElementById("headerNavList");

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        themeChangeIcon.classList.replace('fa-moon', 'fa-sun');
      } else {
        document.body.classList.remove('dark-theme');
        themeChangeIcon.classList.replace('fa-sun', 'fa-moon');
      }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeChangeIcon.addEventListener('click', () => {
      let theme = 'light';
      if (document.body.classList.toggle('dark-theme')) {
        theme = 'dark';
        themeChangeIcon.classList.replace('fa-moon', 'fa-sun');
      } else {
        themeChangeIcon.classList.replace('fa-sun', 'fa-moon');
      }
      localStorage.setItem('theme', theme);
    });

    mobileNavIcon.addEventListener('click', () => {
      if (mobileNavIcon.classList.contains("fa-bars")) {
        mobileNavIcon.classList.replace("fa-bars", "fa-close");
        headerNavList.style.display = "flex";
        headerNavList.style.transform = "translateX(0)";
      } else {
        mobileNavIcon.classList.replace("fa-close", "fa-bars");
        headerNavList.style.display = "none";
        headerNavList.style.transform = "translateX(200%)";
      }
    });
  }, []);

  return (
    <div className="home-page">
      <section className="header-section">
        <div className="header-logo">
          <p>Consultório <span>Saúde+</span></p>
        </div>
        <div className="header-nav">
          <div className="mobile-nav-icon">
            <i className="fa-solid fa-bars" id="mobileNavIcon"></i>
          </div>
          <ul className="header-nav-list" id="headerNavList">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/sobre">Sobre Nós</Link></li>
            <li className="active"><Link to="/contato">Contato</Link></li>
          </ul>
          <div className="theme-change">
            <i className="fa-solid fa-moon" id="themeChangeIcon"></i>
          </div>
        </div>
      </section>

      <div className="content-container">
        <h2>Entre em Contato</h2>
        <p>Tem alguma dúvida ou gostaria de agendar uma consulta? Preencha o formulário abaixo ou utilize nossos canais de contato direto.</p>

        <section id="contact-info" className="mb-4">
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Endereço: Rua da Saúde, 123 - Centro, Cidade, Brasil</li>
            <li><i className="fas fa-phone"></i> Telefone: (XX) XXXX-XXXX</li>
            <li><i className="fas fa-envelope"></i> Email: contato@consultoriosaude.com.br</li>
            <li><i className="fab fa-whatsapp"></i> WhatsApp: (XX) XXXXX-XXXX</li>
          </ul>
        </section>

        <section id="contact-form-section" className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Seu Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Seu E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Assunto:</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Sua Mensagem:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Enviar Mensagem</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contato;

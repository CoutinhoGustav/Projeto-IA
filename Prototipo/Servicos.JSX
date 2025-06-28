<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serviços - Consultório Saúde+</title>
    <script src="https://kit.fontawesome.com/46b7ceee20.js" crossorigin="anonymous"></script>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

        :root {
            /* colors */
            --primaryColor: #98c2d3; 
            --secondaryColor: #151515;
            --mainTxtColor: #f0f0f0;
            --heroContentSpanColor: #69787e;
            --btnTxtColor: #f0f0f0;
            --socialIconColor: #69787e;
            --cardBgColor: #151515;
            --cardContainer: #7ab6ce;
            --shadowColor: rgba(0, 0, 0, 0.15);
            --accentColor: #5a9bd4;
            --hoverColor: #4a8bc2;
        }

        .dark-theme {
            /* colors */
            --primaryColor: #13163a;
            --secondaryColor: #98c2d3;
            --mainTxtColor: #f0f0f0;
            --heroContentSpanColor: #151515; 
            --socialIconColor: #98c2d3;
            --cardContainer: #2c3e50;
            --cardBgColor: #34495e;
            --shadowColor: rgba(255, 255, 255, 0.1);
            --accentColor: #3498db;
            --hoverColor: #2980b9;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, var(--primaryColor) 0%, #a8d0e6 100%);
            font-family: "Poppins", sans-serif;
            color: var(--mainTxtColor);
            line-height: 1.6;
            min-height: 100vh;
        }

        .dark-theme body {
            background: linear-gradient(135deg, var(--primaryColor) 0%, #1a1f3a 100%);
        }

        a {
            color: inherit;
            text-decoration: none;
        }

        .home-page {
            min-height: 100vh;
            width: 100%;
            padding: 40px 140px;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
        }

        .header-section {
            height: 80px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 40px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 0 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .header-logo {
            font-size: 28px;
            color: var(--mainTxtColor);
            opacity: 0;
            animation: slideInLeft 1s ease forwards;
        }

        .header-logo span {
            color: var(--secondaryColor);
            text-shadow: 0 0 10px rgba(21, 21, 21, 0.3);
        }

        .header-nav {
            display: flex;
            align-items: center;
            gap: 30px;
        }

        .header-nav-list {
            display: flex;
            list-style: none;
            gap: 30px;
            margin: 0;
        }

        .header-nav-list li {
            opacity: 0;
            transform: translateY(-50px);
        }

        .header-nav-list li:nth-child(1) { animation: slideInDown 0.8s ease forwards 0.3s; }
        .header-nav-list li:nth-child(2) { animation: slideInDown 0.8s ease forwards 0.5s; }
        .header-nav-list li:nth-child(3) { animation: slideInDown 0.8s ease forwards 0.7s; }
        .header-nav-list li:nth-child(4) { animation: slideInDown 0.8s ease forwards 0.9s; }

        .header-nav-list a {
            font-size: 18px;
            font-weight: 500;
            color: var(--mainTxtColor);
            padding: 10px 20px;
            border-radius: 25px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .header-nav-list a::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .header-nav-list a:hover::before {
            left: 100%;
        }

        .header-nav-list a:hover {
            background: var(--secondaryColor);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .header-nav-list li.active a {
            background: var(--secondaryColor);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .theme-change, .mobile-nav-icon {
            font-size: 24px;
            color: var(--mainTxtColor);
            cursor: pointer;
            padding: 10px;
            border-radius: 50%;
            transition: all 0.3s ease;
            opacity: 0;
            animation: fadeIn 1s ease forwards 1.2s;
        }

        .theme-change:hover, .mobile-nav-icon:hover {
            background: var(--secondaryColor);
            transform: scale(1.1);
        }

        .mobile-nav-icon {
            display: none;
        }

        /* Main Content */
        .main-content {
            width: 100%;
            max-width: 1200px;
            margin-top: 20px;
        }

        .page-header {
            text-align: center;
            margin-bottom: 50px;
            opacity: 0;
            animation: fadeInUp 1s ease forwards 0.5s;
        }

        .page-header h1 {
            font-size: 48px;
            font-weight: 700;
            color: var(--mainTxtColor);
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .page-header p {
            font-size: 20px;
            color: var(--heroContentSpanColor);
            max-width: 600px;
            margin: 0 auto;
        }

        /* Services Grid */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }

        .service-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            padding: 40px 30px;
            text-align: center;
            transition: all 0.4s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
            opacity: 0;
            transform: translateY(50px);
            animation: slideInUp 0.8s ease forwards;
        }

        .service-card:nth-child(1) { animation-delay: 0.2s; }
        .service-card:nth-child(2) { animation-delay: 0.4s; }
        .service-card:nth-child(3) { animation-delay: 0.6s; }
        .service-card:nth-child(4) { animation-delay: 0.8s; }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            background: rgba(255, 255, 255, 0.15);
        }

        .service-icon {
            font-size: 60px;
            color: var(--accentColor);
            margin-bottom: 20px;
            transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
            transform: scale(1.1);
            color: var(--hoverColor);
        }

        .service-card h3 {
            font-size: 24px;
            font-weight: 600;
            color: var(--mainTxtColor);
            margin-bottom: 15px;
        }

        .service-card .doctor-name {
            font-size: 18px;
            color: var(--secondaryColor);
            font-weight: 500;
            margin-bottom: 15px;
        }

        .service-card p {
            font-size: 16px;
            color: var(--heroContentSpanColor);
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .service-schedule {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 15px;
            font-size: 14px;
            color: var(--mainTxtColor);
            font-weight: 500;
        }

        /* Schedule Section */
        .schedule-section {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 50px;
            opacity: 0;
            animation: fadeInUp 1s ease forwards 1s;
        }

        .schedule-section h2 {
            font-size: 36px;
            font-weight: 700;
            color: var(--mainTxtColor);
            text-align: center;
            margin-bottom: 30px;
        }

        .schedule-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .schedule-item {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 15px;
            padding: 20px;
            transition: all 0.3s ease;
        }

        .schedule-item:hover {
            background: rgba(0, 0, 0, 0.15);
            transform: translateY(-5px);
        }

        .schedule-item h4 {
            font-size: 18px;
            color: var(--accentColor);
            margin-bottom: 10px;
        }

        .schedule-item p {
            font-size: 16px;
            color: var(--mainTxtColor);
            margin: 5px 0;
        }

        /* Contact CTA */
        .contact-cta {
            text-align: center;
            margin: 50px 0;
            opacity: 0;
            animation: fadeInUp 1s ease forwards 1.2s;
        }

        .cta-button {
            display: inline-block;
            background: linear-gradient(45deg, var(--accentColor), var(--hoverColor));
            color: white;
            padding: 15px 40px;
            border-radius: 30px;
            font-size: 18px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            color: white;
            text-decoration: none;
        }

        /* Social Icons */
        .social-icon-list {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 50px;
            opacity: 0;
            animation: fadeIn 1s ease forwards 1.5s;
        }

        .social-icon-list a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .social-icon-list a:hover {
            background: var(--secondaryColor);
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .social-icon-list svg {
            width: 24px;
            height: 24px;
            fill: var(--socialIconColor);
            transition: fill 0.3s;
        }

        .social-icon-list a:hover svg {
            fill: var(--primaryColor);
        }

        /* Animations */
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            .home-page {
                padding: 20px;
            }

            .header-section {
                height: auto;
                padding: 15px 20px;
                flex-wrap: wrap;
            }

            .header-logo {
                font-size: 24px;
            }

            .header-nav-list {
                display: none;
                position: absolute;
                top: 80px;
                right: 20px;
                background: var(--cardBgColor);
                border-radius: 15px;
                padding: 20px;
                flex-direction: column;
                gap: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                z-index: 1000;
            }

            .header-nav-list.show {
                display: flex;
            }

            .mobile-nav-icon {
                display: block;
            }

            .page-header h1 {
                font-size: 36px;
            }

            .page-header p {
                font-size: 18px;
            }

            .services-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .service-card {
                padding: 30px 20px;
            }

            .schedule-section {
                padding: 30px 20px;
            }

            .schedule-section h2 {
                font-size: 28px;
            }

            .schedule-grid {
                grid-template-columns: 1fr;
            }

            .social-icon-list {
                gap: 15px;
            }

            .social-icon-list a {
                width: 45px;
                height: 45px;
            }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
            .home-page {
                padding: 30px 50px;
            }

            .services-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="home-page">
        <section class="header-section">
            <div class="header-logo">
                <p>Consultório <span>Saúde+</span></p>
            </div>
            <div class="header-nav">
                <div class="mobile-nav-icon">
                    <i class="fa-solid fa-bars" id="mobileNavIcon"></i>
                </div>
                <ul class="header-nav-list" id="headerNavList">
                    <li><a href="#home">Home</a></li>
                    <li class="active"><a href="#servicos">Serviços</a></li>
                    <li><a href="#sobre">Sobre Nós</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                <div class="theme-change">
                    <i class="fa-solid fa-moon" id="themeChangeIcon"></i>
                </div>
            </div>
        </section>

        <div class="main-content">
            <div class="page-header">
                <h1>Nossos Serviços</h1>
                <p>Oferecemos cuidados médicos especializados com uma equipe de profissionais qualificados para atender todas as suas necessidades de saúde.</p>
            </div>

            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-stethoscope"></i>
                    </div>
                    <h3>Consulta Geral</h3>
                    <div class="doctor-name">Dr. João Silva</div>
                    <p>Atendimento clínico geral com foco na prevenção e tratamento de doenças comuns. Consultas de rotina, check-ups e acompanhamento médico personalizado.</p>
                    <div class="service-schedule">
                        <i class="fas fa-clock"></i> Segunda a Sexta<br>
                        8h às 12h
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-baby"></i>
                    </div>
                    <h3>Pediatria</h3>
                    <div class="doctor-name">Dra. Maria Oliveira</div>
                    <p>Cuidados especializados para crianças e adolescentes. Acompanhamento do desenvolvimento, vacinação e tratamento de doenças infantis.</p>
                    <div class="service-schedule">
                        <i class="fas fa-clock"></i> Segunda a Sexta<br>
                        13h às 17h
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-heartbeat"></i>
                    </div>
                    <h3>Cardiologia</h3>
                    <div class="doctor-name">Dr. Carlos Mendes</div>
                    <p>Diagnóstico e tratamento de doenças cardiovasculares. Exames cardiológicos, prevenção e acompanhamento de problemas do coração.</p>
                    <div class="service-schedule">
                        <i class="fas fa-clock"></i> Terça e Quinta<br>
                        9h às 15h
                    </div>
                </div>

                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-user-md"></i>
                    </div>
                    <h3>Dermatologia</h3>
                    <div class="doctor-name">Dra. Ana Souza</div>
                    <p>Cuidados com a saúde da pele, diagnóstico e tratamento de doenças dermatológicas. Procedimentos estéticos e preventivos.</p>
                    <div class="service-schedule">
                        <i class="fas fa-clock"></i> Quarta e Sexta<br>
                        10h às 16h
                    </div>
                </div>
            </div>

            <section class="schedule-section">
                <h2>Horários Detalhados</h2>
                <div class="schedule-grid">
                    <div class="schedule-item">
                        <h4><i class="fas fa-stethoscope"></i> Dr. João Silva - Consulta Geral</h4>
                        <p><strong>Segunda a Sexta:</strong> 8h às 12h</p>
                        <p><strong>Especialidades:</strong> Clínica Geral, Check-ups</p>
                        <p><strong>Consultas:</strong> Agendamento necessário</p>
                    </div>

                    <div class="schedule-item">
                        <h4><i class="fas fa-baby"></i> Dra. Maria Oliveira - Pediatria</h4>
                        <p><strong>Segunda a Sexta:</strong> 13h às 17h</p>
                        <p><strong>Especialidades:</strong> Pediatria, Puericultura</p>
                        <p><strong>Urgências:</strong> Atendimento prioritário</p>
                    </div>

                    <div class="schedule-item">
                        <h4><i class="fas fa-heartbeat"></i> Dr. Carlos Mendes - Cardiologia</h4>
                        <p><strong>Terça e Quinta:</strong> 9h às 15h</p>
                        <p><strong>Especialidades:</strong> Cardiologia, ECG</p>
                        <p><strong>Exames:</strong> Disponíveis no local</p>
                    </div>

                    <div class="schedule-item">
                        <h4><i class="fas fa-user-md"></i> Dra. Ana Souza - Dermatologia</h4>
                        <p><strong>Quarta e Sexta:</strong> 10h às 16h</p>
                        <p><strong>Especialidades:</strong> Dermatologia Clínica</p>
                        <p><strong>Procedimentos:</strong> Consulte disponibilidade</p>
                    </div>
                </div>
            </section>

            <div class="contact-cta">
                <h3 style="margin-bottom: 20px; color: var(--mainTxtColor);">Pronto para cuidar da sua saúde?</h3>
                <a href="#contato" class="cta-button">
                    <i class="fas fa-calendar-alt"></i> Agendar Consulta
                </a>
            </div>
        </div>

        <div class="social-icon-list">
            <a href="#" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
            </a>
            <a href="#" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.53zm6.761 2.91L0 4.697v7.104l5.803-3.53z"/>
                </svg>
            </a>
            <a href="#" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
            </a>
            <a href="#" title="Telefone">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
                </svg>
            </a>
            <a href="#" title="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13

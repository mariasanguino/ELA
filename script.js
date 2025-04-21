document.addEventListener("DOMContentLoaded", () => {
  // Definir o ano atual no rodapé
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Dados dos cursos
  const courses = [
    {
      name: "Atendimento ao Público",
      platform: "Fundação bradesco | Escola virtual",
      duration: "10h",
      url: "https://www.ev.org.br/cursos/atendimento-ao-publico",
      description: "Indicado para voluntários que atuam diretamente com crianças, pais ou visitantes da ONG.",
    },
    {
      name: "Comunicação Empresarial",
      platform: "Fundação bradesco | Escola virtual",
      duration: "12h",
      url: "https://www.ev.org.br/cursos/comunicacao-empresarial",
      description:
        "Importante para melhorar a clareza na comunicação interna, elaboração de relatórios e interação com parceiros e apoiadores da ONG.",
    },
    {
      name: "Comunicação Escrita",
      platform: "Fundação bradesco | Escola virtual",
      duration: "40h",
      url: "https://www.ev.org.br/cursos/comunicacao-escrita",
      description: "Essencial para organizar avisos, apostilas e comunicações oficiais.",
    },
    {
      name: "Contabilidade Empresarial",
      platform: "Fundação bradesco | Escola virtual",
      duration: "10h",
      url: "https://www.ev.org.br/cursos/Contabilidade-Empresarial",
      description:
        "Recomendado para colaboradores que atuam na organização de eventos, controle de doações e finanças básicas da instituição.",
    },
    {
      name: "Controle de Impulso e Manejo de Raiva, Vergonha e Inveja",
      platform: "Fundação bradesco | Escola virtual",
      duration: "04h",
      url: "https://www.ev.org.br/cursos/controle-de-impulso-e-manejo-de-raiva-vergonha-e-inveja",
      description: "Ajuda no controle emocional em situações de estresse ou conflito.",
    },
    {
      name: "Desenvolvimento Profissional",
      platform: "Fundação bradesco | Escola virtual",
      duration: "08h",
      url: "https://www.ev.org.br/cursos/desenvolvimento-profissional",
      description: "Incentiva o crescimento individual e a postura profissional dos colaboradores.",
    },
    {
      name: "Empreendedorismo e Inovação",
      platform: "Fundação bradesco | Escola virtual",
      duration: "12h",
      url: "https://www.ev.org.br/cursos/empreendedorismo-e-inovacao",
      description: "Estimula a criação de novas ideias para eventos, projetos e captação de recursos.",
    },
    {
      name: "Estratégia de Negócios",
      platform: "Fundação bradesco | Escola virtual",
      duration: "20h",
      url: "https://www.ev.org.br/cursos/estrategia-de-negocios",
      description:
        "Ajuda a estruturar ideias para novos projetos, captação de recursos e planejamento de longo prazo da ONG.",
    },
    {
      name: "Inclusividade",
      platform: "Fundação bradesco | Escola virtual",
      duration: "01h",
      url: "https://www.ev.org.br/cursos/inclusividade",
      description: "Reforça os valores da ONG sobre respeito, empatia e acolhimento.",
    },
    {
      name: "Organização Pessoal",
      platform: "Fundação bradesco | Escola virtual",
      duration: "10h",
      url: "https://www.ev.org.br/cursos/organizacao-pessoal",
      description: "Ideal para gerenciar tempo, tarefas e compromissos com mais eficiência.",
    },
    {
      name: "Postura e Imagem Profissional",
      platform: "Fundação bradesco | Escola virtual",
      duration: "08h",
      url: "https://www.ev.org.br/cursos/postura-e-imagem-profissional",
      description: "Contribui para a apresentação e postura ética durante eventos e reuniões.",
    },
    {
      name: "Processo de Julgamento e Tomada de Decisões Responsáveis",
      platform: "Fundação bradesco | Escola virtual",
      duration: "04h",
      url: "https://www.ev.org.br/cursos/Processo-Julgamento-Decisoes-responsaveis",
      description:
        "Desenvolve o senso crítico e a responsabilidade ao tomar decisões importantes dentro da organização.",
    },
    {
      name: "Qualidade de Vida e Trabalho",
      platform: "Fundação bradesco | Escola virtual",
      duration: "08h",
      url: "https://www.ev.org.br/cursos/qualidade-de-vida-e-trabalho",
      description: "Apoia o equilíbrio entre a dedicação voluntária e o bem-estar pessoal.",
    },
  ]

  // Renderizar os cards dos cursos
  const coursesContainer = document.getElementById("courses-container")

  courses.forEach((course) => {
    const courseCard = document.createElement("div")
    courseCard.className = "course-card"

    courseCard.innerHTML = `
            <div class="course-header">
                <h3 class="course-title">${course.name}</h3>
            </div>
            <div class="course-content">
                <p class="course-detail"><span>Plataforma:</span> ${course.platform}</p>
                ${course.duration ? `<p class="course-detail"><span>Duração:</span> ${course.duration}</p>` : ""}
                <p class="course-description">
                    <span>Descrição:</span><br>
                    ${course.description}
                </p>
            </div>
            <div class="course-footer">
                <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="course-button">
                    Acessar Curso <span class="icon">→</span>
                </a>
            </div>
        `

    coursesContainer.appendChild(courseCard)
  })
})

const atividades = [
  { periodo: "2026, dez (previsto)", titulo: "Conclusão do curso", descricao: "Conclusão do curso técnico em Informática." },
  { periodo: "2026, out", titulo: "FETECMS 2026", descricao: "Segunda participação na Feira de Tecnologias, Engenharias e Ciências de Mato Grosso do Sul" },
  { periodo: "2026, out", titulo: "FECINOVA 2026", descricao: "Segunda participação na Feira de Ciências e Tecnologia de Nova Andradina" },
  { periodo: "2026, out", titulo: "Monitoria", descricao: "Atuação como monitor na disciplina de Matemática 2." },
  { periodo: "2026, jan", titulo: "Projeto ANDAIO", descricao: "Participação no projeto ANDAIO, no Laboratório de Geoprocessamento e Agricultura de Precisão (LAGAP)." },
  { periodo: "2025, out", titulo: "FECINOVA 2025", descricao: "Primeira participação na Feira de Ciências e Tecnologia de Nova Andradina" },
  { periodo: "2025, out", titulo: "FETECMS 2025", descricao: "Primeira participação na Feira de Tecnologias, Engenharias e Ciências de Mato Grosso do Sul" },
  { periodo: "2025, fev", titulo: "Projeto Tradução-Automatica", descricao: "Bolsista no projeto de tradução automática da língua Terena utilizando Python." },
  { periodo: "2024, fev", titulo: "Início do curso", descricao: "Primeiro contato com o curso e o Instituto Federal." }

];

const projetos = [
  { nome: "ANDAIO", descricao: "Validação de um novo método de análise da qualidade interna de ovos de galinha de maneira não destrutiva.", participacao: "Minha participação: Análises convencionais, tabulação de dados e pesquisa.", tecnologias: ["Agrárias", "Engenharias", "ImageJ", "Tinkercad"] },
  { nome: "Tradução-Automatica", descricao: "Programação de um sistema de tradução automática da língua Terena para o português com Python.", participacao: "Minha participação: Front-end, Construção do banco de dados, validação.", tecnologias: ["Python", "Git", "VS Code", "Streamlit"] }
];

const eventos = [
  { data: "Out/2026", nome: "FETECMS 2026", descricao: "Apresentação do ANDAIO por Giovana, Manuela e Sergio.", premio: "" },
  { data: "Out/2026", nome: "FECINOVA 2026", descricao: "Apresentação do ANDAIO, equipe completa.", premio: "3º lugar na categoria Ciências Agrárias e Engenharias" },
  { data: "Out/2025", nome: "FECINOVA 2025", descricao: "Participação como expositor com o projeto Tradução Automática.", premio: "3º lugar na categoria Multidisciplinar" },
  { data: "Out/2025", nome: "FETECMS 2025", descricao: "Participação como expositor com o projeto Tradução Automática.", premio: "3º lugar na categoria Linguagens", premioExtra: "Premio: Expedição Científica Pantanal Cerrado " }
];

const sites = [
  { nome: "Vozes do Povo Terena", descricao: "Voltado para não falantes de Terena com a finalidade de facilitar a comunicação.", link: "https://github.com/sergio-horta/traducao-automatica.git", imagem: "img/site-terena.jpg" },
  { nome: "Portifólio NFT", descricao: "Uma biblioteca de NFTs.", link: "https://github.com/Jean-2009/nft-portifolio.git", imagem: "img/nft-astronaut.jpg" }
];

const habilidades = [
  { grupo: "Linguagens e web", itens: ["HTML", "CSS", "JavaScript", "Python"] },
  { grupo: "Ferramentas", itens: ["Git", "GitHub", "VS Code", "Figma", "ImageJ", "Tinkercad"] },
  { grupo: "Outras", itens: ["Trabalho em equipe", "Comunicação", "Organização", "Pesquisa Científica"] }
];


const etiquetas = lista => `<div class="etiquetas">${lista.map(t => `<span class="etiqueta">${t}</span>`).join("")}</div>`;

document.getElementById("listaAtividades").innerHTML = atividades.map(a => `
  <li><time>${a.periodo}</time><h3>${a.titulo}</h3><p>${a.descricao}</p></li>`).join("");

document.getElementById("listaProjetos").innerHTML = projetos.map(p => `
  <article class="card">
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
    <p class="card__papel">${p.participacao}</p>
    ${etiquetas(p.tecnologias)}
  </article>`).join("");

document.getElementById("listaEventos").innerHTML = eventos.map(e => `
  <li>
    <time>${e.data}</time>
    <div><h3>${e.nome}</h3><p>${e.descricao}</p>${e.premio ? `<span class="premio">${e.premio}</span>` : ""}${e.premioExtra ? `<span class="premio-extra">${e.premioExtra}</span>` : ""}</div>
  </li>`).join("");

document.getElementById("listaSites").innerHTML = sites.map(s => `
  <article class="card card--site">
    <div class="miniatura">${s.imagem ? `<img src="${s.imagem}" alt="Captura de tela do site ${s.nome}" loading="lazy">` : s.nome.charAt(0)}</div>
    <div class="corpo">
      <h3>${s.nome}</h3>
      <p>${s.descricao}</p>
      <a href="${s.link}" target="_blank" rel="noopener">Ver no GitHub</a>
    </div>
  </article>`).join("");

document.getElementById("listaHabilidades").innerHTML = habilidades.map(h => `
  <div class="card"><h3>${h.grupo}</h3>${etiquetas(h.itens)}</div>`).join("");

document.getElementById("ano").textContent = new Date().getFullYear();

const menu = document.getElementById("menu");
const btn = document.getElementById("menuBtn");
btn.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  btn.setAttribute("aria-expanded", aberto);
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("aberto"); btn.setAttribute("aria-expanded", false); }
});

const links = [...menu.querySelectorAll("a")];
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(l => l.classList.toggle("ativo", l.getAttribute("href") === "#" + en.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach(s => observador.observe(s));
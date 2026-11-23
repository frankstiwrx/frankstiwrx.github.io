/* =========================================
   PORTFÓLIO 3.0 - GALERIAS DOS PROJETOS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const galerias = window.PORTFOLIO_GALLERIES || {};

  const aceitaHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;

  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // Por enquanto, não anima no celular
  if (!aceitaHover || movimentoReduzido) return;

  const projetos = document.querySelectorAll(
    "#projetos .project[data-gallery]",
  );

  projetos.forEach((projeto) => {
    const nomeGaleria = projeto.dataset.gallery;
    const imagens = galerias[nomeGaleria];

    if (!Array.isArray(imagens) || imagens.length === 0) {
      return;
    }

    // Seleciona apenas a imagem principal do card
    const imagemOriginal = projeto.querySelector(
      ":scope > div:last-child > img",
    );

    if (!imagemOriginal) return;

    const capaOriginal = imagemOriginal.getAttribute("src");

    // Cria uma moldura com duas imagens sobrepostas
    const moldura = document.createElement("div");
    moldura.className = "gallery-frame";

    imagemOriginal.replaceWith(moldura);
    moldura.appendChild(imagemOriginal);

    const imagemNova = document.createElement("img");
    imagemNova.className = "gallery-overlay";
    imagemNova.alt = "";
    imagemNova.setAttribute("aria-hidden", "true");

    moldura.appendChild(imagemNova);

    let ativo = false;
    let indice = 0;
    let timer = null;
    let fadeTimer = null;
    let sessao = 0;

    function proximaImagem(sessaoAtual) {
      if (!ativo || sessaoAtual !== sessao) return;

      const caminho = imagens[indice % imagens.length];
      indice++;

      // Carrega antes de exibir para evitar piscadas
      const preCarregamento = new Image();

      preCarregamento.onload = () => {
        if (!ativo || sessaoAtual !== sessao) return;

        imagemNova.src = caminho;
        imagemNova.classList.add("is-visible");

        clearTimeout(fadeTimer);

        fadeTimer = setTimeout(() => {
          if (!ativo || sessaoAtual !== sessao) return;

          imagemOriginal.src = caminho;
          imagemNova.classList.remove("is-visible");
        }, 650);
      };

      preCarregamento.src = caminho;

      timer = setTimeout(() => {
        proximaImagem(sessaoAtual);
      }, 2600);
    }

    projeto.addEventListener("mouseenter", () => {
      if (ativo) return;

      ativo = true;
      indice = 0;

      const sessaoAtual = ++sessao;

      timer = setTimeout(() => {
        proximaImagem(sessaoAtual);
      }, 800);
    });

    projeto.addEventListener("mouseleave", () => {
      ativo = false;
      sessao++;

      clearTimeout(timer);
      clearTimeout(fadeTimer);

      imagemNova.classList.remove("is-visible");

      // Retorna à thumbnail original
      imagemOriginal.src = capaOriginal;
    });
  });
});

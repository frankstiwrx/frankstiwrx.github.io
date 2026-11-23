/* Galeria independente dos Irmãos Miau */

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const imagens = [
    ["01-apresentacao.png", "Apresentação do jogo"],
    ["02-menu.png", "Menu principal"],
    ["03-selecao-personagens.png", "Seleção de personagens"],
    ["04-luta-academia.png", "Academia de jiu-jítsu"],
    ["05-luta-dojo.png", "Dojo de jiu-jítsu"],
    ["06-personalizacao.png", "Personalização"],
  ];

  const galeria = document.getElementById("miau-gallery");

  if (!galeria) return;

  imagens.forEach(([arquivo, titulo]) => {
    const caminho = `img/galeria/${arquivo}`;

    const link = document.createElement("a");
    link.href = caminho;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "screenshot";

    const img = document.createElement("img");
    img.src = caminho;
    img.alt = titulo + " de Aventura dos Irmãos Miau";
    img.loading = "lazy";

    const legenda = document.createElement("span");
    legenda.textContent = titulo;

    link.append(img, legenda);
    galeria.appendChild(link);
  });
});

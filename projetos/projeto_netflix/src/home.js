const populares = [
  {
    titulo: "Stranger Things",
    imagem: "./assets/filme1.jpg",
  },
  {
    titulo: "La Casa de Papel",
    imagem: "./assets/filme2.jpg",
  },
  {
    titulo: "Dark",
    imagem: "./assets/filme3.jpg",
  },
  {
    titulo: "The Witcher",
    imagem: "./assets/filme4.jpg",
  },
  {
    titulo: "Round 6",
    imagem: "./assets/filme5.jpg",
  },
  {
    titulo: "Breaking Bad",
    imagem: "./assets/filme6.jpg",
  },
];

const emAlta = [
  {
    titulo: "Breaking Bad",
    imagem: "./assets/filme6.jpg",
  },
  {
    titulo: "Round 6",
    imagem: "./assets/filme5.jpg",
  },
  {
    titulo: "The Witcher",
    imagem: "./assets/filme4.jpg",
  },
  {
    titulo: "Dark",
    imagem: "./assets/filme3.jpg",
  },
  {
    titulo: "La Casa de Papel",
    imagem: "./assets/filme2.jpg",
  },
  {
    titulo: "Stranger Things",
    imagem: "./assets/filme1.jpg",
  },
];

function criarCards(lista, containerId) {
  const container = document.getElementById(containerId);

  lista.forEach((filme) => {
    const card = document.createElement("div");

    card.className =
      "relative overflow-hidden rounded cursor-pointer transition duration-300 hover:scale-105";

    card.innerHTML = `
      <img
        src="${filme.imagem}"
        alt="${filme.titulo}"
        class="w-full aspect-video object-cover"
      >

      <div
        class="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-transparent
          to-transparent
          opacity-0
          hover:opacity-100
          transition
          duration-300
          flex
          items-end
          p-3
        "
      >
        <p class="font-bold text-white">
          ${filme.titulo}
        </p>
      </div>
    `;

    container.appendChild(card);
  });
}

criarCards(populares, "populares");
criarCards(emAlta, "em-alta");

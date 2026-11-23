/* =========================================
   PORTFÓLIO 3.0 - FILTROS DOS PROJETOS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const secao = document.getElementById("projetos");

  if (!secao) return;

  // Categorias associadas aos projetos
  const categorias = {
    "vibrotatil-title": ["hardware"],

    "ecommercefull-title": ["frontend", "backend"],

    "imagelab-title": ["frontend", "backend"],

    "ecommerceapi-title": ["backend"],

    "taskdashboard-title": ["frontend"],

    "burgerio-title": ["frontend"],

    "roupaio-title": ["frontend"],

    "netflix-title": ["frontend"],

    "julia-title": ["frontend"],

    "wiki-title": ["frontend"],

    "irmaos-miau-title": ["outros"],

    "calculadoraimc-title": ["frontend"],

    "calc-title": ["frontend"],
  };

  const botoes = secao.querySelectorAll(".project-filter");

  const projetos = secao.querySelectorAll(".project");

  const grids = secao.querySelectorAll(":scope > .grid");

  const titulos = secao.querySelectorAll(":scope > .section-title");

  function filtrarProjetos(filtro) {
    projetos.forEach((projeto) => {
      const id = projeto.getAttribute("aria-labelledby");

      const categoriasProjeto = categorias[id] || ["outros"];

      const mostrar = filtro === "todos" || categoriasProjeto.includes(filtro);

      projeto.hidden = !mostrar;
    });

    // Oculta grupos que ficaram sem projetos
    grids.forEach((grid, index) => {
      const possuiProjetos = Array.from(grid.querySelectorAll(".project")).some(
        (projeto) => !projeto.hidden,
      );

      grid.hidden = !possuiProjetos;

      if (titulos[index]) {
        titulos[index].hidden = !possuiProjetos;
      }
    });

    // Atualiza o botão selecionado
    botoes.forEach((botao) => {
      const ativo = botao.dataset.filter === filtro;

      botao.classList.toggle("is-active", ativo);

      botao.setAttribute("aria-pressed", String(ativo));
    });
  }

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      filtrarProjetos(botao.dataset.filter);
    });
  });

  filtrarProjetos("todos");
});

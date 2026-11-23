/* Página dos Irmãos Miau — carregamento da galeria existente do portfólio */
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const container = document.getElementById("miau-gallery");
  const paths = window.PORTFOLIO_GALLERIES?.["irmaos-miau"];
  if (!container || !Array.isArray(paths) || paths.length === 0) return;

  container.replaceChildren();
  paths.forEach((path, index) => {
    if (typeof path !== "string" || !/^img\/gallery\/irmaos-miau\//.test(path))
      return;
    const href = `../../${path}`;
    const link = document.createElement("a");
    link.className = "screenshot";
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute(
      "aria-label",
      `Abrir captura ${index + 1} dos Irmãos Miau`,
    );

    const img = document.createElement("img");
    img.src = href;
    img.alt = `Captura ${index + 1} de Aventura dos Irmãos Miau`;
    img.loading = "lazy";

    const caption = document.createElement("span");
    caption.textContent = `Captura ${String(index + 1).padStart(2, "0")}`;

    link.append(img, caption);
    container.appendChild(link);
  });
});

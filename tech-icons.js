/* =========================================
   PORTFÓLIO 3.0 - ÍCONES DOS PROJETOS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const techIcons = {
    Java: "java.svg",
    "Java Swing": "java.svg",
    Java2D: "java.svg",
    JavaScript: "javascript.svg",
    TypeScript: "typescript.svg",
    React: "react.svg",
    "Next.js": "nextjs.svg",
    "Node.js": "nodejs.svg",
    NestJS: "nestjs.svg",
    "Spring Boot": "spring.svg",
    Prisma: "prisma.svg",
    PostgreSQL: "postgresql.svg",
    Docker: "docker.svg",
    Git: "git.svg",
    Kotlin: "kotlin.svg",
    "C++": "cplusplus.svg",
    Arduino: "arduino.svg",
    Android: "android.svg",
    HTML: "html5.svg",
    HTML5: "html5.svg",
    CSS: "css3.svg",
    CSS3: "css3.svg",
    Redis: "redis.svg",
    Vite: "vite.svg",
    Express: "express.svg",
    "Express.js": "express.svg",
    Bootstrap: "bootstrap.svg",
    "Bootstrap 5": "bootstrap.svg",
    "Bootstrap Icons": "bootstrap.svg",
    TailwindCSS: "tailwind.svg",
    "Tailwind CSS": "tailwind.svg",
    Maven: "maven.svg",
    Vercel: "vercel.svg",
    GitHub: "github.svg",
    "OpenAI API": "openai.svg",
  };

  document.querySelectorAll(".project .skills .chip").forEach((chip) => {
    // Evita duplicar ícones
    if (chip.querySelector("img")) return;

    const nome = chip.textContent.trim();
    const arquivo = techIcons[nome];

    // Tecnologias sem ícone permanecem como texto
    if (!arquivo) return;

    const img = document.createElement("img");

    img.src = `img/tech/${arquivo}`;
    img.alt = "";
    img.loading = "lazy";
    img.setAttribute("aria-hidden", "true");

    chip.prepend(img);
  });
});

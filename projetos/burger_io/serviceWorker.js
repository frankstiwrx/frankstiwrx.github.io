// Nome do cache usado pelo PWA
const staticBurgerIo = "burger-io-pwa-v2";

// Arquivos principais salvos para uso offline
const assets = [
  "./",
  "./index.html",
  "./item_details.html",
  "./confirm_order.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./assets/burgerio_logo.png",
  "./assets/double-x.jpg",
  "./assets/o-burger-x.jpg",
  "./assets/x-bacon.jpg",
  "./assets/x-burger.jpg",
  "./assets/x-futuro.jpg",
  "./assets/x-salada.jpg",
];

// Salva os arquivos listados em cache
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticBurgerIo).then((cache) => cache.addAll(assets)),
  );
});

// Remove versões antigas do cache
self.addEventListener("activate", (activateEvent) => {
  activateEvent.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== staticBurgerIo)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
});

// Usa o cache quando disponível e busca na rede quando necessário
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((response) => {
      return response || fetch(fetchEvent.request);
    }),
  );
});

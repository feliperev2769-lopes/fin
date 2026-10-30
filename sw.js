// Service worker mínimo: necessário para o Chrome oferecer "Instalar como app".
// Não faz caching de página (o app deve sempre carregar a versão fresca do servidor),
// apenas satisfaz o requisito de PWA installable.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Deixa o navegador fazer o fetch normalmente (passthrough).
  // Isso satisfaz o requisito de ter um fetch handler sem interferir no comportamento.
  // Em caso de falha de rede, retorna erro padrão (sem página offline customizada).
});

# Documentação da Etapa 03 — Interface Responsiva com CSS

## Interfaces Apresentadas
1. **Página Inicial / Vitrine (`tela-01`):** `src/index.html`
2. **Formulário de Agendamento (`tela-02`):** `src/agendar.html`
3. **Painel Administrativo (`tela-03`):** `src/admin.html`

## Viewports Utilizados nas Evidências
- **Desktop:** 1440 × 900 px
- **Tablet:** 768 × 1024 px
- **Smartphone:** 390 × 844 px

## Breakpoints Utilizados e Decisões de Responsividade
- **Desktop (> 900px):** O menu `<nav ul>` exibe os links alinhados horizontalmente com Flexbox (`display: flex`) e o contêiner de serviços (`#container-servicos`) organiza os cartões em 3 colunas com CSS Grid (`grid-template-columns: repeat(3, 1fr)`).
- **Breakpoint 1 — Tablet (`@media (max-width: 900px)`):** O grid de serviços passa para 2 colunas (`repeat(2, 1fr)`) e o espaçamento interno de `main` e `form` é ajustado para telas intermediárias (como 768 × 1024 px).
- **Breakpoint 2 — Smartphone (`@media (max-width: 600px)`):** O grid de serviços passa para 1 coluna (`1fr`), o menu de navegação empilha os links verticalmente (`flex-direction: column`) e a tabela administrativa adapta suas células para evitar corte horizontal em telas estreitas (como 390 × 844 px).

## Localização do Arquivo CSS
Todo o código CSS da aplicação encontra-se em `/src/style.css`.

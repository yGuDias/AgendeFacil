# Decisões de Arquitetura — AgendeFácil

## Decisões de HTML Semântico — Etapa 02
- **Páginas Criadas:** `src/index.html` (vitrine de serviços), `src/agendar.html` (formulário de agendamento) e `src/admin.html` (painel administrativo).
- **Marcos Semânticos (Landmarks):** Utilizamos `<header>`, `<nav>`, `<main>` e `<footer>` para estruturar todas as interfaces, favorecendo acessibilidade e leitura por tecnologias assistivas.
- **Agrupamento de Conteúdo:** Utilizamos `<section>` e `<article>` na página inicial para organizar blocos temáticos e cartões independentes de serviço.
- **Formulários Acessíveis:** Em `src/agendar.html`, utilizamos `<fieldset>`, `<legend>` e `<label for="...">` associados aos respectivos campos por `id`.

## Decisões de Estilização e Responsividade — Etapa 03
- **CSS Externo:** Todo o estilo foi centralizado em `src/style.css`, evitando duplicação entre as páginas.
- **Flexbox e CSS Grid:** Utilizamos `display: flex` no menu de navegação (`nav ul`) e `display: grid` na vitrine de serviços (`#container-servicos`) para organizar os cartões em colunas proporcionais.
- **Múltiplos Breakpoints:** Implementamos dois pontos de quebra (`@media (max-width: 900px)` para tablets e `@media (max-width: 600px)` para smartphones), ajustando o grid de cartões, o empilhamento do menu e a visualização da tabela administrativa.

## Decisões de Interatividade — Etapa 04
- **Manipulação do DOM:** Utilizamos JavaScript Vanilla com `document.addEventListener("DOMContentLoaded")` para manipular elementos após o carregamento da árvore DOM.
- **Validação e Situações Inválidas:** Configuramos o atributo `min` dinâmico no campo de data e adicionamos validação explícita antes do envio para bloquear datas retroativas ou campos obrigatórios vazios, exibindo feedback visual na tela.
- **Prevenção de Comportamento Padrão:** Utilizamos `evento.preventDefault()` no formulário para interceptar o envio tradicional e processar a submissão sem recarregar a página.
- **Arrays, Iteração e Atualização Dinâmica:** Utilizamos arrays e `forEach` para percorrer serviços e botões de ação da tabela administrativa, alterando texto e estilo visual do status em tempo real.

## Decisões de Modularização e Comunicação Assíncrona — Etapa 05
- **Modularização (`ES Modules`):** A camada de comunicação foi isolada em `src/api.js` com `export`, sendo importada em `src/script.js` via `import`.
- **Fetch API e `async/await`:** Implementamos `buscarServicos()` (consulta assíncrona a `src/api/servicos.json`) e `enviarAgendamento(dados)` (simulação assíncrona de submissão do formulário).
- **Gestão de Estados:** A interface trata explicitamente os estados de **carregamento** ("Carregando serviços..." / "Enviando agendamento..."), **sucesso** (renderização dinâmica dos cartões e confirmação do agendamento) e **erro** (mensagens amigáveis em caso de falha de rede ou resposta inválida).

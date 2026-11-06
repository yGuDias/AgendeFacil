# Decisões de Arquitetura - Etapa 02

## Páginas Criadas
- `index.html`: Página inicial para o cliente ver os serviços.
- `agendar.html`: Formulário para marcação de horário.
- `admin.html`: Painel para o gestor visualizar a agenda.

## Decisões de HTML Semântico
- Utilizamos as tags `<header>` e `<nav>` para estruturar o topo e o menu do site, criando marcos de navegação (Landmarks) para leitores de tela.
- O conteúdo central de cada página foi encapsulado na tag `<main>`.
- Utilizamos `<section>` e `<article>` na página inicial para dividir os serviços de forma autossuficiente e lógica.
- No formulário (`agendar.html`), utilizamos `<fieldset>`, `<legend>` e a tag `<label>` ligada ao `input` pelo atributo `for`, o que melhora a usabilidade em celulares e a acessibilidade.

## Decisões de Estilização - Etapa 03
- **CSS Externo:** Optamos por separar o CSS em um arquivo `style.css` dentro da pasta `src/`, garantindo que todas as páginas compartilhem a mesma identidade visual sem repetição de código.
- **Layout com Flexbox:** Utilizamos `display: flex` na navegação (`<nav>`) para centralizar os itens de forma dinâmica e moderna.
- **Responsividade (Mobile First adaptado):** Implementamos *Media Queries* (`@media (max-width: 600px)`) para adaptar o menu de navegação e as tabelas em telas menores, garantindo que a aplicação seja perfeitamente usável em smartphones.
- **UI/UX Básica:** Aplicamos feedbacks visuais (`:hover`) nos botões e links, além de um sistema de cores padronizado para dar aparência profissional ao protótipo.

## Decisões de Interatividade - Etapa 04
- **Manipulação do DOM:** Utilizámos JavaScript Vanilla (puro) com `document.addEventListener("DOMContentLoaded")` para garantir que os scripts apenas correm após a interface estar totalmente carregada.
- **Validação de Formulários:** Inserimos uma validação dinâmica no campo de data (`agendar.html`) utilizando o atributo `min` para impedir agendamentos no passado, melhorando a consistência dos dados.
- **Prevenção de Comportamento Padrão:** Utilizámos `evento.preventDefault()` no formulário para simular o envio de dados sem causar o recarregamento da página (comportamento essencial para futuras integrações com APIs assíncronas).
- **Interatividade na Tabela:** No painel administrativo (`admin.html`), implementámos a escuta de eventos (`addEventListener`) nos botões de ação para alterar dinamicamente o estado (Confirmado/Cancelado) e a cor da célula correspondente na tabela, fornecendo feedback visual imediato ao utilizador.

## Etapa 05 - Modularização e Comunicação Assíncrona
Na Etapa 05, o projeto evoluiu de uma interface estática para uma aplicação modular capaz de consumir dados externos simulados.

- **Modularização:** A lógica de comunicação com a "API" foi extraída para o ficheiro `src/api.js`, utilizando `export` e `import` no `src/script.js`, evitando um ficheiro monolítico.
- **Fetch API e Assincronismo:** Implementou-se a função assíncrona `buscarServicos()` utilizando `async/await` e a `Fetch API` para recuperar os serviços de um ficheiro JSON (`api/servicos.json`), simulando o consumo de um endpoint externo.
- **Gestão de Estados:** O Front-end trata ativamente três estados de comunicação:
  - **Carregamento:** Apresenta uma mensagem visual enquanto aguarda a Promise do Fetch resolver.
  - **Sucesso:** Limpa a mensagem e constrói o DOM de forma dinâmica, iterando sobre o JSON recebido para desenhar os cartões de serviço.
  - **Erro:** Se a rede falhar ou a Promise for rejeitada (bloco `catch`), apresenta uma mensagem de erro vermelha, impedindo falhas silenciosas na interface.
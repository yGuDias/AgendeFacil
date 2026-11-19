# AgendeFácil — Sistema de Agendamento para Pequenos Negócios

## Descrição da Aplicação
Aplicação Web responsiva para organização de agendamentos de pequenos negócios, permitindo que clientes solicitem horários e gestores acompanhem a agenda diária.

## Problema que a Aplicação Resolve
Pequenos prestadores de serviço que controlam horários manualmente (por mensagens ou anotações) enfrentam conflitos de agenda, esquecimentos e dificuldade de visualização rápida dos atendimentos.

## Tecnologias Utilizadas
- **HTML5 Semântico:** Estrutura e acessibilidade das páginas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, `<table>`).
- **CSS3:** Estilização responsiva utilizando Flexbox, CSS Grid e Media Queries.
- **JavaScript (ES Modules):** Interatividade no front-end, validação de formulários, manipulação do DOM e comunicação assíncrona (`Fetch API`, `async/await`).
- **JSON:** Estrutura de dados simulada para consulta assíncrona (`src/api/servicos.json`).

## Instruções para Execução
1. Abra a pasta do projeto no Cursor ou VS Code.
2. Instale e inicie a extensão **Live Server**.
3. Clique com o botão direito em `src/index.html` e selecione **Open with Live Server** para navegar entre `index.html`, `agendar.html` e `admin.html`.

## Instruções para Teste
- **Página Inicial (`src/index.html`):** Verifique o carregamento dinâmico e assíncrono dos serviços obtidos de `src/api/servicos.json` via `fetch`.
- **Página de Agendamento (`src/agendar.html`):** Tente selecionar uma data anterior à data atual para validar o bloqueio e submeta o formulário para testar o envio assíncrono simulado e os feedbacks de carregamento/sucesso/erro.
- **Painel Administrativo (`src/admin.html`):** Clique nos botões **Confirmar**, **Concluir** ou **Cancelar** da tabela para testar a alteração dinâmica de status e cores.

## Funcionalidades Implementadas
- Especificação de requisitos, entidades, telas e operações do domínio (Etapa 01).
- Três interfaces representativas em HTML5 semântico e acessível (Etapa 02).
- Layout responsivo com Flexbox, CSS Grid e múltiplos breakpoints (Etapa 03).
- Validação de datas, validação de entradas inválidas e atualização dinâmica de status na tabela (Etapa 04).
- Modularização com ES Modules (`script.js` e `api.js`), consulta e envio assíncrono simulado com tratamento de estados (Etapa 05).
- API REST em Node.js + Express com CRUD completo para `agendamentos` (Etapa 06)[cite: 34].

## Limitações Conhecidas
- A aplicação encontra-se na etapa de Front-end modularizado com dados simulados em JSON; as alterações de status na tabela e novos agendamentos ainda não possuem persistência definitiva em banco de dados real.
- A API da Etapa 06 utiliza persistência em arquivo JSON local sem banco de dados relacional configurado e ainda não está integrada diretamente às páginas HTML do front-end[cite: 34].
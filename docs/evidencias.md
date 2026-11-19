# Matriz e Evidências de Funcionamento

Este documento centraliza as evidências visuais e as comprovações das etapas do projeto **AgendeFácil**.

## Etapa 03 — Interface Responsiva com CSS
As capturas de tela documentam o comportamento do layout nos 3 viewports padronizados:
- **Desktop (1440 × 900 px):** `docs/evidencias/etapa-03/desktop-tela-01.png`, `docs/evidencias/etapa-03/desktop-tela-02.png`, `docs/evidencias/etapa-03/desktop-tela-03.png`
- **Tablet (768 × 1024 px):** `docs/evidencias/etapa-03/tablet-tela-01.png`, `docs/evidencias/etapa-03/tablet-tela-02.png`, `docs/evidencias/etapa-03/tablet-tela-03.png`
- **Smartphone (390 × 844 px):** `docs/evidencias/etapa-03/smartphone-tela-01.png`, `docs/evidencias/etapa-03/smartphone-tela-02.png`, `docs/evidencias/etapa-03/smartphone-tela-03.png`

## Etapa 04 — Interatividade com JavaScript

| Requisito | Funcionalidade relacionada | Arquivo(s) | Evidência |
| :--- | :--- | :--- | :--- |
| Manipulação do DOM | Bloqueio de data retroativa; criação de cartões e alteração de status | `src/script.js` | `docs/evidencias/etapa-04/bloqueio-data.png`, `docs/evidencias/etapa-04/mudanca-status.png` |
| Tratamento de eventos | Cliques nos botões da tabela e submissão do formulário | `src/script.js` | `docs/evidencias/etapa-04/alerta-sucesso.png`, `docs/evidencias/etapa-04/mudanca-status.png` |
| Validação de formulários | Bloqueio de datas no passado e checagem de campos obrigatórios | `src/script.js` | `docs/evidencias/etapa-04/bloqueio-data.png` |
| Alteração dinâmica da interface | Atualização imediata de texto, cor e mensagens de feedback | `src/script.js` | `docs/evidencias/etapa-04/mudanca-status.png` |
| Uso de funções | Funções `validarAgendamento`, `exibirFeedbackAgendamento` e `atualizarStatusLinha` | `src/script.js` | Código-fonte em `src/script.js` |
| Uso de arrays | Lista de campos obrigatórios e coleção de serviços/botões | `src/script.js` | Código-fonte em `src/script.js` |
| Métodos de iteração | Uso de `.forEach()` e `.filter()` para validar campos e vincular eventos | `src/script.js` | Código-fonte em `src/script.js` |
| Tratamento de situações inválidas | Bloqueio de data retroativa/vazia e exibição de alerta de erro na interface | `src/script.js` | `docs/evidencias/etapa-04/bloqueio-data.png` |

## Etapa 05 — Modularização e Comunicação Assíncrona

| Requisito (Etapa 05) | Comprovação | Evidência |
| :--- | :--- | :--- |
| **Operação de consulta** | Os serviços são lidos a partir de `src/api/servicos.json` via `Fetch API` e apresentados no DOM. | `docs/evidencias/etapa-05/etapa05-sucesso.png` |
| **Operação submetida** | O formulário em `src/agendar.html` envia os dados de forma assíncrona via `enviarAgendamento()`. | `docs/evidencias/etapa-05/etapa05-envio.png` |
| **Tratamento de carregamento** | Exibição da mensagem *"Carregando serviços..."* enquanto a requisição assíncrona está em andamento. | `docs/evidencias/etapa-05/etapa05-carregamento.png` |
| **Tratamento de sucesso** | Construção dinâmica dos cartões `<article>` quando o `fetch` resolve com sucesso. | `docs/evidencias/etapa-05/etapa05-sucesso.png` |
| **Tratamento de erro** | Exibição de mensagem de erro em vermelho quando a requisição assíncrona falha. | `docs/evidencias/etapa-05/etapa05-erro.png` |

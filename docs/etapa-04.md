# Documentação da Etapa 04 — Interatividade com JavaScript

## Funcionalidades Interativas Implementadas
1. **Validação de Data e Campos no Formulário (`src/agendar.html`):** Bloqueia a seleção de datas no passado definindo dinamicamente o atributo `min` com a data atual e valida o preenchimento dos campos obrigatórios e data válida antes do envio, exibindo feedback visual de erro ou sucesso na tela.
2. **Submissão Simulada e Feedback Dinâmico (`src/agendar.html`):** Intercepta o evento `submit` com `evento.preventDefault()`, impede o recarregamento da página, exibe feedback visual ao usuário e limpa o formulário após a submissão.
3. **Atualização Dinâmica de Status no Painel Administrativo (`src/admin.html`):** Percorre os botões de ação da tabela (`Confirmar`, `Concluir` e `Cancelar`), escuta cliques e atualiza dinamicamente o texto e o estilo visual da célula de status correspondente.

## Conceitos de Programação Utilizados
- **Manipulação do DOM:** `document.getElementById`, `document.querySelector`, `document.querySelectorAll`, `document.createElement`, `appendChild` e alteração de `textContent` e `style`.
- **Tratamento de Eventos:** `addEventListener` para `DOMContentLoaded`, `submit` e `click`.
- **Funções:** Funções nomeadas (`validarAgendamento`, `exibirFeedbackAgendamento`, `atualizarStatusLinha`) e arrow functions.
- **Arrays e Métodos de Iteração:** Uso de arrays de campos obrigatórios e da lista de serviços/botões percorridos com `.forEach()` e `.filter()`.

## Validações e Situações Inválidas Tratadas
- Prevenção de datas retroativas via atributo `min` e verificação explícita `data < hoje` no envio.
- Verificação de campos obrigatórios vazios (nome, telefone, e-mail, serviço, data e horário) com exibição de mensagem de erro clara na interface sem quebrar a execução.

## Instruções para Testar
1. Abra `src/agendar.html` com o **Live Server**, tente selecionar uma data passada (bloqueada) ou envie o formulário com data inválida/campo vazio para ver o tratamento de erro; depois preencha corretamente e envie para ver a confirmação.
2. Abra `src/admin.html` e clique nos botões **Confirmar**, **Concluir** ou **Cancelar** para observar a mudança imediata de texto e cor do status.

## Matriz de Evidências

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

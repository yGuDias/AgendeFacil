# Documentação da Etapa 05 — Modularização e Comunicação Assíncrona

## Organização Modular
- **`src/api.js`:** Módulo responsável pela comunicação assíncrona (`buscarServicos` e `enviarAgendamento`), exportando funções reutilizáveis via `export`.
- **`src/script.js`:** Módulo principal da interface que importa `buscarServicos` e `enviarAgendamento` via `import`, gerencia eventos e atualiza o DOM.
- **`src/api/servicos.json`:** Fonte de dados externa simulada em formato JSON contendo os serviços exibidos na vitrine.

## Operações Assíncronas e Estados Tratados
1. **Operação de consulta (`buscarServicos`):** Utiliza `Fetch API` e `async/await` para carregar `src/api/servicos.json`.
2. **Operação submetida (`enviarAgendamento`):** Utiliza `async/await` e `Promise` para simular o envio assíncrono dos dados preenchidos em `src/agendar.html`.
3. **Tratamento de carregamento:** Exibe *"Carregando serviços..."* na vitrine e *"Enviando agendamento..."* durante a submissão.
4. **Tratamento de sucesso:** Renderiza dinamicamente os cartões `<article>` na página inicial e exibe confirmação de sucesso no agendamento.
5. **Tratamento de erro:** Captura falhas via `try/catch` e exibe mensagens amigáveis em vermelho na interface.

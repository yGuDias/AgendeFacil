# Roteiro de Testes da Aplicação

Este documento registra os testes funcionais, de responsividade e de integração realizados de forma incremental no projeto **AgendeFácil**.

## Etapa 03 — Interface Responsiva com CSS
- **Teste 1:** Verificação do layout em Desktop (`1440 × 900 px`) com grid de 3 colunas e menu horizontal. *Status: Passou.*
- **Teste 2:** Verificação da adaptação em Tablet (`768 × 1024 px`) com grid de 2 colunas (`@media (max-width: 900px)`). *Status: Passou.*
- **Teste 3:** Validação do empilhamento vertical do menu, grid de 1 coluna e adaptação da tabela em Smartphone (`390 × 844 px`, `@media (max-width: 600px)`). *Status: Passou.*

## Etapa 04 — Interatividade Front-end
- **Teste 1:** Validação dinâmica do formulário de agendamento para impedir seleção de datas no passado (`min`) e campos vazios. *Status: Passou.*
- **Teste 2:** Interceptação do evento de submissão (`preventDefault`), exibição de feedback na interface e limpeza dos campos sem recarregar a página. *Status: Passou.*
- **Teste 3:** Escuta de eventos de clique na tabela do Painel Administrativo para alteração dinâmica do status (`Confirmado`, `Concluído`, `Cancelado`) e aplicação de estilos visuais. *Status: Passou.*

## Etapa 05 — Modularização e Comunicação Assíncrona
- **Teste 1:** Verificação do estado de carregamento assíncrono (`"Carregando serviços..."`) na página inicial antes da resolução do `fetch`. *Status: Passou.*
- **Teste 2:** Validação do sucesso da consulta (`Fetch API` com `async/await`) consumindo `src/api/servicos.json` e renderizando os cartões no DOM. *Status: Passou.*
- **Teste 3:** Teste de tratamento de erro forçando caminho inválido no `fetch` para comprovar a exibição da mensagem de erro ao usuário. *Status: Passou.*
- **Teste 4:** Teste de submissão assíncrona simulada do formulário de agendamento (`enviarAgendamento`) com exibição dos estados de envio e sucesso. *Status: Passou.*

# Roteiro de Testes da Aplicação

Este documento regista os testes funcionais, de responsividade e de integração realizados de forma incremental nas diferentes etapas do desenvolvimento do projeto AgendeFácil.

## Etapa 03 — Interface Responsiva com CSS
* **Teste 1:** Verificação do comportamento do layout em ecrãs de Computador (Desktop - 1440x900px). *Status: Passou.*
* **Teste 2:** Verificação do redimensionamento e espaçamento em Tablets (768x1024px). *Status: Passou.*
* **Teste 3:** Validação do empilhamento do menu de navegação e adaptação de tabelas e cartões em Telemóveis (Smartphone - 390x844px) através de Media Queries. *Status: Passou.*

## Etapa 04 — Interatividade Front-end
* **Teste 1:** Validação dinâmica do formulário de agendamento para impedir a seleção de datas no passado (`min` attribute). *Status: Passou.*
* **Teste 2:** Interceção do evento de submissão do formulário (`preventDefault`), exibição do alerta de sucesso e limpeza dos campos sem recarregar a página. *Status: Passou.*
* **Teste 3:** Escuta de eventos de clique na tabela do Painel Administrativo para alteração dinâmica do estado (Confirmado / Cancelado) e aplicação de cores e estilos visuais. *Status: Passou.*

## Etapa 05 — Modularização e Comunicação Assíncrona
* **Teste 1:** Verificação do estado de carregamento assíncrono ("Carregando serviços...") na página inicial antes da resposta do servidor simulado. *Status: Passou.*
* **Teste 2:** Validação do sucesso da operação de consulta (`Fetch API` com `async/await`) consumindo os dados do ficheiro `api/servicos.json` e gerando os cartões de serviço no DOM de forma dinâmica. *Status: Passou.*
* **Teste 3:** Teste de tratamento de erro forçando um caminho inválido no Fetch para comprovar a exibição da mensagem de erro amigável ao utilizador. *Status: Passou.*
# Proposta e Especificação do Projeto — AgendeFácil

## Nome da Aplicação
AgendeFácil

## Descrição do Problema
Pequenos prestadores de serviços (como barbearias, salões de beleza, estúdios e profissionais autônomos) costumam organizar horários de forma manual por mensagens ou anotações. Isso gera conflitos de horários, esquecimentos, falta de organização da agenda e dificuldade para os clientes consultarem e reservarem horários com praticidade.

## Público-Alvo
- **Clientes:** Pessoas que desejam consultar serviços e agendar horários de forma rápida e simples.
- **Gestores / Prestadores de Serviço:** Profissionais ou responsáveis por pequenos negócios que precisam visualizar e gerenciar a agenda diária de atendimentos.

## Objetivo Principal da Aplicação
Disponibilizar uma aplicação Web responsiva para apoiar a marcação de horários pelos clientes e o gerenciamento da agenda diária pelo gestor do negócio.

## Funcionalidades (Requisitos Funcionais)
1. **Visualização de Serviços:** Exibição dos serviços disponíveis para o cliente.
2. **Agendamento de Horário:** Formulário para o cliente selecionar serviço, data e horário e informar seus dados.
3. **Validação de Data:** Impedir a seleção de datas retroativas no formulário de agendamento.
4. **Visualização da Agenda:** Exibição dos agendamentos no painel administrativo.
5. **Atualização de Status:** Alteração do status dos agendamentos no painel administrativo (ex.: Confirmado, Concluído, Cancelado).

## Entidades e Conceitos do Domínio
- **Serviço:** Representa o atendimento oferecido (título, descrição, duração, preço).
- **Cliente:** Representa quem solicita o agendamento (nome, telefone, e-mail).
- **Agendamento:** Relaciona serviço, cliente, data, horário e status do atendimento.

## Telas / Interfaces
1. **Página Inicial (`index.html`):** Apresenta a aplicação, serviços em destaque e navegação principal.
2. **Tela de Agendamento (`agendar.html`):** Contém o formulário para reserva de horário.
3. **Painel Administrativo (`admin.html`):** Exibe a tabela de agendamentos e controles de status.

## Operações do Sistema
1. **Consultar serviços:** Obter a lista de serviços disponíveis.
2. **Criar agendamento:** Submeter os dados de um novo agendamento.
3. **Listar agendamentos:** Consultar os agendamentos registrados.
4. **Atualizar status de agendamento:** Alterar o estado de um agendamento existente.
5. **Remover/cancelar agendamento:** Cancelar ou excluir um registro de agendamento conforme a regra do sistema.

## Tecnologias Planejadas
- **Cliente (Front-end):** HTML5, CSS3 e JavaScript.
- **Servidor (Back-end):** Node.js (com serviços/rotas conforme evolução das etapas).
- **Persistência:** Arquivo JSON / banco de dados conforme a evolução do projeto ao longo das etapas.

## Visão Geral da Arquitetura
```text
[ Navegador (HTML / CSS / JS) ] <---> [ Camada de Serviço / API / Dados ] <---> [ Persistência (JSON / Banco de Dados) ]
```

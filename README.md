README.md
# AgendeFácil — Sistema de Agendamento para Pequenos Negócios

## 1. Descrição do Problema
Pequenos prestadores de serviço (como barbearias, salões de beleza, estúdios de tatuagem e profissionais autônomos) frequentemente gerenciam seus horários de atendimento de forma manual por aplicativos de mensagens (WhatsApp) ou cadernos de papel. Isso gera problemas operacionais graves, como sobreposição de horários, esquecimentos, falta de controle financeiro básico e dificuldade para os clientes visualizarem horários livres de forma autônoma e rápida.

## 2. Público-Alvo
- **Profissionais Autônomos / Prestadores de Serviço:** Barbeiros, manicures, cabeleireiros, consultores e terapeutas.
- **Clientes Finais:** Pessoas que buscam agendar horários de forma prática, rápida e sem precisar de ligações ou trocas excessivas de mensagens.

## 3. Objetivo Principal da Aplicação
Fornecer uma aplicação Web responsiva e intuitiva que permita aos clientes visualizarem serviços e realizarem agendamentos de forma autônoma, enquanto oferece aos profissionais um painel centralizado para gerenciar sua agenda diária e status de atendimento.

## 4. Funcionalidades (Requisitos Funcionais)
1. **Cadastro e Gestão de Serviços:** O profissional pode cadastrar, editar e remover serviços oferecidos (nome, descrição, preço e duração).
2. **Visualização de Disponibilidade:** Exibição dos horários livres por data e serviço.
3. **Realização de Agendamento:** Interface para o cliente selecionar serviço, data, horário e informar seus dados de contato.
4. **Painel Administrativo (Dashboard):** Tela de controle onde o profissional visualiza todos os agendamentos do dia.
5. **Gerenciamento de Status:** Capacidade de atualizar o status de um agendamento (Pendente, Confirmado, Concluído, Cancelado).

## 5. Entidades e Conceitos do Domínio
1. **Cliente:** Armazena informações de contato (Nome, Telefone, E-mail).
2. **Serviço:** Representa o serviço prestado (Título, Descrição, Preço, Duração em minutos).
3. **Agendamento:** Relaciona o Cliente, o Serviço, a Data, o Horário escolhido e o Status atual.

## 6. Telas / Interfaces da Aplicação
1. **Página Inicial (Home / Vitrine):** Apresentação do negócio e listagem dos serviços em destaque com botão de agendamento rápido.
2. **Formulário de Agendamento:** Tela interativa onde o cliente preenche seus dados e escolhe o horário desejado.
3. **Painel Administrativo:** Tela restrita para listagem, acompanhamento e alteração de status dos agendamentos diários.

## 7. Operações do Sistema (CRUD Principal)
1. `POST /api/servicos` — Cadastrar novo serviço.
2. `GET /api/servicos` — Listar todos os serviços disponíveis.
3. `POST /api/agendamentos` — Criar um novo agendamento.
4. `GET /api/agendamentos` — Listar os agendamentos realizados.
5. `PATCH /api/agendamentos/:id` — Atualizar o status de um agendamento (ex: Confirmar ou Cancelar).

## 8. Stack Tecnológica Planejada
- **Cliente (Front-end):** HTML5 Semântico, CSS3 (Flexbox/Grid), JavaScript (ES Modules).
- **Servidor (Back-end):** Node.js com Express.
- **Persistência:** Banco de dados SQLite (ou armazenamento em arquivo JSON para as etapas iniciais).

## 9. Visão Geral da Arquitetura (Diagrama)
[ Navegador / Cliente ] -- (HTTP Request / Fetch API) --> [ Servidor Node.js / Express ]
         │                                                          │
  HTML / CSS / JS                                           Lógica de Negócio / API REST
         │                                                          │
         └──────────────────<── JSON / HTML ────────────────────────┘
                                                                    │
                                                             [ Banco de Dados / SQLite ]
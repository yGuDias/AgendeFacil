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

## 10. Instruções para Execução
Para rodar este projeto localmente no seu computador:
1. Clone este repositório ou baixe a pasta do projeto.
2. Abra a pasta do projeto em um editor de código (como VS Code ou Cursor).
3. Instale a extensão **Live Server**.
4. Clique com o botão direito no arquivo `src/index.html` e selecione **Open with Live Server**. O navegador abrirá automaticamente.

## 11. Instruções para Teste
Até a Etapa 04, os testes são essencialmente visuais e de interação front-end.
- Acesse a página **Agendar Horário** (`agendar.html`), preencha os dados e clique no botão de envio para verificar a validação de data no passado e o alerta de sucesso.
- Acesse o **Painel Administrativo** (`admin.html`) e clique nos botões "Confirmar" e "Cancelar" na tabela para verificar a mudança dinâmica de status e cores manipuladas pelo JavaScript.

## 12. Limitações Conhecidas
- A aplicação atualmente funciona como um protótipo interativo de Front-end (até a Etapa 04).
- O envio do formulário ainda não persiste os dados em um banco de dados real. Ao recarregar a página (F5), os status da tabela no Painel Administrativo retornam ao estado original, pois a integração com a API e o armazenamento (Node.js/SQLite) ocorrerá nas próximas etapas do projeto.
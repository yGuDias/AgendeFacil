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
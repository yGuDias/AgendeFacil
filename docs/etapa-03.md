# Documentação da Etapa 03 - Interface Responsiva com CSS

## Interfaces Apresentadas
1. Página Inicial / Vitrine (tela-01)
2. Formulário de Agendamento (tela-02)
3. Painel Administrativo (tela-03)

## Viewports Utilizados
- **Desktop:** 1440 × 900 px
- **Tablet:** 768 × 1024 px
- **Smartphone:** 390 × 844 px

## Breakpoints Utilizados e Decisões de Responsividade
- Foi implementado um único breakpoint principal: `@media (max-width: 600px)`.
- **Decisões:** Em telas menores que 600px, o menu de navegação (`nav ul`) empilha os links verticalmente utilizando `flex-direction: column`. As tabelas do Painel Administrativo (`table, thead, tbody, th, td, tr`) perdem o comportamento de grade padrão através de `display: block`, permitindo que os dados rolem horizontalmente ou se empilhem para evitar o corte do layout.

## Localização do Arquivo CSS
Todo o CSS responsável pelo design e responsividade encontra-se no arquivo `/src/style.css`.
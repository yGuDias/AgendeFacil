# Documentação da Etapa 04 - Interatividade com JavaScript

## Funcionalidades Interativas Implementadas
Nesta etapa, implementámos 3 funcionalidades principais através de JavaScript Vanilla:
1. **Validação de Data no Formulário:** Bloqueia a seleção de datas no passado no campo `type="date"`. O script recupera a data atual (`new Date().toISOString()`) e injeta-a como o atributo `min` no DOM.
2. **Submissão Simulada e Feedback:** Impede o recarregamento padrão da página (`preventDefault`) quando o formulário é enviado, exibindo um alerta de sucesso ao utilizador e limpando os campos.
3. **Mudança Dinâmica de Status:** No Painel Administrativo, um escutador de eventos captura os cliques nos botões da tabela, altera o texto da célula de Status correspondente e modifica dinamicamente as propriedades CSS (cor e peso da fonte) consoante a ação (Confirmar ou Cancelar).

## Conceitos de Programação Utilizados
- Manipulação do DOM (`document.querySelector`, `getElementById`).
- Tratamento de eventos (`addEventListener`).
- Uso de funções anónimas (Arrow Functions).
- Iteração de coleções de nós (`forEach`).
- Estruturas de controlo condicional (`if/else`).

## Situações Inválidas Tratadas
- Prevenção do agendamento em datas retroativas, garantindo a consistência temporal da reserva.

## Instruções para Testar
- Para testar a funcionalidade 1 e 2, abra o `agendar.html` no Live Server, tente selecionar uma data no passado (deverá estar bloqueada) e submeta o formulário para visualizar o alerta de confirmação.
- Para testar a funcionalidade 3, abra o `admin.html` e clique nos botões "Confirmar" ou "Cancelar" presentes nas linhas da tabela. A cor e o texto do status adjacente deverão atualizar-se de imediato.

## Matriz de Evidências

| Requisito | Funcionalidade relacionada | Arquivo(s) | Evidência |
| :--- | :--- | :--- | :--- |
| Manipulação do DOM | Validação de data; Alteração de status | `src/script.js` | `/docs/evidencias/etapa-04/bloqueio-data.png`, `/docs/evidencias/etapa-04/mudanca-status.png` |
| Tratamento de eventos | Clique nos botões da tabela; Submissão do form | `src/script.js` | `/docs/evidencias/etapa-04/alerta-sucesso.png`, `/docs/evidencias/etapa-04/mudanca-status.png` |
| Validação de formulários | Bloqueio de datas passadas | `src/script.js` | `/docs/evidencias/etapa-04/bloqueio-data.png` |
| Alteração dinâmica da interface | Troca de cor e texto na tabela | `src/script.js` | `/docs/evidencias/etapa-04/mudanca-status.png` |
| Uso de funções | Arrow functions nos eventos | `src/script.js` | N/A (Consultar código) |
| Métodos de iteração | `forEach` nos botões da tabela | `src/script.js` | N/A (Consultar código) |
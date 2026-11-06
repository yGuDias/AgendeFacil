# Matriz e Evidências de Funcionamento

Este documento centraliza as evidências visuais e as comprovações de todas as entregas interativas e responsivas do projeto.

## Etapa 03 — Interface Responsiva com CSS
As capturas de ecrã documentam o comportamento do layout em 3 viewports padronizados.
- **Desktop (1440x900):** `evidencias/etapa-03/desktop-tela-01.png`, `desktop-tela-02.png`, `desktop-tela-03.png`
- **Tablet (768x1024):** `evidencias/etapa-03/tablet-tela-01.png`, `tablet-tela-02.png`, `tablet-tela-03.png`
- **Smartphone (390x844):** `evidencias/etapa-03/smartphone-tela-01.png`, `smartphone-tela-02.png`, `smartphone-tela-03.png`

## Etapa 04 — Interatividade com JavaScript

| Requisito | Funcionalidade relacionada | Arquivo(s) | Evidência (Ficheiro) |
| :--- | :--- | :--- | :--- |
| Manipulação do DOM | Validação de data; Alteração de status | `src/script.js` | `evidencias/etapa-04/bloqueio-data.png`, `mudanca-status.png` |
| Tratamento de eventos | Clique nos botões da tabela; Submissão do form | `src/script.js` | `evidencias/etapa-04/alerta-sucesso.png`, `mudanca-status.png` |
| Validação de formulários | Bloqueio de datas passadas | `src/script.js` | `evidencias/etapa-04/bloqueio-data.png` |
| Alteração dinâmica da interface | Troca de cor e texto na tabela | `src/script.js` | `evidencias/etapa-04/mudanca-status.png` |

## Etapa 05 — Modularização e Comunicação Assíncrona

| Requisito (Etapa 05) | Comprovação | Evidência (Ficheiro) |
| :--- | :--- | :--- |
| **Operação de consulta** | Os serviços são lidos a partir de `api/servicos.json` e apresentados no DOM. | `evidencias/etapa-05/etapa05-sucesso.png` |
| **Tratamento de sucesso** | O DOM constrói os `article` dinamicamente se o Fetch resolver corretamente. | `evidencias/etapa-05/etapa05-sucesso.png` |
| **Tratamento de erro** | Se o URL falhar, surge a mensagem "Não foi possível carregar...". | `evidencias/etapa-05/etapa05-erro.png` |
| **Operação submetida** | O formulário no Front-end captura e previne a submissão nativa para envio assíncrono. | `evidencias/etapa-05/etapa05-envio.png` |
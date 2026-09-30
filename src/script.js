// Aguarda que todo o HTML seja carregado antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Interatividade no Formulário de Agendamento (agendar.html)
    const formAgendamento = document.querySelector("form");
    if (formAgendamento) {
        // Impede a seleção de datas no passado
        const dataInput = document.getElementById("data");
        if (dataInput) {
            const hoje = new Date().toISOString().split("T")[0];
            dataInput.setAttribute("min", hoje);
        }

        // Simula o envio do formulário sem recarregar a página
        formAgendamento.addEventListener("submit", (evento) => {
            evento.preventDefault(); 
            alert("Agendamento realizado com sucesso! Em breve entraremos em contacto.");
            formAgendamento.reset(); 
        });
    }

    // 2. Interatividade no Painel Administrativo (admin.html)
    const botoesAcao = document.querySelectorAll("td button");
    botoesAcao.forEach(botao => {
        botao.addEventListener("click", (evento) => {
            const acao = evento.target.textContent;
            const linha = evento.target.closest("tr");
            const colunaStatus = linha.querySelector("td:nth-child(4)");

            // Altera o texto e a cor do status com base no botão clicado
            if (acao === "Confirmar" || acao === "Concluir") {
                colunaStatus.textContent = acao === "Confirmar" ? "Confirmado" : "Concluído";
                colunaStatus.style.color = "#18bc9c";
                colunaStatus.style.fontWeight = "bold";
            } else if (acao === "Cancelar") {
                colunaStatus.textContent = "Cancelado";
                colunaStatus.style.color = "red";
                colunaStatus.style.fontWeight = "bold";
            }
        });
    });
});
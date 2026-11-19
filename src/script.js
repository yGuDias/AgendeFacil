// src/script.js
import { buscarServicos, enviarAgendamento } from './api.js';

function obterDataHojeISO() {
    return new Date().toISOString().split("T")[0];
}

function validarAgendamento(dados, dataMinima) {
    const camposObrigatorios = [
        { chave: "nome", rotulo: "Nome Completo" },
        { chave: "telefone", rotulo: "Telefone / WhatsApp" },
        { chave: "email", rotulo: "E-mail" },
        { chave: "servico", rotulo: "Serviço" },
        { chave: "data", rotulo: "Data Desejada" },
        { chave: "horario", rotulo: "Horário" }
    ];

    const camposVazios = camposObrigatorios.filter(campo => !dados[campo.chave] || !dados[campo.chave].trim());

    if (camposVazios.length > 0) {
        return `Preencha todos os campos obrigatórios: ${camposVazios.map(c => c.rotulo).join(", ")}.`;
    }

    if (dados.data < dataMinima) {
        return "Data inválida: não é permitido agendar em datas anteriores a hoje.";
    }

    return null;
}

function exibirFeedbackAgendamento(elemento, mensagem, tipo) {
    if (!elemento) return;
    elemento.textContent = mensagem;
    elemento.style.color = tipo === "erro" ? "#c0392b" : tipo === "carregando" ? "#2c3e50" : "#128f76";
}

function atualizarStatusLinha(botaoClicado) {
    const acao = botaoClicado.textContent.trim();
    const linha = botaoClicado.closest("tr");
    const colunaStatus = linha ? linha.querySelector("td:nth-child(4)") : null;

    if (!colunaStatus) return;

    if (acao === "Confirmar" || acao === "Concluir") {
        colunaStatus.textContent = acao === "Confirmar" ? "Confirmado" : "Concluído";
        colunaStatus.style.color = "#128f76";
        colunaStatus.style.fontWeight = "bold";
    } else if (acao === "Cancelar") {
        colunaStatus.textContent = "Cancelado";
        colunaStatus.style.color = "#c0392b";
        colunaStatus.style.fontWeight = "bold";
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    // --- 1. PÁGINA INICIAL (src/index.html) ---
    const containerServicos = document.getElementById("container-servicos");
    if (containerServicos) {
        const mensagemEstado = document.getElementById("mensagem-estado");

        try {
            const servicos = await buscarServicos();
            containerServicos.innerHTML = "";

            servicos.forEach(servico => {
                const article = document.createElement("article");
                article.innerHTML = `
                    <div>
                        <h3>${servico.titulo}</h3>
                        <p>${servico.descricao}</p>
                        <p><strong>Duração:</strong> ${servico.duracao} | <strong>Preço:</strong> ${servico.preco}</p>
                    </div>
                    <a href="agendar.html?servico=${servico.id}">Agendar este serviço</a>
                `;
                containerServicos.appendChild(article);
            });
        } catch (erro) {
            if (mensagemEstado) {
                mensagemEstado.textContent = "Não foi possível carregar os serviços no momento. Tente novamente mais tarde.";
                mensagemEstado.style.color = "#c0392b";
            }
        }
    }

    // --- 2. FORMULÁRIO DE AGENDAMENTO (src/agendar.html) ---
    const formAgendamento = document.querySelector("form");
    if (formAgendamento) {
        const dataInput = document.getElementById("data");
        const feedbackEl = document.getElementById("feedback-agendamento");
        const hoje = obterDataHojeISO();

        if (dataInput) {
            dataInput.setAttribute("min", hoje);
        }

        const params = new URLSearchParams(window.location.search);
        const servicoSelecionado = params.get("servico");
        const selectServico = document.getElementById("servico");
        if (servicoSelecionado && selectServico) {
            selectServico.value = servicoSelecionado;
        }

        formAgendamento.addEventListener("submit", async (evento) => {
            evento.preventDefault();

            const dados = {
                nome: document.getElementById("nome")?.value || "",
                telefone: document.getElementById("telefone")?.value || "",
                email: document.getElementById("email")?.value || "",
                servico: document.getElementById("servico")?.value || "",
                data: document.getElementById("data")?.value || "",
                horario: document.getElementById("horario")?.value || ""
            };

            const erroValidacao = validarAgendamento(dados, hoje);
            if (erroValidacao) {
                exibirFeedbackAgendamento(feedbackEl, erroValidacao, "erro");
                return;
            }

            try {
                exibirFeedbackAgendamento(feedbackEl, "Enviando agendamento...", "carregando");
                const resposta = await enviarAgendamento(dados);
                exibirFeedbackAgendamento(feedbackEl, resposta.mensagem, "sucesso");
                alert(resposta.mensagem);
                formAgendamento.reset();
                if (dataInput) {
                    dataInput.setAttribute("min", hoje);
                }
            } catch (erro) {
                exibirFeedbackAgendamento(feedbackEl, "Erro ao enviar o agendamento. Tente novamente.", "erro");
            }
        });
    }

    // --- 3. PAINEL ADMINISTRATIVO (src/admin.html) ---
    const tabelaAdmin = document.querySelector("table");
    if (tabelaAdmin) {
        const botoesAcao = tabelaAdmin.querySelectorAll("button");

        botoesAcao.forEach(botao => {
            botao.addEventListener("click", (evento) => {
                atualizarStatusLinha(evento.target);
            });
        });
    }
});

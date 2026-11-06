// src/script.js
import { buscarServicos } from './api.js';

document.addEventListener("DOMContentLoaded", async () => {
    
    // --- LÓGICA DA PÁGINA INICIAL (index.html) ---
    const containerServicos = document.getElementById("container-servicos");
    
    // O if garante que este bloco só execute se estivermos no index.html
    if (containerServicos) {
        const mensagemEstado = document.getElementById("mensagem-estado");
        
        try {
            // Busca assíncrona (Etapa 05)
            const servicos = await buscarServicos();
            
            // Limpa a mensagem de carregamento
            containerServicos.innerHTML = ""; 
            
            // Constrói os cartões HTML
            servicos.forEach(servico => {
                const article = document.createElement("article");
                article.innerHTML = `
                    <h3>${servico.titulo}</h3>
                    <p>${servico.descricao}</p>
                    <p><strong>Duração:</strong> ${servico.duracao} | <strong>Preço:</strong> ${servico.preco}</p>
                    <a href="agendar.html?servico=${servico.id}">Agendar este serviço</a>
                `;
                containerServicos.appendChild(article);
            });
            
        } catch (erro) {
            if (mensagemEstado) {
                mensagemEstado.textContent = "Não foi possível carregar os serviços no momento. Tente novamente mais tarde.";
                mensagemEstado.style.color = "red";
            }
        }
    }

    // --- LÓGICA DO FORMULÁRIO (agendar.html) ---
    const formAgendamento = document.querySelector("form");
    if (formAgendamento) {
        const dataInput = document.getElementById("data");
        if (dataInput) {
            const hoje = new Date().toISOString().split("T")[0];
            dataInput.setAttribute("min", hoje);
        }

        formAgendamento.addEventListener("submit", (evento) => {
            evento.preventDefault(); 
            alert("Agendamento submetido com sucesso! (Integração com o Servidor pendente na próxima etapa)");
            formAgendamento.reset(); 
        });
    }

    // --- LÓGICA DO PAINEL ADMIN (admin.html) ---
    // Pega todos os botões APENAS de dentro da tabela para não dar conflito
    const tabelaAdmin = document.querySelector("table");
    if (tabelaAdmin) {
        const botoesAcao = tabelaAdmin.querySelectorAll("button");
        
        botoesAcao.forEach(botao => {
            botao.addEventListener("click", (evento) => {
                const acao = evento.target.textContent;
                const linha = evento.target.closest("tr");
                const colunaStatus = linha.querySelector("td:nth-child(4)");

                if (colunaStatus) {
                    if (acao === "Confirmar" || acao === "Concluir") {
                        colunaStatus.textContent = acao === "Confirmar" ? "Confirmado" : "Concluído";
                        colunaStatus.style.color = "#18bc9c";
                        colunaStatus.style.fontWeight = "bold";
                    } else if (acao === "Cancelar") {
                        colunaStatus.textContent = "Cancelado";
                        colunaStatus.style.color = "red";
                        colunaStatus.style.fontWeight = "bold";
                    }
                }
            });
        });
    }
});
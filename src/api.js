// src/api.js
// Módulo responsável pela comunicação assíncrona simulada (Etapa 05)

export async function buscarServicos() {
    try {
        const resposta = await fetch('api/servicos.json');

        if (!resposta.ok) {
            throw new Error(`Erro de rede: ${resposta.status}`);
        }

        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error("Falha ao buscar os serviços:", erro);
        throw erro;
    }
}

export async function enviarAgendamento(dadosAgendamento) {
    // Simula uma chamada assíncrona de envio para o servidor
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!dadosAgendamento || !dadosAgendamento.nome || !dadosAgendamento.data) {
                reject(new Error("Dados inválidos para o agendamento."));
                return;
            }

            resolve({
                status: 201,
                mensagem: "Agendamento enviado com sucesso! (Persistência em servidor será integrada na Etapa 06)",
                agendamento: dadosAgendamento
            });
        }, 400);
    });
}

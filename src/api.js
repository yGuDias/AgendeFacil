// src/api.js
// Função assíncrona que simula uma chamada a uma API externa usando Fetch
export async function buscarServicos() {
    try {
        // O fetch busca os dados do nosso arquivo JSON (simulando um servidor)
        const resposta = await fetch('api/servicos.json');
        
        if (!resposta.ok) {
            throw new Error(`Erro de rede: ${resposta.status}`);
        }
        
        const dados = await resposta.json();
        return dados; // Retorna os serviços em caso de sucesso
    } catch (erro) {
        console.error("Falha ao buscar os serviços:", erro);
        throw erro; // Repassa o erro para ser tratado pela interface
    }
}
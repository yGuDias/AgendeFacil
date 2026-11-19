import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../agendamentos.json");

const STATUS_VALIDOS = ["Pendente", "Confirmado", "Concluído", "Cancelado"];

async function lerAgendamentos() {
  const conteudo = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(conteudo);
}

async function salvarAgendamentos(dados) {
  await fs.writeFile(dataPath, JSON.stringify(dados, null, 2), "utf-8");
}

// GET /api/agendamentos — Lista todos os agendamentos
export async function listarAgendamentos(req, res) {
  try {
    const agendamentos = await lerAgendamentos();
    return res.status(200).json({
      total: agendamentos.length,
      data: agendamentos
    });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro interno ao consultar agendamentos." });
  }
}

// GET /api/agendamentos/:id — Consulta individual por ID
export async function buscarAgendamentoPorId(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ erro: "ID inválido. Informe um número inteiro positivo." });
    }

    const agendamentos = await lerAgendamentos();
    const encontrado = agendamentos.find((item) => item.id === id);

    if (!encontrado) {
      return res.status(404).json({ erro: "Agendamento não encontrado." });
    }

    return res.status(200).json({ data: encontrado });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro interno ao buscar agendamento." });
  }
}

// POST /api/agendamentos — Cria um novo agendamento
export async function criarAgendamento(req, res) {
  try {
    const { cliente, telefone, servico, data, horario } = req.body;

    if (!cliente || !servico || !data || !horario) {
      return res.status(400).json({
        erro: "Campos obrigatórios ausentes: cliente, servico, data e horario são obrigatórios."
      });
    }

    const agendamentos = await lerAgendamentos();
    const proximoId =
      agendamentos.length > 0 ? Math.max(...agendamentos.map((a) => a.id)) + 1 : 1;

    const novoAgendamento = {
      id: proximoId,
      cliente: String(cliente).trim(),
      telefone: telefone ? String(telefone).trim() : "",
      servico: String(servico).trim(),
      data: String(data).trim(),
      horario: String(horario).trim(),
      status: "Pendente"
    };

    agendamentos.push(novoAgendamento);
    await salvarAgendamentos(agendamentos);

    return res.status(201).json({
      mensagem: "Agendamento criado com sucesso.",
      data: novoAgendamento
    });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro interno ao criar agendamento." });
  }
}

// PATCH /api/agendamentos/:id — Atualiza status ou dados de um agendamento
export async function atualizarAgendamento(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ erro: "ID inválido." });
    }

    const { status, data, horario, servico } = req.body;

    if (status && !STATUS_VALIDOS.includes(status)) {
      return res.status(400).json({
        erro: `Status inválido. Use um destes: ${STATUS_VALIDOS.join(", ")}.`
      });
    }

    const agendamentos = await lerAgendamentos();
    const indice = agendamentos.findIndex((item) => item.id === id);

    if (indice === -1) {
      return res.status(404).json({ erro: "Agendamento não encontrado." });
    }

    const atual = agendamentos[indice];
    agendamentos[indice] = {
      ...atual,
      ...(status ? { status } : {}),
      ...(data ? { data: String(data).trim() } : {}),
      ...(horario ? { horario: String(horario).trim() } : {}),
      ...(servico ? { servico: String(servico).trim() } : {})
    };

    await salvarAgendamentos(agendamentos);

    return res.status(200).json({
      mensagem: "Agendamento atualizado com sucesso.",
      data: agendamentos[indice]
    });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro interno ao atualizar agendamento." });
  }
}

// DELETE /api/agendamentos/:id — Exclui um agendamento
export async function excluirAgendamento(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({ erro: "ID inválido." });
    }

    const agendamentos = await lerAgendamentos();
    const indice = agendamentos.findIndex((item) => item.id === id);

    if (indice === -1) {
      return res.status(404).json({ erro: "Agendamento não encontrado." });
    }

    const [removido] = agendamentos.splice(indice, 1);
    await salvarAgendamentos(agendamentos);

    return res.status(200).json({
      mensagem: "Agendamento excluído com sucesso.",
      data: removido
    });
  } catch (erro) {
    return res.status(500).json({ erro: "Erro interno ao excluir agendamento." });
  }
}
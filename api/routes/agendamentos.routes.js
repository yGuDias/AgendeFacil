import { Router } from "express";
import {
  listarAgendamentos,
  buscarAgendamentoPorId,
  criarAgendamento,
  atualizarAgendamento,
  excluirAgendamento
} from "../controllers/agendamentos.controller.js";

const router = Router();

router.get("/", listarAgendamentos);
router.get("/:id", buscarAgendamentoPorId);
router.post("/", criarAgendamento);
router.patch("/:id", atualizarAgendamento);
router.delete("/:id", excluirAgendamento);

export default router;
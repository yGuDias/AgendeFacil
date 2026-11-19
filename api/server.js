import express from "express";
import cors from "cors";
import agendamentosRoutes from "./routes/agendamentos.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok", servico: "AgendeFácil API" });
});

app.use("/api/agendamentos", agendamentosRoutes);

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada." });
});

app.listen(PORT, () => {
  console.log(`Servidor AgendeFácil rodando em http://localhost:${PORT}`);
});
import express from "express";
const app = express();
import { v4 } from "uuid";
import seriesRepository from "../src/series/series.repository";

seriesRepository.adicionar({
  titulo: "Orange is the New Black",
  ano: 2012,
  genero: ["Drama"],
});
seriesRepository.adicionar({
  titulo: "Dark",
  ano: 2017,
  genero: ["Ficção"],
});
seriesRepository.adicionar({
  titulo: "Succession",
  ano: 2018,
  genero: ["Drama"],
});

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.json(seriesRepository.listar());
});

export default app;

import express, { Application } from "express";
import router from "./routes";
import { AppDataSource } from "./data-source";
import "reflect-metadata";
const cors = require("cors");

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use("/api/v1", router);
const port = process.env.NODE_PORT || 3001;

AppDataSource.initialize();

app.listen(port, () => console.log("Servidor iniciado na porta: " + port));
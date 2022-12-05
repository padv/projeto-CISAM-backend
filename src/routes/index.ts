import { Router } from "express";
import pacienteRouter from "./pacienteRouter";

const router = Router();

router.use("/paciente", pacienteRouter);

export default router;
import { Router } from "express";
import { AppDataSource } from "../data-source";
import { paciente } from "../entities/paciente";

const pacienteRouter = Router();

pacienteRouter.post("/", async (req, res) => {
    console.log("FUI TOCADO!")
    const filtro: string = req.body.filtro;
    const valor: string = req.body.valor;
    const pacienteRepository = AppDataSource.getRepository(paciente);

    let lista;
    console.log(filtro)
    console.log(valor)
    if (filtro) {
        console.log("aplicarei filtro");
        lista = await pacienteRepository.find({where: {[filtro]: valor}});
    } else {
        lista = await pacienteRepository.find();
    }
    return res.json({lista});

});

pacienteRouter.delete("/:id", async (req, res) => {
    console.log("DELETE!")
    const pacienteRepository = AppDataSource.getRepository(paciente);
    const id = req.params.id;
    console.log(id);


    await pacienteRepository.delete(id);

    const lista = await pacienteRepository.find();

    return res.json({lista});

})

export default pacienteRouter;
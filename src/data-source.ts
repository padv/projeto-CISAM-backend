import "reflect-metadata";
import { DataSource, DataSourceOptions} from "typeorm";
import { consulta } from "./entities/consulta";
import { especialidadeMedica } from "./entities/especialidadeMedica";
import { paciente } from "./entities/paciente";
import { tipoAtendimento } from "./entities/tipoAtendimento";
import { usuario } from "./entities/usuario";
require("dotenv").config();

const dbType = process.env.DB_TYPE as any
const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbPort = parseInt(process.env.DB_Port as string, 10);
const dbPassword = process.env.DB_PASSWORD

export const AppDataSource = new DataSource({
    type: dbType,
    host: dbHost,
    port: dbPort,
    username: dbUser,
    password: dbPassword,
    database: dbName,
    synchronize: true,
    logging: false,
    entities: [consulta, especialidadeMedica, paciente, tipoAtendimento, usuario],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Estabelecida conexão com o banco de dados no port " + dbPort);
    })
    .catch((error) => console.log(error))

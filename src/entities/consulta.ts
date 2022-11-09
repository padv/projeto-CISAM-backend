import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { especialidadeMedica } from "./especialidadeMedica";
import { paciente } from "./paciente";
import { tipoAtendimento } from "./tipoAtendimento";
import { usuario } from "./usuario";

@Entity()
export class consulta {
    
    @PrimaryGeneratedColumn("increment")
    id_atendimento: number;

    @Column({type: "date"})
    dataSolicitacao: Date;

    @Column({type: "date"})
    dataConsulta: Date;

    @Column({type: "text"})
    queixaPaciente: string;

    @ManyToOne(() => paciente, paciente => paciente.cpf_paciente)
    Paciente_cpf: paciente["cpf_paciente"];

    @ManyToOne(() => usuario, usuario => usuario.cpf_usuario)
    Usuario_cpf: usuario["cpf_usuario"];

    @ManyToOne(() => especialidadeMedica, especialidadeMedica => especialidadeMedica.id_especialidade)
    Especialidade_idEspecialidade: especialidadeMedica["id_especialidade"];

    @ManyToOne(() => tipoAtendimento, tipoAtendimento => tipoAtendimento.id_atendimento)
    TipoAtendimento_idTipoAtendimento: tipoAtendimento["id_atendimento"];

}
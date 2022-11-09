import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class especialidadeMedica {
    
    @PrimaryGeneratedColumn("increment")
    id_especialidade: number;

    @Column({type: "varchar", length: 45})
    nomeEspecialidade: string;

}
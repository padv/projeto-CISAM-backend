import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class tipoAtendimento {
    
    @PrimaryGeneratedColumn("increment")
    id_atendimento: number;

    @Column({type: "varchar", length: 45})
    nomeAtendimento: string;

}
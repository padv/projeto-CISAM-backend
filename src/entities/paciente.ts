import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class paciente {
    
    @PrimaryColumn({type: "char", length: 11})
    cpf_paciente: string;

    @Column({type: "varchar", length: 3})
    termoLGPD: string;

    @Column({type: "varchar", length: 20})
    prontuario: string;

    @Column({type: "varchar", length: 100})
    nomePaciente: string;

    @Column({type: "varchar", length: 100, nullable: true})
    nomeSocial: string;

    @Column({type: "varchar", length: 11})
    telefone: string;

    @Column({type: "date"})
    dataNas: Date;

    @Column({type: "char", length: 2})
    sexo: string;

    @Column({type: "varchar", length: 100})
    nomeMae: string;

    @Column({type: "varchar", length: 80, unique: true})
    email: string;

    @Column({type: "varchar", length: 9})
    cep: string;

    @Column({type: "varchar", length: 100})
    logradouro: string;

    @Column({type: "varchar", length: 10})
    numero: string;

    @Column({type: "varchar", length: 100})
    complemento: string;

    @Column({type: "varchar", length: 50})
    bairro: string;

    @Column({type: "varchar", length: 50})
    cidade: string; 

    @Column({type: "varchar", length: 50})
    uf: string;   

    @Column({type: "varchar", length: 32})
    numeroSUS: string;  

    @Column({type: "varchar", length: 32, nullable: true})
    certidaoNas: string;

    @Column({type: "varchar", length: 32, nullable: true})
    certidaoCas: string;
}
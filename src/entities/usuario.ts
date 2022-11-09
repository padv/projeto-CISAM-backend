import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class usuario {
    
    @PrimaryColumn({type: "char", length: 11})
    cpf_usuario: string;

    @Column({type: "varchar", length: 100})
    nomeUsuario: string;

    @Column({type: "varchar", length: 80, unique: true})
    email: string;

    @Column({type: "varchar", length: 50})
    senha: string;

    @Column({type: "varchar", length: 11})
    telefone: string;

    @Column({type: "varchar", length: 45})
    codCategoria: string;

    @Column({type: "varchar", length: 45})
    nomeCategoria: string;

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

}
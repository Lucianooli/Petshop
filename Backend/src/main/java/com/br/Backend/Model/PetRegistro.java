package com.br.Backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "pet_registros")
public class PetRegistro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomePet;
    private String dono;
    private String nomeServico;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;

    public PetRegistro() {}

    public PetRegistro(String nomePet, String dono, String nomeServico, Endereco endereco) {
        this.nomePet = nomePet;
        this.dono = dono;
        this.nomeServico = nomeServico;
        this.endereco = endereco;
    }

    // Getters e Setters

    public Long getId() {
        return id;
    }

    public String getNomePet() {
        return nomePet;
    }

    public void setNomePet(String nomePet) {
        this.nomePet = nomePet;
    }

    public String getDono() {
        return dono;
    }

    public void setDono(String dono) {
        this.dono = dono;
    }

    public String getNomeServico() {
        return nomeServico;
    }

    public void setNomeServico(String nomeServico) {
        this.nomeServico = nomeServico;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}

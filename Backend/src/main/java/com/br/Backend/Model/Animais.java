package com.br.Backend.Model;

import jakarta.persistence.*;

@Entity
public class Animais {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nomeAnimal;
    private String descricao;
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private CategoriaAnimal animal;
    private String raca;
    @ManyToOne
    private Usuarios dono;
    private String imagem;

    public Animais() {
    }

    public Animais( String nomeAnimal, String descricao, CategoriaAnimal animal, String raca, Usuarios dono, String imagem ) {
        this.nomeAnimal = nomeAnimal;
        this.descricao = descricao;
        this.animal = animal;
        this.raca = raca;
        this.dono = dono;
        this.imagem = imagem;

    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getNomeAnimal() {
        return nomeAnimal;
    }

    public void setNomeAnimal(String nomeAnimal) {
        this.nomeAnimal = nomeAnimal;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public CategoriaAnimal getAnimal() {
        return animal;
    }

    public void setAnimal(CategoriaAnimal animal) {
        this.animal = animal;
    }

    public Usuarios getDono() {
        return dono;
    }

    public void setDono(Usuarios dono) {
        this.dono = dono;
    }
}

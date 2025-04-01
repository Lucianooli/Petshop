package com.br.Backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "CategoriaAnimal")
public class CategoriaAnimal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nomeCategoriaAnimal;

    public CategoriaAnimal() {}
    public CategoriaAnimal(String nomeCategoriaAnimal) {
        this.nomeCategoriaAnimal = nomeCategoriaAnimal;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeCategoriaAnimal() {
        return nomeCategoriaAnimal;
    }

    public void setNomeCategoriaAnimal(String nomeCategoriaAnimal) {
        this.nomeCategoriaAnimal = nomeCategoriaAnimal;
    }
}

package com.br.Backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "Categoria")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String tituloCategoria;

    public Categoria() {}

    public Categoria(String tituloCategoria) {
        this.tituloCategoria = tituloCategoria;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTituloCategoria() { return tituloCategoria; }
    public void setTituloCategoria(String tituloCategoria) { this.tituloCategoria = tituloCategoria; }
}

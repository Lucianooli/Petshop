package com.br.Backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "SubCategoria")
public class SubCategoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String tituloSubCategoria;

    public SubCategoria() {}

    public SubCategoria(String tituloSubCategoria) {
        this.tituloSubCategoria = tituloSubCategoria;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTituloSubCategoria() { return tituloSubCategoria; }
    public void setTituloSubCategoria(String tituloSubCategoria) { this.tituloSubCategoria = tituloSubCategoria; }
}

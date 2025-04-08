package com.br.Backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "SubCategoria")
public class SubCategoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String tituloSubCategoria;

    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    public SubCategoria() {}

    public SubCategoria(String tituloSubCategoria, Categoria categoria) {
        this.tituloSubCategoria = tituloSubCategoria;
        this.categoria = categoria;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getTituloSubCategoria() { return tituloSubCategoria; }
    public void setTituloSubCategoria(String tituloSubCategoria) { this.tituloSubCategoria = tituloSubCategoria; }

    public Categoria getCategoria() { return categoria; }
    public void setCategoria(Categoria categoria) { this.categoria = categoria; }
}

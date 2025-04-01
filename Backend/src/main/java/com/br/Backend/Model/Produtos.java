package com.br.Backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "Produtos")
public class Produtos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "subcategoria_id")
    private SubCategoria subCategoria;

    private String imagem;
    private double preco;
    private int quantidade;

    public Produtos() {}

    public Produtos(String nome, String descricao, Categoria categoria, SubCategoria subCategoria, String imagem, double preco, int quantidade) {
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
        this.subCategoria = subCategoria;
        this.imagem = imagem;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    // Getters e Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }

    public Categoria getCategoria() { return categoria; }
    public void setCategoria(Categoria categoria) { this.categoria = categoria; }

    public SubCategoria getSubCategoria() { return subCategoria; }
    public void setSubCategoria(SubCategoria subCategoria) { this.subCategoria = subCategoria; }

    public String getImagem() { return imagem; }
    public void setImagem(String imagem) { this.imagem = imagem; }

    public double getPreco() { return preco; }
    public void setPreco(double preco) { this.preco = preco; }

    public int getQuantidade() { return quantidade; }
    public void setQuantidade(int quantidade) { this.quantidade = quantidade; }
}

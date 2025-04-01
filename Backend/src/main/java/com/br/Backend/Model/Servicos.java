package com.br.Backend.Model;


import jakarta.persistence.*;

@Entity
@Table(name = "Servicos")
public class Servicos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String servico;
    private String descricao;
    private Double valor;
    private String imagem;



    public Servicos() {}

    public Servicos(String servico, String descricao, Double valor, String imagem) {
        this.servico = servico;
        this.descricao = descricao;
        this.valor = valor;
        this.imagem = imagem;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getServico() {
        return servico;
    }

    public void setServico(String servico) {
        this.servico = servico;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }
}

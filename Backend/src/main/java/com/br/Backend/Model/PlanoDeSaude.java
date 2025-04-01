package com.br.Backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "PlanoDeSaude")
public class PlanoDeSaude {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String PlanoDeSaude;
    private String descricao;
    private double preco;
    private String imagem;

    public PlanoDeSaude() {}

    public PlanoDeSaude(String PlanoDeSaude, String descricao, double preco, String imagem) {
        this.PlanoDeSaude = PlanoDeSaude;
        this.descricao = descricao;
        this.preco = preco;
        this.imagem = imagem;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPlanoDeSaude() {
        return PlanoDeSaude;
    }

    public void setPlanoDeSaude(String planoDeSaude) {
        PlanoDeSaude = planoDeSaude;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
}

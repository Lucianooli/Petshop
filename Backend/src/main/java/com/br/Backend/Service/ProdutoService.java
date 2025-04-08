package com.br.Backend.Service;

import com.br.Backend.Model.Produtos;
import com.br.Backend.Model.Usuarios;
import com.br.Backend.Repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    private final ProdutoRepository produtoRepository;
    public ProdutoService(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }


    public Produtos SalvarProduto(Produtos produtos) {
        return produtoRepository.save(produtos);
    }

    public List<Produtos> TodosProdutos() {
        return produtoRepository.findAll();
    }

    public Optional<Produtos> BuscarProdutoPorNome(String nome) {
        return produtoRepository.findByNome(nome);
    }
    public void DeletarProdutoId(Integer id) {
        produtoRepository.deleteById(id);
    }
}

package com.br.Backend.Service;

import com.br.Backend.Model.Produtos;
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

    public Produtos salvarProduto(Produtos produto) {
        return produtoRepository.save(produto);
    }

    public List<Produtos> todosProdutos() {
        return produtoRepository.findAll();
    }

    public Optional<Produtos> buscarProdutoPorNome(String nome) {
        return produtoRepository.findByNome(nome);
    }

    public void deletarProdutoPorId(Integer id) {
        produtoRepository.deleteById(id);
    }

    public List<Produtos> findByCategoriaId(Integer id) {
        return produtoRepository.findByCategoriaId(id);
    }
}

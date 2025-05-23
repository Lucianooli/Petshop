package com.br.Backend.Controller;

import com.br.Backend.Model.Produtos;
import com.br.Backend.Service.ProdutoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {

    private final ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @PostMapping
    public Produtos criarProduto(@RequestBody Produtos produto) {
        return produtoService.salvarProduto(produto);
    }

    @GetMapping
    public List<Produtos> listarProdutos() {
        return produtoService.todosProdutos();
    }

    @GetMapping("/buscar")
    public Optional<Produtos> buscarPorNome(@RequestParam String nome) {
        return produtoService.buscarProdutoPorNome(nome);
    }

    @DeleteMapping("/{id}")
    public void deletarProduto(@PathVariable Integer id) {
        produtoService.deletarProdutoPorId(id);
    }
    @GetMapping("/categoria/{id}")
    public List<Produtos> buscarPorCategoria(@PathVariable Integer id) {
        return produtoService.findByCategoriaId(id);
    }

}

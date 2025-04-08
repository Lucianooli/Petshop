package com.br.Backend.Controller;

import com.br.Backend.Model.Categoria;
import com.br.Backend.Service.CategoriaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = "*")
public class CategoriaController {

    private final CategoriaService categoriaService;

    public CategoriaController(CategoriaService categoriaService) {
        this.categoriaService = categoriaService;
    }

    @PostMapping
    public Categoria criarCategoria(@RequestBody Categoria categoria) {
        return categoriaService.SalvarCategoria(categoria);
    }

    @GetMapping
    public List<Categoria> listarCategorias() {
        return categoriaService.TodasCategorias();
    }

    @DeleteMapping("/{id}")
    public void deletarCategoria(@PathVariable Integer id) {
        categoriaService.DeletarCategoriaId(id);
    }
    @GetMapping("/{id}")
    public Categoria buscarCategoriaPorId(@PathVariable Integer id) {
        return categoriaService.BuscarCategoriaPorId(id);
    }

}

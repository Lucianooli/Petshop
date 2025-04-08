package com.br.Backend.Controller;

import com.br.Backend.Model.SubCategoria;
import com.br.Backend.Service.SubCategoriaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcategorias")
@CrossOrigin(origins = "*")
public class SubCategoriaController {

    private final SubCategoriaService subCategoriaService;

    public SubCategoriaController(SubCategoriaService subCategoriaService) {
        this.subCategoriaService = subCategoriaService;
    }

    @PostMapping
    public SubCategoria criarSubCategoria(@RequestBody SubCategoria subCategoria) {
        return subCategoriaService.SalvarSubCategoria(subCategoria);
    }

    @GetMapping
    public List<SubCategoria> listarSubCategorias() {
        return subCategoriaService.TodasSubCategorias();
    }

    @DeleteMapping("/{id}")
    public void deletarSubCategoria(@PathVariable Integer id) {
        subCategoriaService.DeletarCategoriaId(id);
    }
}

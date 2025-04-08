package com.br.Backend.Controller;

import com.br.Backend.Model.CategoriaAnimal;
import com.br.Backend.Service.CategoriaAnimalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categoria-animais")
@CrossOrigin(origins = "*")
public class CategoriaAnimalController {

    private final CategoriaAnimalService categoriaAnimalService;

    public CategoriaAnimalController(CategoriaAnimalService categoriaAnimalService) {
        this.categoriaAnimalService = categoriaAnimalService;
    }

    @PostMapping
    public CategoriaAnimal criar(@RequestBody CategoriaAnimal categoria) {
        return categoriaAnimalService.salvar(categoria);
    }

    @GetMapping
    public List<CategoriaAnimal> listar() {
        return categoriaAnimalService.listar();
    }
}

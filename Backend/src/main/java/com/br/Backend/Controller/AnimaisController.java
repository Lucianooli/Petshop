package com.br.Backend.Controller;

import com.br.Backend.Model.Animais;
import com.br.Backend.Service.AnimaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/animais")
@CrossOrigin(origins = "*")
public class AnimaisController {

    @Autowired
    private AnimaisService animaisService;

    @PostMapping
    public Animais cadastrarAnimal(@RequestBody Animais animal) {
        return animaisService.salvarAnimal(animal);
    }

    @GetMapping
    public List<Animais> listarAnimais() {
        return animaisService.listarAnimais();
    }
}
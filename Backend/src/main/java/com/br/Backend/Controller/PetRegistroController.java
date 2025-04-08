package com.br.Backend.Controller;

import com.br.Backend.Model.PetRegistro;
import com.br.Backend.Service.PetRegistroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registro")
@CrossOrigin(origins = "*")
public class PetRegistroController {

    @Autowired
    private PetRegistroService service;

    @PostMapping
    public ResponseEntity<PetRegistro> registrarPet(@RequestBody PetRegistro registro) {
        PetRegistro salvo = service.salvar(registro);
        return ResponseEntity.ok(salvo);
    }

    @GetMapping
    public ResponseEntity<List<PetRegistro>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PetRegistro> buscarPorId(@PathVariable Long id) {
        PetRegistro encontrado = service.buscarPorId(id);
        if (encontrado != null) {
            return ResponseEntity.ok(encontrado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

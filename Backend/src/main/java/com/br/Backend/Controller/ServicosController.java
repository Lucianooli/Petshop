package com.br.Backend.Controller;

import com.br.Backend.Model.Servicos;
import com.br.Backend.Service.ServicosService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/servicos")
@CrossOrigin(origins = "*")
public class ServicosController {

    private final ServicosService servicosService;

    public ServicosController(ServicosService servicosService) {
        this.servicosService = servicosService;
    }

    @PostMapping
    public Servicos criar(@RequestBody Servicos servico) {
        return servicosService.salvar(servico);
    }

    @GetMapping
    public List<Servicos> listar() {
        return servicosService.listar();
    }

    // 🚀 Novo endpoint para buscar serviço por ID
    @GetMapping("/{id}")
    public ResponseEntity<Servicos> buscarPorId(@PathVariable Long id) {
        Optional<Servicos> servico = servicosService.buscarPorId(id);
        return servico.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

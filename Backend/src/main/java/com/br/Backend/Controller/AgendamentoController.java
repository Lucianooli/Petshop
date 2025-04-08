package com.br.Backend.Controller;


import com.br.Backend.Model.Agendamento;
import com.br.Backend.Repository.AgendamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/agendamentos")
@CrossOrigin(origins = "*")
public class AgendamentoController {

    @Autowired
    private AgendamentoRepository agendamentoRepository;

    // Listar todos
    @GetMapping
    public List<Agendamento> listar() {
        return agendamentoRepository.findAll();
    }

    // Buscar por ID
    @GetMapping("/{id}")
    public ResponseEntity<Agendamento> buscarPorId(@PathVariable Long id) {
        Optional<Agendamento> agendamento = agendamentoRepository.findById(id);
        return agendamento.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Criar novo agendamento
    @PostMapping
    public Agendamento criar(@RequestBody Agendamento agendamento) {
        return agendamentoRepository.save(agendamento);
    }

    // Atualizar agendamento
    @PutMapping("/{id}")
    public ResponseEntity<Agendamento> atualizar(@PathVariable Long id, @RequestBody Agendamento dados) {
        Optional<Agendamento> existente = agendamentoRepository.findById(id);
        if (existente.isPresent()) {
            Agendamento agendamento = existente.get();
            agendamento.setCliente(dados.getCliente());
            agendamento.setServico(dados.getServico());
            agendamento.setDataHora(dados.getDataHora());
            return ResponseEntity.ok(agendamentoRepository.save(agendamento));
        }
        return ResponseEntity.notFound().build();
    }

    // Deletar agendamento
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (agendamentoRepository.existsById(id)) {
            agendamentoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}

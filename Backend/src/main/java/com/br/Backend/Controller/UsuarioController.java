package com.br.Backend.Controller;

import com.br.Backend.Model.Usuarios;
import com.br.Backend.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/Usuarios")
public class UsuarioController {

    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public List<Usuarios> listarUsuarios() {
        return usuarioService.TodosUsuarios();
    }


    @GetMapping("/email")
    public Optional<Usuarios> buscarPorEmail(@RequestParam String email) {
        return usuarioService.BuscarUsuarioPorEmail(email);
    }

    @PostMapping
    public Usuarios criarUsuario(@RequestBody Usuarios usuario) {
        return usuarioService.SalvarUsuario(usuario);
    }

    @PutMapping("/{id}")
    public Usuarios atualizarUsuario(@PathVariable int id, @RequestBody Usuarios usuarioAtualizado) {
        return usuarioService.AtualizarUsuario(id, usuarioAtualizado);
    }

    @DeleteMapping("/{id}")
    public void deletarPorId(@PathVariable Integer id) {
        usuarioService.DeletarUsuarioId(id);
    }

    @DeleteMapping("/email")
    public void deletarPorEmail(@RequestParam String email) {
        usuarioService.DeletarUsuarioEmail(email);
    }
}
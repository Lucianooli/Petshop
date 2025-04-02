package com.br.Backend.Service;

import com.br.Backend.Model.Usuarios;
import com.br.Backend.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuarios> TodosUsuarios() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuarios> BuscarUsuarioPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }


    public Usuarios SalvarUsuario(Usuarios usuario) {
        return usuarioRepository.save(usuario);
    }

    public void DeletarUsuarioId(Integer id) {
        usuarioRepository.deleteById(id);
    }

    public void DeletarUsuarioEmail(String email) {
        usuarioRepository.deleteByEmail(email);
    }

    public Usuarios AtualizarUsuario(int id, Usuarios usuarioAtualizado) {
        return usuarioRepository.findById(id)
                .map(usuario -> {
                    usuario.setNome(usuarioAtualizado.getNome());
                    usuario.setEmail(usuarioAtualizado.getEmail());
                    usuario.setSenha(usuarioAtualizado.getSenha());
                    usuario.setEndereco(usuarioAtualizado.getEndereco());
                    return usuarioRepository.save(usuario);
                }).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }
}

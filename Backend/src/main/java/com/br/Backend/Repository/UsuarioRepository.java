package com.br.Backend.Repository;

import com.br.Backend.Model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuarios, Integer> {
    Optional<Usuarios> findByEmail(String email);
    void deleteById(Integer id); // Ajuste na exclusão
    void deleteByEmail(String email);
}

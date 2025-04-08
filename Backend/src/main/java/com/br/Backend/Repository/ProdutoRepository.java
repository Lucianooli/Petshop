package com.br.Backend.Repository;

import com.br.Backend.Model.Produtos;
import com.br.Backend.Model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produtos, String> {
    Optional<Produtos> findByNome(String nome);
    void deleteById(Integer id); // Ajuste na exclusão

}

package com.br.Backend.Repository;

import com.br.Backend.Model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
    void deleteById(Integer id); // Ajuste na exclusão
}

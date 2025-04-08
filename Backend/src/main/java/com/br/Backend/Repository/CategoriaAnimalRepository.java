package com.br.Backend.Repository;

import com.br.Backend.Model.CategoriaAnimal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaAnimalRepository extends JpaRepository<CategoriaAnimal, Integer> {
}

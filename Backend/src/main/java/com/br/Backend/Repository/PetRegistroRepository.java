package com.br.Backend.Repository;

import com.br.Backend.Model.PetRegistro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetRegistroRepository extends JpaRepository<PetRegistro, Long> {
}

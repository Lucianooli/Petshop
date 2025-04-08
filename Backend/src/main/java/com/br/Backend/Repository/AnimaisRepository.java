package com.br.Backend.Repository;

import com.br.Backend.Model.Animais;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnimaisRepository extends JpaRepository<Animais, Integer> {
}

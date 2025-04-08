package com.br.Backend.Service;

import com.br.Backend.Model.CategoriaAnimal;
import com.br.Backend.Repository.CategoriaAnimalRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaAnimalService {

    private final CategoriaAnimalRepository categoriaAnimalRepository;

    public CategoriaAnimalService(CategoriaAnimalRepository categoriaAnimalRepository) {
        this.categoriaAnimalRepository = categoriaAnimalRepository;
    }

    public CategoriaAnimal salvar(CategoriaAnimal categoria) {
        return categoriaAnimalRepository.save(categoria);
    }

    public List<CategoriaAnimal> listar() {
        return categoriaAnimalRepository.findAll();
    }
}

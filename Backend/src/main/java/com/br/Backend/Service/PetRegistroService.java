package com.br.Backend.Service;

import com.br.Backend.Model.PetRegistro;
import com.br.Backend.Repository.PetRegistroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PetRegistroService {

    @Autowired
    private PetRegistroRepository repository;

    public PetRegistro salvar(PetRegistro petRegistro) {
        return repository.save(petRegistro);
    }

    public List<PetRegistro> listarTodos() {
        return repository.findAll();
    }

    public PetRegistro buscarPorId(Long id) {
        return repository.findById(id).orElse(null);
    }
}

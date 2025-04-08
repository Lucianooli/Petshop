package com.br.Backend.Service;

import com.br.Backend.Model.Animais;
import com.br.Backend.Repository.AnimaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimaisService {

    @Autowired
    private AnimaisRepository animaisRepository;

    public Animais salvarAnimal(Animais animal) {
        return animaisRepository.save(animal);
    }

    public List<Animais> listarAnimais() {
        return animaisRepository.findAll();
    }
}
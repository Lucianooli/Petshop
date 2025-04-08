package com.br.Backend.Service;

import com.br.Backend.Model.Servicos;
import com.br.Backend.Repository.ServicosRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServicosService {

    private final ServicosRepository servicosRepository;

    public ServicosService(ServicosRepository servicosRepository) {
        this.servicosRepository = servicosRepository;
    }

    public Servicos salvar(Servicos servico) {
        return servicosRepository.save(servico);
    }

    public Optional<Servicos> buscarPorId(Long id) {
        return servicosRepository.findById(id);
    }

    public List<Servicos> listar() {
        return servicosRepository.findAll();
    }
}

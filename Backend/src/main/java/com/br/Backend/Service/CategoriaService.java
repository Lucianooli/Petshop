package com.br.Backend.Service;

import com.br.Backend.Model.Categoria;
import com.br.Backend.Model.Produtos;
import com.br.Backend.Repository.CategoriaRepository;
import com.br.Backend.Repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {
    private final CategoriaRepository categoriaRepository;
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }


    public Categoria SalvarCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    public List<Categoria> TodasCategorias() {
        return categoriaRepository.findAll();
    }

    public Categoria BuscarCategoriaPorId(Integer id) {
        return categoriaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Categoria não encontrada"));
    }
    public void DeletarCategoriaId(Integer id) {
        categoriaRepository.deleteById(id);
    }
}

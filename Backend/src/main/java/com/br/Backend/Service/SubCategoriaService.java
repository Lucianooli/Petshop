package com.br.Backend.Service;

import com.br.Backend.Model.SubCategoria;
import com.br.Backend.Repository.SubCategoriaRepository;
import com.br.Backend.Repository.CategoriaRepository;
import com.br.Backend.Model.Categoria;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubCategoriaService {

    private final SubCategoriaRepository subCategoriaRepository;
    private final CategoriaRepository categoriaRepository;

    public SubCategoriaService(SubCategoriaRepository subCategoriaRepository, CategoriaRepository categoriaRepository) {
        this.subCategoriaRepository = subCategoriaRepository;
        this.categoriaRepository = categoriaRepository;
    }

    public SubCategoria SalvarSubCategoria(SubCategoria subCategoria) {
        // Verifica se a categoria existe
        Categoria categoria = categoriaRepository.findById(subCategoria.getCategoria().getId())
                .orElseThrow(() -> new RuntimeException("Categoria não encontrada com ID: " + subCategoria.getCategoria().getId()));

        subCategoria.setCategoria(categoria); // garantir que é a entidade gerenciada
        return subCategoriaRepository.save(subCategoria);
    }

    public List<SubCategoria> TodasSubCategorias() {
        return subCategoriaRepository.findAll();
    }

    public void DeletarCategoriaId(Integer id) {
        subCategoriaRepository.deleteById(id);
    }
}

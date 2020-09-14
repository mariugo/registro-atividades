package com.mariugo.registroatividades.repository;

import com.mariugo.registroatividades.model.Categorias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriasRepository extends JpaRepository<Categorias, Long> {

   @Query(value = "SELECT COUNT (nome) FROM Categorias")
    Long contarCategorias();

}

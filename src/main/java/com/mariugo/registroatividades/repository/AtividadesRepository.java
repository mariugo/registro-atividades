package com.mariugo.registroatividades.repository;

import com.mariugo.registroatividades.model.Atividades;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AtividadesRepository extends JpaRepository<Atividades, Long> {
}

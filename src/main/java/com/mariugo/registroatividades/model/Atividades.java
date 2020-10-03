package com.mariugo.registroatividades.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.sql.Date;
import java.time.Instant;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Atividades {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long idAtividade;

    private String descricao;

    private String local;

    private Date dataAtividade;

    @ManyToOne
    private Categorias categorias;

}

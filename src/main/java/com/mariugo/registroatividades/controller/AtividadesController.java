package com.mariugo.registroatividades.controller;

import com.mariugo.registroatividades.model.Atividades;
import com.mariugo.registroatividades.repository.AtividadesRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
@AllArgsConstructor
public class AtividadesController {

    private final AtividadesRepository atividadesRepository;

    @GetMapping("/atividades")
    public Iterable<Atividades> atividades(){
        return atividadesRepository.findAll();
    }

    @GetMapping("/atividade/{idAtividade}")
    public ResponseEntity<Atividades> atividade(@PathVariable(required = true, name = "idAtividade") Long idAtividade){
        Optional<Atividades> atividade = atividadesRepository.findById(idAtividade);

        return atividade.map(response ->
                ResponseEntity.ok().body(response)).
                orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/nova_atividade") //INSERT INTO atividade
    public @ResponseBody String novaAtividade(@RequestBody Atividades atividade){
        try {
            atividadesRepository.save(atividade);
        }catch (Exception e) {
            return ("Erro ao inserir atividade " + e.getMessage());
        }
        return "Atividade inserida com sucesso";
    }

    @DeleteMapping("/remover_atividade/{idAtividade}")
    public ResponseEntity<Atividades> removerAtividade(@PathVariable(required = true, name = "idAtividade") Long idAtividade){
        try{
            if (atividadesRepository.findById(idAtividade).isPresent()) {
                atividadesRepository.deleteById(idAtividade);
        }
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/atualizar_atividade/{idAtividade}") // UPDATE BY ID
    public @ResponseBody ResponseEntity<Atividades> atualizarAtividade(@PathVariable(required = true, name = "idAtividade") Long idAtividade, @RequestBody Atividades atividade){
        Optional<Atividades> a = atividadesRepository.findById(idAtividade);
        if (a.isPresent()){
            a.get().setDescricao(atividade.getDescricao());
            a.get().setLocal(atividade.getLocal());
            a.get().setDataAtividade(atividade.getDataAtividade());
            a.get().setCategorias(atividade.getCategorias());
            return ResponseEntity.ok(atividadesRepository.save(a.get()));
        }
        return ResponseEntity.status(404).build();
    }

    @GetMapping("/contar_atividades")
    public Long contarAtividades(){
        return atividadesRepository.contarAtividades();
    }
}

package com.mariugo.registroatividades.controller;

import com.mariugo.registroatividades.model.Categorias;
import com.mariugo.registroatividades.repository.CategoriasRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
@AllArgsConstructor
public class CategoriasController {

    private final CategoriasRepository categoriasRepository;

    @GetMapping("/categorias") //SELECT * FROM CATEGORIAS
    public Iterable<Categorias> categorias() {
        return categoriasRepository.findAll();
    }

    //Melhor utilizar a ResponseEntity para ter o status 404 e não retornar null
    @GetMapping("/categoria/{idCategoria}") // SELECT NOME FROM CATEGORIAS WHERE IDCATEGORIA=?
    public ResponseEntity<Categorias> categoria(@PathVariable(required = true, name = "idCategoria") Long idCategoria) {
        Optional<Categorias> categoria = categoriasRepository.findById(idCategoria);

        return categoria.map(response ->
                ResponseEntity.ok().body(response)).
                orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/nova_categoria") //INSERT INTO CATEGORIA
    public @ResponseBody String novaCategoria(@RequestBody Categorias categoria){
        categoriasRepository.save(categoria);
        return "Categoria inserida com sucesso";
    }

    @DeleteMapping("/remover_categoria/{idCategoria}")
    public ResponseEntity<Categorias> removerCategoria(@PathVariable(required = true, name = "idCategoria") Long idCategoria){
        if (categoriasRepository.findById(idCategoria).isPresent()) {
            categoriasRepository.deleteById(idCategoria);
            return ResponseEntity.ok().build();
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PatchMapping("/atualizar_categoria/{idCategoria}")
    public ResponseEntity<Categorias> atualizarCategoria(@PathVariable(required = true, name = "idCategoria") Long idCategoria, @RequestBody Categorias categoria){
        Categorias c = categoriasRepository.save(categoria);
        return ResponseEntity.ok().body(c);
    }

    @GetMapping("/contar_categorias")
    public Long contarCategorias(){
        return categoriasRepository.contarCategorias();
    }

}

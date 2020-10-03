import React, { Fragment } from "react";
import axios from "axios";

const CATEGORIAS_REST_API_URL = "http://localhost:8080/api/categorias";
//const UPDATE_CATEGORIA_REST_API_URL =
  //"http://localhost:8080/api/atualizar_categoria/";

const api = axios.create({
  baseURL: CATEGORIAS_REST_API_URL,
});

class UpdateCategoria extends React.Component {
  state = {
    idCategoria: "",
    nome: "",
  };

  constructor() {
    super();
    //this.atualizarCategoria();
  }

  // //UPDATE CATEGORIA
  // atualizarCategoria = async (idCategoria) => {
  //   let novaCategoria = {
  //     nome: this.state.nome,
  //   };
  //   await api
  //     .patch(UPDATE_CATEGORIA_REST_API_URL + idCategoria, novaCategoria)
  //     .then((res) => {
  //       alert("Categoria excluída!" + res);
  //       //this.selecionarCategorias();
  //     });
  // };

  render() {
    return (
      <Fragment>
        <button
          type="button"
          class="btn btn-warning mr-2"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Editar
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Nome da categoria
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <input type="text" className="form-control"></input>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Fechar
                </button>
                  <button type="button" class="btn btn-primary">
                    Salvar
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default UpdateCategoria;

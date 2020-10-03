import React from "react";
import axios from "axios";
import UpdateCategoria from "./UpdateCategoria";

const CATEGORIAS_REST_API_URL = "http://localhost:8080/api/categorias";
const NOVA_CATEGORIA_REST_API_URL = "http://localhost:8080/api/nova_categoria";
const DELETE_CATEGORIA_REST_API_URL = "http://localhost:8080/api/remover_categoria/";

const api = axios.create({
  baseURL: CATEGORIAS_REST_API_URL,
});

class Categoria extends React.Component {
  state = {
    categorias: [],
    nome: "",
  };

  constructor() {
    super();
    this.selecionarCategorias();
    this.excluirCategoria();
    this.nomeHandler = this.nomeHandler.bind(this);
    this.inserirCategoria = this.inserirCategoria.bind(this);

  }

  
  /* MÉTODOS CRUD */

  //SELECIONAR CATEGORIAS
  selecionarCategorias = async () => {
    let data = await api.get(CATEGORIAS_REST_API_URL).then(({ data }) => data);
    this.setState({ categorias: data });
  };

  
  //INSERIR CATEGORIAS
  async inserirCategoria(e) {
    e.preventDefault();
    let novaCategoria = {
      nome: this.state.nome
    }
    await axios.post(NOVA_CATEGORIA_REST_API_URL, novaCategoria).then(res =>{
      alert(res.data);
      this.selecionarCategorias();
    }); 
  }

  //EXCLUIR CATEGORIA
  excluirCategoria = async(idCategoria) => {
    await api.delete(DELETE_CATEGORIA_REST_API_URL+idCategoria).then(res => {
      alert("Categoria excluida!" + res.data);
      this.selecionarCategorias();
    });
  }

     //Handlers
  nomeHandler = (event) => {
    this.setState({ nome: event.target.value });
  };

  render() {
    return (
      <div className="container mt-5">
        <h5 className="display-4 text-center p-5">Categorias</h5>
        <form>
          <div className="container form-group row">
            <label htmlFor="nome" className=" col-form-label font-weight-bold">
              Nome da Categoria:
            </label>
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                id="nome"
                value={this.state.nome}
                onChange={this.nomeHandler}
                placeholder="Descreva a categoria"
              />
            </div>
            <button
              type="button"
              className="btn btn-success btn-m mr-5 pr-5 pl-5"
              onClick={this.inserirCategoria}
            >
              Salvar
            </button>
          </div>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome da Categoria</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categorias.map((categorias) => (
              <tr key={categorias.idCategoria}>
                <td>{categorias.idCategoria}</td>
                <td>{categorias.nome}</td>
                <td>
                <UpdateCategoria categorias={categorias.idCategoria}/>
                  <button type="button" className="btn btn-danger" onClick={() => this.excluirCategoria(categorias.idCategoria)}>
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Categoria;

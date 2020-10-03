import React, { Fragment } from 'react';
import axios from 'axios';

const ATIVIDADES_REST_API_URL = "http://localhost:8080/api/atividades";
const DELETE_ATIVIDADE_REST_API_URL = "http://localhost:8080/api/remover_atividade/";

const api = axios.create({
  baseURL: ATIVIDADES_REST_API_URL,
});

class Atividade extends React.Component {
  state = {
    atividades: []
  };

  constructor() {
    super();
    this.selecionarAtividades();
    this.excluirAtividade();
  }

  //Métodos CRUD //
  selecionarAtividades = async () => {
    let data = await api.get(ATIVIDADES_REST_API_URL).then(({ data }) => data);
    this.setState({ atividades: data });
  }

  excluirAtividade = async(idAtividade) => {
    await api.delete(DELETE_ATIVIDADE_REST_API_URL+idAtividade).then(res => {
      alert("Atividade excluida!");
      this.selecionarAtividades();
    });
  }
  //fim

  
  render() {
    return (
      <Fragment>
        <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descrição</th>
              <th scope="col">Local</th>
              <th scope="col">Data da Atividade</th>
              <th scope="col">Categoria</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <tbody>
            {this.state.atividades.map((atividades) => (
              <tr  key={atividades.idAtividade}>
                <td>{atividades.idAtividade}</td>
                <td>{atividades.descricao}</td>
                <td>{atividades.local}</td>
                <td>{atividades.dataAtividade}</td>
                <td>{atividades.categorias.nome}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={() => this.excluirAtividade(atividades.idAtividade)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
        </div>

      </Fragment>);
  }
}

export default Atividade;
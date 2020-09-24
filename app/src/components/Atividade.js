import React, { Fragment } from 'react';
import axios from 'axios';

const ATIVIDADES_REST_API_URL = "http://localhost:8080/api/atividades";

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
  }

  selecionarAtividades = async () => {
    let data = await api.get(ATIVIDADES_REST_API_URL).then(({ data }) => data);
    this.setState({ atividades: data });
  }

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
              <th scope="col">Ações</th>
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
                  <button type="button" className="btn btn-warning mr-2">Editar</button>
                  <button type="button" className="btn btn-danger">Excluir</button>
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
import React, {Fragment} from "react";
import axios from "axios";

const CATEGORIAS_REST_API_URL = "http://localhost:8080/api/categorias";
const ATIVIDADES_REST_API_URL = "http://localhost:8080/api/nova_atividade";

const api = axios.create({
    baseURL: CATEGORIAS_REST_API_URL,
});

class AtividadeForm extends React.Component {
    state = {
        categorias: [],
        atividades: []
    };

    constructor() {
        super();
        //SELECT ALL
        api.get(CATEGORIAS_REST_API_URL).then((res) => {
            this.setState({ categorias: res.data });
        });
        
        criarAtividade = async () {
            let res = await api.post(ATIVIDADES_REST_API_URL, {})
        }
    }

    render() {
        return (
          
            <div className="container">
                <h1 className="display-4 text-center">Formulário de Atividades</h1>
                <hr />
                <form>
                    <div class="form-group row">
                        <label for="descricao" class="col-sm-1 col-form-label font-weight-bold">Descrição:</label>
                        <div class="col-sm-5">
                            <input type="email" class="form-control" id="descricao" placeholder="Descreve a atividade" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="local" class="col-sm-1 col-form-label font-weight-bold">Local:</label>
                        <div class="col-sm-5">
                            <input type="local" class="form-control" id="descricao" placeholder="Local da atividade" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="dataAtividade" class="col-sm-1 col-form-label font-weight-bold">Data:</label>
                        <div class="col-sm-3">
                            <input type="date" class="form-control" id="dataAtividade" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="categoria" class="col-sm-1 col-form-label font-weight-bold">Categoria:</label>
                        <div class="col-sm-3">
                            <select className="custom-select" id="categoria">
                                <option>Escolha</option>
                                {this.state.categorias.map((categorias) => (
                                    <option key={categorias.idCategoria}>
                                        {categorias.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-success btn-m mr-5 pr-5 pl-5" onClick={this.criarAtividade}>Salvar</button>
                            <button type="reset" class="btn btn-secondary btn-m ml-5 pr-5 pl-5">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AtividadeForm;

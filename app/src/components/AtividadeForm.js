import React from "react";
import axios from "axios";

const CATEGORIAS_REST_API_URL = "http://localhost:8080/api/categorias";
const ATIVIDADES_REST_API_URL = "http://localhost:8080/api/nova_atividade";

const api = axios.create({
    baseURL: CATEGORIAS_REST_API_URL,
});

class AtividadeForm extends React.Component {
   
    state = {
        categorias: [],
        atividades: [],
        descricao: '',
        local: '',
        dataAtividade: '',
        nome: '',
        idCategoria: ''   
        }


    constructor() {
        super();
        this.selecionarCategorias();

        //Handlers
        this.descricaoHandler = this.descricaoHandler.bind(this);
        this.localHandler = this.localHandler.bind(this);
        this.dataHandler = this.dataHandler.bind(this);
        this.categoriaHandler = this.categoriaHandler.bind(this);

        this.inserirAtividade = this.inserirAtividade.bind(this);
        

    }

    //Handlers
    descricaoHandler = (event) => {
        this.setState({descricao: event.target.value});
    }
    localHandler = (event) => {
        this.setState({local: event.target.value});
    }
    dataHandler = (event) => {
        this.setState({dataAtividade: event.target.value});
    }
    categoriaHandler = (event) => {
        this.setState({idCategoria: event.target.value});
    }
    selecionarCategorias = async () => {
        let data = await api.get(CATEGORIAS_REST_API_URL).then(({ data }) => data);
        this.setState({ categorias: data });
    }

   

    inserirAtividade(e) {
        e.preventDefault();
        try {
            let nova_atividade = {
                descricao: this.state.descricao,
                 local: this.state.local,
                 dataAtividade: this.state.dataAtividade,
                 categorias: {
                     idCategoria: this.state.idCategoria,
                 } 
             };

            axios.post(ATIVIDADES_REST_API_URL, nova_atividade).then(res => {
                 alert(res.data);
            });
        } catch (error) {
            console.log("Erro de inserção: " + error)
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="display-4 text-center">Formulário de Atividades</h1>
                <hr />
                <form>
                    <div className="form-group row">
                        <label htmlFor="descricao" className="col-sm-1 col-form-label font-weight-bold">Descrição:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="descricao" value={this.state.descricao} onChange={this.descricaoHandler} placeholder="Descreve a atividade" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="local" className="col-sm-1 col-form-label font-weight-bold">Local:</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control" id="local" value={this.state.local} onChange={this.localHandler} placeholder="Local da atividade" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="dataAtividade" className="col-sm-1 col-form-label font-weight-bold">Data:</label>
                        <div className="col-sm-3">
                            <input type="date" className="form-control" id="dataAtividade" value={this.state.dataAtividade} onChange={this.dataHandler} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categorias" className="col-sm-1 col-form-label font-weight-bold">Categoria:</label>
                        <div className="col-sm-3">
                            <select className="custom-select" id="categorias" onChange={this.categoriaHandler}>
                                <option>Escolha</option>
                                {this.state.categorias.map((categorias) => (
                                    <option key={categorias.idCategoria} value={categorias.idCategoria}>
                                        {categorias.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-success btn-m mr-5 pr-5 pl-5" onClick={this.inserirAtividade}>Salvar</button>
                            <button type="reset" className="btn btn-secondary btn-m ml-5 pr-5 pl-5">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}


export default AtividadeForm;

import React from 'react';
import axios from 'axios';

const CATEGORIAS_REST_API_URL = 'http://localhost:8080/api/categorias';

const api = axios.create({
    baseURL: CATEGORIAS_REST_API_URL,
});

class Categoria extends React.Component {
    state = { 
        categorias: []
     }

    constructor(){
        super();
        //SELECT ALL
        api.get(CATEGORIAS_REST_API_URL).then(res => {
            this.setState({categorias: res.data});
        });
    }
    render() { 
        return (
            <div>
                {this.state.categorias.map(categorias =>
                <h1 key={categorias.idCategoria}>{categorias.nome}</h1>)}
            </div>
          );
    }
}
 


export default Categoria;
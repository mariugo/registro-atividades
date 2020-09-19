import React, { Fragment } from 'react';
import React from 'react';
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
        //SELECT ALL
        api.get(ATIVIDADES_REST_API_URL).then((res) => {
          this.setState({ atividades: res.data });
        });
      }

    render() { 
        return (
            <Fragment>
              

            </Fragment> );
    }
}
 
export default Atividade;
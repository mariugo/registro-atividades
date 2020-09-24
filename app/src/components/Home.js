import React, { Fragment } from 'react';
import Atividade from './Atividade';
import AtividadeForm from './AtividadeForm';
import Hero from './Hero';

class Home extends React.Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                <Hero/>
                <AtividadeForm/>
                <Atividade/>
            </Fragment> );
    }
}
 
export default Home;
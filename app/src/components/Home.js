import React, { Fragment } from 'react';
import AtividadeForm from './AtividadeForm';
import Hero from './Hero';

class Home extends React.Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                <Hero/>
                <AtividadeForm/>
            </Fragment> );
    }
}
 
export default Home;
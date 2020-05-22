import React, { Component, Fragment } from   'react';
import Header from '../../components/header/Header';
import DataTable from '../../components/datatable/DataTable';
import ApiService from '../../utils/ApiService';
import PopUp from '../../utils/PopUp';


class Autores extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            nomes: [],
            titulo: 'Autores'   
        }
    }

    componentDidMount(){
        ApiService.ListaNomes()
                    .then(res => {
                        if(res.message === 'success'){
                            PopUp.exibeMensagem('success', "Autores listados com sucesso")
                            this.setState({ nomes: [...this.state.nomes, ...res.data] })
                        }
                    })
                    .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os nomes dos autores"));
    }
    
    render(){
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']}/>
                </div>
            </Fragment>
        )
    }
}


export default Autores;
import React from 'react'
import {withRouter} from 'react-router-dom'

class Home extends React.Component {


    cadastrarCliente = () => {
        this.props.history.push("/cadastro-cliente")
    }

    render() {
        return (
            <div className="jumbotron">
                <h3>
                    Home
                    <small className="text-muted">Cadastro Clientes</small>
                </h3>

                <p>Bem-vindo ao programa que realiza cadastro e consulta de clientes.</p>
                <p>Para começar, cadastre clientes na base de dados utilizando o botão abaixo</p>

                <br />

                <button type="button" className="btn btn-info" onClick={this.cadastrarCliente} >Cadastrar cliente</button>
            </div>
        )
    }
}

export default withRouter(Home)
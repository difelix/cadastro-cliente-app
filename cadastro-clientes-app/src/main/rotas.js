import React from 'react'
import {Route, Switch, HashRouter} from 'react-router-dom'
import CadastrarCliente from '../views/cadastrarCliente'
import CadastrarTelefone from '../views/cadastrarTelefone'
import Home from '../views/home'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/cadastro-cliente" component={CadastrarCliente}/>
                <Route path="/cadastro-telefone" component={CadastrarTelefone} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas
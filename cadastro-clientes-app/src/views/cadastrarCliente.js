import React from 'react'
import Cards from '../components/cards'
import FormGroup from '../components/formGroup'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class CadastrarCliente extends React.Component {

    state = {
        nome: '',
        email: '',
        cpf: '',
        mensagemErro: null
    }

    salvar = () => {
        axios.post("http://localhost:8080/api/clientes", { nome: this.state.nome, email: this.state.email, cpf: this.state.cpf })
            .then(response => {
                localStorage.setItem("_cliente_criado", JSON.stringify(response.data))
                this.props.history.push("/cadastro-telefone")
            }).catch(erro => {
                this.setState({ mensagemErro: erro.response.data })
            })
    }

    retornarHome = () => {
        this.props.history.push('/home')
    }


    render() {
        return (
            <Cards title="Cadastro de Cliente">
                <div className="row">
                    <span>{this.state.mensagemErro}</span>
                </div>
                <FormGroup htmlFor="inputNome" label="Nome:" >
                    <input type="text"
                        value={this.state.nome}
                        onChange={e => this.setState({ nome: e.target.value })}
                        className="form-control"
                        placeholder="Digite nome do cliente"
                        id="inputNome"
                        name="nome" />
                </FormGroup>
                <FormGroup htmlFor="inputEmail" label="Email:">
                    <input type="email"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        className="form-control"
                        id="inputEmail"
                        placeholder="Digite email do cliente"
                        name="email" />
                </FormGroup>
                <FormGroup htmlFor="inputCpf" label="CPF:">
                    <input id="inputCpf"
                        value={this.state.cpf}
                        onChange={e => this.setState({ cpf: e.target.value })}
                        className="form-control"
                        type="text"
                        placeholder="Digite CPF do cliente"
                        name="cpf" />
                </FormGroup>
                <button type="button" className="btn btn-info" onClick={this.salvar} >Salvar</button>
                <button type="button" className="btn btn-danger" onClick={this.retornarHome}>Cancelar</button>
            </Cards>
        )
    }
}

export default withRouter(CadastrarCliente);
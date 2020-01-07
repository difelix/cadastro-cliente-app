import React from 'react'
import Cards from '../components/cards'
import FormGroup from '../components/formGroup'
import axios from 'axios'

class CadastrarTelefone extends React.Component {

    state = {
        numero: '',
        mensagemErro: null
    }

    salvar = () => {
        const clienteSalvoString = localStorage.getItem("_cliente_criado")
        const clienteSalvo = JSON.parse(clienteSalvoString)

        axios.post("http://localhost:8080/api/telefones", { idCliente: clienteSalvo.id, numero: this.state.numero })
            .then(response => {
                console.log(response)
            }).catch(erro => {
                this.setState({ mensagemErro: erro.response.data })
            })
    }

    render() {
        return (
            <Cards title="Cadastro de Telefone">
                <div className="row">
                    <span>{this.state.mensagemErro}</span>
                </div>
                <FormGroup label="Número Telefone:" htmlFor="inputNumero">
                    <input type="text"
                        id="inputNumero"
                        className="form-control"
                        placeholder="Informe DDD + numero"
                        name="numero"
                        onChange={e => this.setState({ numero: e.target.value })} />
                </FormGroup>
                <button type="button" className="btn btn-info" onClick={this.salvar}>Salvar</button>
                <button type="button" className="btn btn-danger">Pular</button>
            </Cards>
        )
    }
}

export default CadastrarTelefone


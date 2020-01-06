import React from 'react'
import Cards from '../components/cards'
import FormGroup from '../components/formGroup'

class CadastrarCliente extends React.Component {

    state = {
        nome: '',
        email: '',
        cpf: ''
    }

    salvar = () => {
        console.log("Nome: " + this.state.nome)
        console.log("Email: " + this.state.email)
        console.log("Cpf: " + this.state.cpf)
    }


    render() {
        return (
           <div className="container">
               <div className="row">
                   <div className="col-md-6">
                      <div className="bs-docs-section">
                          <Cards title="Cadastro de Cliente">
                              <form>
                                  <FormGroup htmlFor="inputNome" label="Nome:" >
                                     <input type="text" 
                                            value={this.state.nome}
                                            onChange={e => this.setState({nome: e.target.value})}
                                            className="form-control"
                                            placeholder="Digite nome do cliente" 
                                            id="inputNome" />
                                   </FormGroup>
                                   <FormGroup htmlFor="inputEmail" label="Email:">
                                       <input type="email" 
                                              value={this.state.email}
                                              onChange={e => this.setState({email: e.target.value})}
                                              className="form-control"
                                              id="inputEmail" 
                                              placeholder="Digite email do cliente"  />
                                   </FormGroup>
                                   <FormGroup htmlFor="inputCpf" label="CPF:">
                                       <input id="inputCpf" 
                                              value={this.state.cpf}
                                              onChange={e => this.setState({cpf: e.target.value})}
                                              className="form-control"
                                              type="text" 
                                              placeholder="Digite CPF do cliente"  />
                                   </FormGroup>                                 
                              </form>  
                              <button className="btn btn-primary" onClick={this.salvar} >Salvar</button>                         
                          </Cards>
                      </div>
                   </div>

               </div>

           </div>
        )
    }
}

export default CadastrarCliente;
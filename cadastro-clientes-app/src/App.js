import React from 'react';
import CadastrarCliente from './views/cadastrarCliente'
import 'bootswatch/dist/cyborg/bootstrap.css'
import './custom.css'

class App extends React.Component {
    render() {
      return (
        <div>
          <CadastrarCliente />
        </div>
      )
    }
}

export default App;

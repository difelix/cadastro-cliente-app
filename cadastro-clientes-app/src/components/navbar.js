import React from 'react'
import NavBarItem from './navbarItens'

function NavBar() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: "auto"}}>
            <div className="container">
                <a className="navbar-brand" href="#/">Cadastro Clientes</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <NavBarItem href="#/home" label="Home" />
                        <NavBarItem href="#/cadastro-cliente" label="Cadastrar" />
                        <NavBarItem href="#/" label="Atualizar" />
                        <NavBarItem href="#/" label="Consultar" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
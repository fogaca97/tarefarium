import React, { Component } from "react";
import "./styleFormCadastro.css";


class FormularioCadastro extends Component {

    render() {
        return(
            
            <section className="formCadastro">
                <form className="formCadastro__container">
                    <h2 className="formCadastro__titulo">Criar Usuário</h2>
                    <div className="formCadastro__inputcontainer">
                        <label for="nome" className="formCadastro__label">Nome</label>
                        <input type="text" className="formCadastro__input" name="nome" id="" placeholder="Nome" required minLength="3"/>
                    </div>
                    <div className="formCadastro__inputcontainer">
                        <label for="email" className="formCadastro__label">Email</label>
                        <input type="email" className="formCadastro__input" name="email" id="" placeholder="email@provedor.com" required/>
                    </div>
                    <button className="formCadastro__botao" id="enviaform">Cadastrar</button>
                    <p ><a href="#" className="formCadastro__link">Informações de usuários</a></p>
                </form>
            </section>
                    
        );
    }
}

export default FormularioCadastro;
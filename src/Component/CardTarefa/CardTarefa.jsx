import React, { Component } from "react";
import "./styleCard.css";


class CardTarefa extends Component {

    render() {
        return(
            <div className="dashboard__item" id="itemlista">
                <div className="dashboard__item__cabecalho">
                    <h2 className="dashboard__item__titulo" id="tituloitem">{this.props.titulo}</h2>
                    <img className="dashboard__item__botaoconclui" src="./public/img/aceitar.png" alt="" id="botaoconclui"/>
                    <img className="dashboard__item__botaoexclui" src="./public/img/cancelar.png" alt="" id="botaoexclui"/>
                </div>
                <article className="dashboard__item__dropdown" id="dropdown">
                    <p className="dashboard__item__dropdown-responsavel" id="horaitem">Nome</p>
                    <p className="dashboard__item__dropdown-responsavel" id="horaitem">Email@email.com</p>
                    <p className="dashboard__item__dropdown-desc" id="descitem">{this.props.descricao}</p>
                </article>
            </div>

        );
    }
}

export default CardTarefa;
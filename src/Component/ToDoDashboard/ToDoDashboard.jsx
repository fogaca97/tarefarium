import React, { Component } from "react";
import CardTarefa from "../CardTarefa/CardTarefa";
import "./styleToDoDashboard.css";


class ToDoDashboard extends Component {
    
    render() {
        return(

            <section className="dashboard" id="dashboard">
                <h2 className="dashboard__titulo">Em Andamento</h2>
                <ul>
                {this.props.notas.map((nota, index) => {
                return (
                    <li key={index}>
                        <CardTarefa titulo={nota.titulo} descricao={nota.descricao}/>
                    </li>
                    );
                })}
                </ul>
            </section>

        );
    }
}

export default ToDoDashboard;
import React, { Component } from "react";
import CardTarefa from "../CardTarefa/CardTarefa";
import "./styleDoneDashboard.css";

class DoneDashboard extends Component {

    render() {
        return(

            <section className="dashboard" id="dashboard">
                <h2 className="dashboard__titulo">Concluida</h2>
                <ul> {this.props.notas2.map((nota, index) => { return (
                    <li key={index}>
                        <CardTarefa titulo={nota.titulo} descricao={nota.descricao}/>
                    </li>
                );     })}
                </ul>
            </section>

        );
    }
}

export default DoneDashboard;
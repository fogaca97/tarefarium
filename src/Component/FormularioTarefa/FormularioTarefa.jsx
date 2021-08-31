import React, { Component } from "react";
import "./styleFormTarefa.css";


class FormularioTarefa extends Component {

    constructor(props){
        super(props);
        this.titulo="";
        this.descricao="";
        this.state = {value: "Em Andamento"};
        this.indexEstado="";

        this.handleMudancaState = this.handleMudancaState.bind(this);
      }
    
      _handleMudancaTitulo(evento){
        this.titulo = evento.target.value;
      }
    
      _handleMudancaDescricao(evento){
        this.descricao = evento.target.value;
      }

      handleMudancaState(evento){
        this.setState({value: evento.target.value})
      }
    
      criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        
    
        
      if(this.state.value === "Em Andamento"){
        this.indexEstado = 1
        
        return this.props.criarNota(this.titulo, this.descricao, this.indexEstado);
        
      } else if (this.state.value === "Concluido"){
        this.indexEstado = 0

        return this.props.criarNota(this.titulo, this.descricao, this.indexEstado);
      }
      
      }


    render() {
        return(
            
            <section className="formTarefa">
                <form className="formTarefa__container" onSubmit={this.criarNota.bind(this)}>
                    <h2 className="formTarefa__titulo">Criar Tarefa</h2>
                    <div className="formTarefa__inputcontainer">
                        <label for="tarefa" className="formTarefa__label">Tarefa</label>
                        <input type="text" className="formTarefa__input" name="tarefa" id=""  required onChange={this._handleMudancaTitulo.bind(this)}/>
                    </div>
                    <div className="formTarefa__inputcontainer">
                        <label for="descricao" className="formTarefa__label">Descrição</label>
                        <input type="text" className="formTarefa__input" name="descricao" id="" maxlength="43" onChange={this._handleMudancaDescricao.bind(this)}/>
                    </div>
                    <div className="formTarefa__inputcontainer">
                        <label for="status" className="formTarefa__label">Status</label>
                        <select type="text" className="formTarefa__input" name="status" id="" value={this.state.value} onChange={this.handleMudancaState}>
                            <option value="Em Andamento">Em Andamento</option>
                            <option value="Concluido">Concluido</option>
                        </select>
                    </div>
                    <div className="formTarefa__inputcontainer">
                        <label for="status" className="formTarefa__label">Responsável</label>
                        <select type="text" className="formTarefa__input" name="status" id="">
                            <option value=" ">- - - - - - - - - - - - - - - - - - - -</option>
                            <option value="Nome1">Nome1</option>
                            <option value="Nome2">Nome2</option>
                            <option value="Nome3">Nome3</option>
                            <option value="Nome4">Nome4</option>
                            <option value="Nome5">Nome5</option>
                        </select>
                    </div>
                    <button className="formTarefa__botao" id="enviaform">Criar</button>
                </form>
            </section>

                    
        );
    }
}

export default FormularioTarefa;


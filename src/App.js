import React, { Component } from 'react';
import './cssreset.css';
import './index.css'
import Cabecalho from './Component/Cabecalho/Cabecalho';
import FormularioCadastro from './Component/FormularioCadastro/FormularioCadastro';
import FormularioTarefa from './Component/FormularioTarefa/FormularioTarefa';
import ToDoDashboard from './Component/ToDoDashboard/ToDoDashboard'
import DoneDashboard from './Component/DoneDashboard/DoneDashboard';


class App extends Component{


  constructor(){
    super();
    this.state = {
      notas:[],
      notas2:[]
    }
  }

  

  criarNota(titulo, descricao, indexEstado){
      const novaNota = {titulo, descricao, indexEstado}
      if ( indexEstado === 1){
        console.log("entrou no if")
        const novoArrayNotas = [...this.state.notas,novaNota]
        const novoEstado = {
          notas:novoArrayNotas
        }
        this.setState(novoEstado)
      } else{
        console.log("entrou no else")
        const novoArrayNotas2 = [...this.state.notas2,novaNota]
        const novoEstado2 = {
          notas2:novoArrayNotas2
        }
        this.setState(novoEstado2)
      }
      
  }


  

  render(){

    return (
      
      <body>  
      <Cabecalho/>
      <main className="index-page">
          <div className="container-form">
              <FormularioCadastro/>
              <FormularioTarefa criarNota={this.criarNota.bind(this)}/>
          </div>
          <div className="container-dashboard">
              <ToDoDashboard notas={this.state.notas}/>
              <DoneDashboard notas2={this.state.notas2}/>
          </div>
      </main>
        
    </body>
  );
}
}

export default App;

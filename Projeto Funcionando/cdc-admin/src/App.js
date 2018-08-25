import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';


class App extends Component {

  constructor (){
    super();
    this.state = {lista: [], nome:"", sobrenome:"", email:"", formacao:""};
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setSobrenome = this.setSobrenome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setFormacao = this.setFormacao.bind(this);
  }

  componentDidMount(){
    $.ajax({
      url:"http://localhost:8000/pessoas",
      dataType:  'json',
      success: function(resposta){
        this.setState({lista:resposta});
      }.bind(this)
    });
  }

  enviaForm(evento){
    evento.preventDefault(); 
    $.ajax({
      url: 'http://localhost:8000/pessoas/',
      contentType: 'application/json',
      dataType: 'JSON',
      type: 'post',
      data: JSON.stringify({nome:this.state.nome, sobrenome:this.state.sobrenome, email:this.state.email, formacao:this.state.formacao}),
      success: function(resposta){
        console.log("enviado com sucesso!");
        var listaAtual = this.state.lista;
        listaAtual.push(resposta);
        this.setState({lista:listaAtual})

      }.bind(this),
      error: function(resposta){
        console.log("erro");
      }
    });
  }

  setNome(evento){
    this.setState({nome:evento.target.value})
  }

  setSobrenome(evento){
    this.setState({sobrenome:evento.target.value})
  }

  setEmail(evento){
    this.setState({email:evento.target.value})
  }

  setFormacao(evento){
    this.setState({formacao:evento.target.value})
  }


  render() {
    return (
      <div id="layout">
    
    <a href="#menu" id="menuLink" className="menu-link">
        
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Pessoa</a></li>

                
            </ul>
        </div>
    </div>

        <div id="main">
            <div className="header">
              <h1>Cadastro de Pessoas</h1>
            </div>
            <div className="content" id="content">
              <div className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                <form className="pure-form pure-form-aligned">
                  <div className="pure-control-group">
                    <label htmlFor="nome">Nome</label> 
                    <input id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome}/>                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="sobrenome">Sobrenome</label> 
                    <input id="sobrenome" type="text" name="sobrenome" value={this.state.sobrenome} onChange={this.setSobrenome} />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="email">email</label> 
                    <input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} />                                      
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="formacao">formacao</label> 
                    <input id="formacao" type="text" name="formacao" value={this.state.formacao} onChange={this.setFormacao}/>                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                  </div>
                </form>             

              </div>  
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>sobrenome</th>
                      <th>email</th>
                      <th>formacao</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.lista.map(function(pessoa){
                        return (
                          <tr key={pessoa.id}>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.sobrenome}</td>
                            <td>{pessoa.email}</td>
                            <td>{pessoa.formacao}</td>
                          </tr>
                          );
                      })
                    }
                  </tbody>
                </table> 
              </div>             
            </div>
          </div>            
</div>
    );
  }
}

export default App;

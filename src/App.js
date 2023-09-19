import React, {Component} from "react";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticationStatus: "Informe seu e-mail e senha nos campos acima para acessar...",
      user: [
        {email: "", password: ""}
      ]
    }

    this.emailChanged = this.emailChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.loginAccess = this.loginAccess.bind(this);

  }

  emailChanged(event) {
    let state = this.state;
    state.user.email = event.target.value;
    this.setState(state);
  }

  passwordChanged(event) {
    let state = this.state;
    state.user.password = event.target.value;
    this.setState(state);
  }

  loginAccess(event) {
    let authenticationStatus = this.state.authenticationStatus;
    let email = this.state.user.email;
    let password = this.state.user.password;

    if (email == "eduardo.lino@pucpr.br" && password == "123456") {
      authenticationStatus = "Acessado com sucesso!";
    } else {
      authenticationStatus = "Usuário ou senha incorretos";
    }

    this.setState({authenticationStatus});

  }

  render() {
    return (
      <div className="painel">
        <h2> Login </h2>
        <input type = "text" size="20" name="email" onChange={(e) => this.emailChanged(e)}/>
        <br></br>
        <input type = "password" size="20" name="password" onChange={(p) => this.passwordChanged(p)} />
        <br></br>
        <button onClick={this.loginAccess}> Acessar </button>
        <br></br>
        <br></br>
        {this.state.authenticationStatus}
      </div>
    )
  }
}
export default App;

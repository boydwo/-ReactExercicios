import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: 0
  };
  //arrow fuctions usando set state para alterar props
  maisUm = () => {
    this.setState({ numero: this.state.numero + 1 });
  };
  menosUm = () => {
    this.setState({ numero: this.state.numero - 1 });
  };
  render() {
    return (
      <div>
        <div>Numero: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>
      </div>
    );
  }
}

//Solução 1 - Bind
// constructor(props) {
//   super(props);
//   this.maisUm = this.maisUm.bind(this);
// }

// Solução2 - função arrow(onCLick)
//<button onClick={() => this.maisUm()}>Inc</button>

//solução 3 - função arrow
// maisUm = () => {
//   this.props.numero++;
// }

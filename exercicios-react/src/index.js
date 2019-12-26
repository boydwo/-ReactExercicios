import React from "react";
import ReactDOM from "react-dom";
//import PrimeiroComponente from "./componentes/primeiroComponente";
//import { CompA, CompB as B } from "./componentes/doisComponentes";
import MultiElementos from "./componentes/multiElementos";
const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    {
      <MultiElementos />
      /* { <CompA valor='Eu sou o A' />
    <B valor='Eu sou o B' />
    <PrimeiroComponente valor='bom dia' />} */
    }
  </div>,
  elemento
);

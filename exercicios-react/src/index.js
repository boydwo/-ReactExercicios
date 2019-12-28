import React from "react";
import ReactDOM from "react-dom";
//import PrimeiroComponente from "./componentes/primeiroComponente";
//import { CompA, CompB as B } from "./componentes/doisComponentes";
// import MultiElementos from "./componentes/multiElementos";
// import FamiliaSilva from "./componentes/familiaSilva";
// import ComponenteComFuncao from "./componentes/componenteComFuncao";
// import Pai from "./componentes/pai";
// import ComponenteClasse from "./componentes/componeteClasse";
// import Contador from "./componentes/contador";
import Hook from "./componentes/hook";
const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    {
      // <Contador numero={0} />
      <Hook />
      // <ComponenteClasse valor='sou componente classe' />
      // <Pai />
      // <ComponenteComFuncao />
      // <FamiliaSilva />
      /* { <CompA valor='Eu sou o A' />
    <B valor='Eu sou o B' />
    <PrimeiroComponente valor='bom dia' />} */
    }
  </div>,
  elemento
);

// Passando dois componentes em um arquivo JSX
import React from "react";

const CompA = props => <h1>Primeiro diz: {props.valor}</h1>;

const CompB = props => <h1>Segudno diz: {props.valor}</h1>;

export { CompA, CompB };

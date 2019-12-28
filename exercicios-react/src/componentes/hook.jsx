import React, { useState, useEffect } from "react";

export default props => {
  const [contador, setContador] = useState(100);
  const [status, setParouImpar] = useState("par");

  useEffect(() => {
    contador % 2 == 0 ? setParouImpar("par") : setParouImpar("impar");
  });

  return (
    <div>
      <h1>{contador}</h1>
      <h1>{status}</h1>
      <button onClick={() => setContador(contador + 1)}>Inc</button>
    </div>
  );
};

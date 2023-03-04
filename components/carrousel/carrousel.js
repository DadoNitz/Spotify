import React, { useState } from 'react';
import carrousel from './Carrousel.css'

function Carrossel() {
  const [index, setIndex] = useState(0);
  const textos = ['Música para todos', 'As melhores rádio'];

  const avancar = () => {
    setIndex((index + 1) % textos.length);
  };

  const retroceder = () => {
    setIndex((index - 1 + textos.length) % textos.length);
  };

  return (
    <div className="carrossel">
      <div className="texto">{textos[index]}</div>
      <div className="botoes">
        <button onClick={retroceder}>Anterior</button>
        <button onClick={avancar}>Próximo</button>
      </div>
    </div>
  );
}

export default Carrossel;
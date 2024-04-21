import React from 'react';
import esquema2 from '../../assets/esquema2.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={esquema2} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicite acceso anticipado para empezar</h4>
      <h1 className="gradient__text">Ideal para toda organización pública o privada;<br /> Pequeña, mediana o grande</h1>
      <p>Thinstuff XP/VS es altamente rentable en comparación con soluciones para servidores basados en cómputo (SBC) e instalaciones basadas en Cliente-Servidor, ya que se puede utilizar en clientes ligeros en lugar de equipos PC con Windows.</p>
      <h4>Solicite acceso anticipado para empezar</h4>
    </div>
  </div>
);

export default Possibility;

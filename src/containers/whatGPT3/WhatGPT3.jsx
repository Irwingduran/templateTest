import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="¿Qué es RD PLUS+®?" text="RD PLUS+ es una fuerte solución en software que permite a usuarios; empleados, ejecutivos, vendedores, etc, poder trabajar a distancia desde casa o DESDE donde USTED LO NECESITE para acceder a sus Aplicaciones o Escritorios Windows® (VDI) que residen en los servidores centrales de su organización o se encuentren hospedados en servidores virtuales como AWS, AZURE, etc." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Con RD PLUS + el personal de su organización o fuera de ella, podrá acceder de forma controlada</h1>
      <p>Conexiones seguras a distancia</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Acceso Controlado" text="Permite ingresar con permisos definidos." />
      <Feature title="Eficiencia Remota" text="Trabaje de manera segura y rápida desde cualquier lugar." />
      <Feature title="Flexibilidad de Conexión" text="Utilice el cliente incorporado o genere uno propio." />
    </div>
  </div>
);

export default WhatGPT3;

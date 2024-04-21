import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Solución de Escritorio Remoto',
    text: 'Thinstuff XP/VS Server es una solución rentable para habilitar múltiples usuarios para acceder simultáneamente a un equipo Windows utilizando Escritorios Remotos basados en el protocolo estándar de Microsoft (RDP).',
  },
  {
    title: 'Instalación Versátil',
    text: 'Puede ser instalado en una amplia gama de equipos Windows, desde PC individuales hasta servidores, lo que proporciona flexibilidad en la implementación.',
  },
  {
    title: 'Acceso Simultáneo',
    text: 'Permite que varios usuarios accedan al mismo equipo de forma simultánea, lo que mejora la eficiencia y la colaboración en entornos compartidos.',
  },
  {
    title: 'Multiplicidad de Usuarios:',
    text: 'Thinstuff XP/VS Server posibilita que múltiples usuarios accedan simultáneamente a un mismo equipo Windows, aumentando la eficiencia y maximizando el uso de recursos.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Con RD PLUS + el personal de su organización o fuera de ella, podrá acceder de forma controlada</h1>
      <p>Solicite acceso para comenzar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

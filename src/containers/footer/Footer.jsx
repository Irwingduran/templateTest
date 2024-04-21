import React from 'react';
import gpt3Logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">¿Quieres avanzar hacia el futuro antes que los demás?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicitar acceso</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Protitipo, <br /> Todos los derechos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Soporte</p>
        <p>Redes Sociales</p>
        <p>Ayuda</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Empresa</h4>
        <p>Términos y Condicones </p>
        <p>Política y Privacidad</p>
        <p>Cookies</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contáctanos</h4>
        <p>Business</p>
        <p>123 456 7899</p>
        <p>contacto@tudominio.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 Thinstuff.Todos los derechos reservados.</p>
    </div>
  </div>
);

export default Footer;

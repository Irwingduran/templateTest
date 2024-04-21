import React from 'react';
import people from '../../assets/people.png';
import esquema from '../../assets/esquema.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Solución de acceso remoto seguro: RD PLUS+</h1>
      <p>Una potente solución de software que ofrece a una variedad de usuarios, como empleados, ejecutivos y vendedores, la capacidad de trabajar de forma remota desde casa o cualquier ubicación necesaria. </p>
      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1.600 personas utilizan nuestro sistema diariamente</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={esquema} />
    </div>
  </div>
);

export default Header;

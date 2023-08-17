import React from "react";
import { Link } from 'react-router-dom';
import Styles from '../Footer/Footer.module.css'

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <div className={Styles.row}>
          <div className={Styles.col}>
            <h3>Ornella Cópula</h3>
            <p>Cel: + 54 (351) 392-8047</p>
            <p>orne.el38@gmail.com</p>
            <p>Córdoba, Argentina</p>
          </div>
          <div className={Styles.col}>
            <h3>Contacto</h3>
            <ul className={Styles.social}>
  <li>
    <Link to="https://www.linkedin.com/in/tu-perfil-de-LinkedIn/">
      <i className="fa fa-linkedin"></i>
      <i className={Styles.linkedin}></i>
    </Link>
  </li>
  <li>
    <Link to="https://github.com/tu-perfil-de-GitHub">
      <i className="fa fa-github"></i>
      <i className={Styles.github}></i>
    </Link>
  </li>
</ul>
          </div>
        </div>
        <div className={Styles.row}>
          <div className={Styles.col}>
            <p className={Styles.textM}>© 2023 Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

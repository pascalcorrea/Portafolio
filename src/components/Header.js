import React from "react";

function Header() {
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <a className='a-header' href="#home">INICIO</a>
          </li>
          <li>
            <a className='a-header' href="#about">SOBRE MI</a>
          </li>
          <li>
            <a className='a-header' href="#projects">PROYECTOS</a>
          </li>
          <li>
            <a className='a-header' href="#contact">CONTACTO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

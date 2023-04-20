import React from "react";
import Logo from "../../src/assets/logo/web_disign__9_-removebg-preview.png"
import { BsArrowDownCircle } from 'react-icons/bs';


function Home() {
  return (
    <section id="home">
      <img src={Logo} alt="" className='logo-img'/>
      <h2 className='home-h2'>Hola soy <span style={{ color: '#17252A' }}>Pascal Correa,</span></h2>
      <h2 className='home-h2'>Desarrollador Web Full-Stack</h2>
      <a className='a-button' href="#header">
      <button className='home-button' href="#header">
        Conoce sobre mi trabajo <BsArrowDownCircle />
      </button>
      </a>
    </section>
  );
}


export default Home;


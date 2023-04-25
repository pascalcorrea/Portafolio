import React from "react";
import Foto from "../assets/foto/Diseno-sin-titulo-19.png";
import Funcional from "../assets/pilares/funcional.png";
import Intuitivo from "../assets/pilares/intuitivo.png";
import Rapido from "../assets/pilares/rapido.png";
import Responsive from "../assets/pilares/responsive.png";
import JS from "../assets/logo/3.png";
import CSS from "../assets/logo/2.png";
import HTML from "../assets/logo/1.png";
import REACT from "../assets/logo/4.png";
import BOOSTRAP from "../assets/logo/5.png";
import NODE from "../assets/logo/6.png";
import MONGO from "../assets/logo/7.png";
import WP from "../assets/logo/8.png";

function About() {
  return (
    <section id="about">
      <h2 className="titulo-h2">/sobreMi</h2>
      <div className="row">
        <div className="foto-container col-lg-6 col-md-12 d-flex flex-column align-items-center">
          <img src={Foto} alt="" className="foto-img" />
          <h2 className="h2-sobre-mi">Un poco sobre mi:</h2>
          <p className="p-sobre-mi">
            Soy un estudiante de Desarrollo Web Fullstack en la Universidad del
            Desarrollo, apasionado por el diseño Front-End y de crear
            experiencias de usuario intuitivas y funcionales.
          </p>
        </div>

        <div className="skills col-lg-6 col-md-12">
          <div className="leng-container">
            <h2 className="h2-skills">Skills</h2>
            <img src={JS} alt="" className="logo-leng" />
            <img src={CSS} alt="" className="logo-leng" />
            <img src={HTML} alt="" className="logo-leng" />
            <img src={REACT} alt="" className="logo-leng" />
            <img src={BOOSTRAP} alt="" className="logo-leng" />
            <img src={NODE} alt="" className="logo-leng" />
            <img src={MONGO} alt="" className="logo-leng" />
            <img src={WP} alt="" className="logo-leng" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-pilares">
          <div className="col pilares">
            <img src={Funcional} alt="" className="pilar-img" />
            <h2>Funcional</h2>
            <p>Paginas 100% funcionales a las necesidades del cliente</p>
          </div>

          <div className="col pilares">
            <img src={Responsive} alt="" className="pilar-img" />
            <h2>Responsive</h2>
            <p>Proyectos adaptables a cualquier tipo de dispositivo</p>
          </div>

          <div className="col pilares">
            <img src={Intuitivo} alt="" className="pilar-img" />
            <h2>Intuitivo</h2>
            <p>Diseños innovadores y fáciles de navegar</p>
          </div>

          <div className="col pilares">
            <img src={Rapido} alt="" className="pilar-img" />
            <h2>Rápido</h2>
            <p>Busco trabajar de forma rápida y eficiente</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

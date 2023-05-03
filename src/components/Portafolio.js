import React from "react";
import Proyecto1 from "../assets/proyectos/1.png";
import Proyecto2 from "../assets/proyectos/2.png";
import Proyecto3 from "../assets/proyectos/3.png";
import Proyecto4 from "../assets/proyectos/4.png";
import Proyecto5 from "../assets/proyectos/5.png";
import Proyecto6 from "../assets/proyectos/6.png";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiReact, SiBootstrap, SiMongodb, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsGithub, BsLink45Deg } from "react-icons/bs";

function Portfolio() {
  return (
    <section id="projects">
      <h2 className="section-title">/proyectos</h2>
      <section className="project-container">
        
        <div className="project col-lg-4 col-md-6 col-sm-12">
          <img src={Proyecto5} alt="Proyecto 1" className="project-image" />
          <div className="project-details">
            <div>
              <a className="git" href="https://github.com/pascalcorrea/Frontend-Ecommerce">
                <BsGithub
                  style={{ margin: "0 0 10 0" }}
                  color="#3AAFA9"
                  size={25}
                />
              </a>
              <a href="https://sparkling-froyo-949e50.netlify.app/">
                <BsLink45Deg
                  style={{ margin: "0 0 10 20" }}
                  color="#3AAFA9"
                  size={35}
                />
              </a>
            </div>
            <h3 className="project-title">E-Commerce</h3>
            <p className="project-description">
            E-Commerce de venta de Vaporizadores 
            </p>
            <div>
              <IoLogoJavascript
                style={{ padding: "1.5px" }}
                color="#DEF2F1"
                size={32}
              />
              <IoLogoHtml5
                style={{ padding: "1.5px" }}
                color="#DEF2F1"
                size={32}
              />
              <IoLogoCss3
                style={{ padding: "1.5px" }}
                color="#DEF2F1"
                size={32}
              />
              <SiReact 
                style={{ padding: "1.5px" }} 
                color="#DEF2F1" 
                size={32} 
              />
              <FaNodeJs 
                style={{ padding: "1.5px" }} 
                color="#DEF2F1" 
                size={32} />
              <SiBootstrap
                style={{ padding: "1.5px" }}
                color="#DEF2F1"
                size={32}
              />
              <SiMongodb
                style={{ padding: "2px" }}
                color="#DEF2F1"
                size={32}
              />
              <SiExpress
                style={{ padding: "2px" }}
                color="#DEF2F1"
                size={32}
              />
            </div>
          </div>
        </div>

        <div className="project col-lg-4 col-md-6 col-sm-12">
          <img src={Proyecto4} alt="Proyecto 1" className="project-image" />
          <div className="project-details">
            <div>
              <a className="git" href="https://github.com/pascalcorrea/restaurant-app">
                <BsGithub
                  style={{ margin: "0 0 10 0" }}
                  color="#3AAFA9"
                  size={25}
                />
              </a>
              <a href="https://harmonious-kelpie-259776.netlify.app/carta">
                <BsLink45Deg
                  style={{ margin: "0 0 10 20" }}
                  color="#3AAFA9"
                  size={35}
                />
              </a>
            </div>
            <h3 className="project-title">Restaurant App</h3>
            <p className="project-description">
            Pagina de restaurante de hamburguesas
            </p>
            <div>
              <IoLogoJavascript
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <IoLogoHtml5
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <IoLogoCss3
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <SiReact 
                style={{ padding: "5px" }} 
                color="#DEF2F1" 
                size={40} 
              />
              <FaNodeJs 
                style={{ padding: "5px" }} 
                color="#DEF2F1" 
                size={40} />
              <SiBootstrap
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
            </div>
          </div>
        </div>

        <div className="project col-lg-4 col-md-6 col-sm-12">
          <img src={Proyecto3} alt="Proyecto 1" className="project-image" />
          <div className="project-details">
            <div>
              <a className="git" href="https://github.com/pascalcorrea/Dashboard">
                <BsGithub
                  style={{ margin: "0 0 10 0" }}
                  color="#3AAFA9"
                  size={25}
                />
              </a>
              <a href="https://pascalcorrea.github.io/Dashboard/ ">
                <BsLink45Deg
                  style={{ margin: "0 0 10 20" }}
                  color="#3AAFA9"
                  size={35}
                />
              </a>
            </div>
            <h3 className="project-title">Dashboard Divisas</h3>
            <p className="project-description">
            Dashboard de divisas extrayendo datos de una API
            </p>
            <div>
              <IoLogoJavascript
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <IoLogoHtml5
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <IoLogoCss3
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <FaNodeJs 
                style={{ padding: "5px" }} 
                color="#DEF2F1" 
                size={40} />
            </div>
          </div>
        </div>

        <div className="project col-lg-4 col-md-6 col-sm-12">
          <img src={Proyecto6} alt="Proyecto 1" className="project-image" />
          <div className="project-details">
            <div>
              <a className="git" href="https://github.com/pascalcorrea/Portafolio">
                <BsGithub
                  style={{ margin: "0 0 10 0" }}
                  color="#3AAFA9"
                  size={25}
                />
              </a>
              <a href="https://tiny-panda-a031fb.netlify.app/">
                <BsLink45Deg
                  style={{ margin: "0 0 10 20" }}
                  color="#3AAFA9"
                  size={35}
                />
              </a>
            </div>
            <h3 className="project-title">Portafolio</h3>
            <p className="project-description">
            Portafolio de proyectos y presentación laboral 
            </p>
            <div>
              <IoLogoJavascript
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <IoLogoHtml5
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <IoLogoCss3
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <FaNodeJs 
                style={{ padding: "5px" }} 
                color="#DEF2F1" 
                size={40} />
              <SiBootstrap
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
            </div>
          </div>
        </div>

        <div className="project col-lg-4 col-md-6 col-sm-12">
          <img src={Proyecto2} alt="Proyecto 1" className="project-image" />
          <div className="project-details">
            <div>
              <a className="git" href="https://github.com/pascalcorrea/appcrud.github.io">
                <BsGithub
                  style={{ margin: "0 0 10 0" }}
                  color="#3AAFA9"
                  size={25}
                />
              </a>
              <a href="https://pascalcorrea.github.io/appcrud.github.io/">
                <BsLink45Deg
                  style={{ margin: "0 0 10 20" }}
                  color="#3AAFA9"
                  size={35}
                />
              </a>
            </div>
            <h3 className="project-title">CRUD App</h3>
            <p className="project-description">
            CRUD de inscripción a torneo de pádel
            </p>
            <div>
              <IoLogoJavascript
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <IoLogoHtml5
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <IoLogoCss3
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
            </div>
          </div>
        </div>

        <div className="project col-lg-4 col-md-6 col-sm-12">
          <img src={Proyecto1} alt="Proyecto 1" className="project-image" />
          <div className="project-details">
            <div>
              <a className="git" href="https://github.com/tu-repositorio">
                <BsGithub
                  style={{ margin: "0 0 10 0" }}
                  color="#3AAFA9"
                  size={25}
                />
              </a>
              <a href="https://pascalcorrea.github.io/vapzstore.github.io/index.html">
                <BsLink45Deg
                  style={{ margin: "0 0 10 20" }}
                  color="#3AAFA9"
                  size={35}
                />
              </a>
            </div>
            <h3 className="project-title">Landing Page</h3>
            <p className="project-description">
            Landing Page para E-Commerce de Vaporizadores
            </p>
            <div>
              <IoLogoHtml5
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
              <IoLogoCss3
                style={{ padding: "5px" }}
                color="#DEF2F1"
                size={40}
              />
            </div>
          </div>
        </div>

      </section>
    </section>
  );
}

export default Portfolio;

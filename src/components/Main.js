import React, { useState, useEffect } from 'react';
import Header from './Header';
import M from 'materialize-css'; // Materialize JS
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import mainBanner from './images/main_banner.jpg'; // Import image
import bannerImage from './images/banner_background.jpg'; // Import image
import thirdBannerImage from './images/third_parallex_image.png'; // Import image
import AutismChildForm from './AutismChildForm';
import Footer from './Footer';

const Main = () => {

  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxElements);
  }, []);

  return (
    <div className="App">

      <Header />

      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <br></br>
            <h1 className="header center teal-text text-lighten-2">AppTea</h1>
            <div className="row center">
              <h5 className="header col s12 light">Su sitio de preferencia para suplir las necesidades de las personas con TEA</h5>
            </div>
            <div className="row center">
              <a href="#perfil-paciente" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Comenzar</a>
            </div>

          </div>
        </div>
        <div className="parallax"><img src={mainBanner} alt="Unsplashed background img 1" /></div>
      </div>

      <div class="container">
        <div id="Frequent-Questions" class="section">
          <h3 className="center-align">Preguntas Frecuentes</h3>
          <div class="row">
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text"><i class="material-icons"></i></h2>
                <h5 class="center">¿Qué es el autismo y cuáles son sus síntomas principales?</h5>

                <p class="light">El autismo es un trastorno del neurodesarrollo que afecta la comunicación, las habilidades sociales y los comportamientos de las personas. Los síntomas pueden variar, pero suelen incluir dificultades en la interacción social, problemas para comunicarse verbalmente y no verbalmente, y comportamientos repetitivos o intereses restringidos.</p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text"><i class="material-icons"></i></h2>
                <h5 class="center">¿El autismo tiene cura o tratamiento?</h5>

                <p class="light">El autismo no tiene cura, ya que es una condición de por vida. Sin embargo, existen tratamientos y terapias, como la intervención temprana, la terapia ocupacional y la terapia del habla, que pueden mejorar significativamente la calidad de vida y ayudar a las personas a desarrollar habilidades para adaptarse a diferentes situaciones.</p>
              </div>
            </div>

            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center brown-text"><i class="material-icons"></i></h2>
                <h5 class="center">¿El autismo afecta a todas las personas de la misma manera?</h5>

                <p class="light">El autismo se presenta en un espectro, lo que significa que las personas pueden experimentar diferentes grados de síntomas. Algunas personas pueden necesitar más apoyo en su vida diaria, mientras que otras pueden ser muy independientes y tener habilidades cognitivas avanzadas, pero aún enfrentar desafíos en la socialización o la comprensión de las normas sociales.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="parallax-container valign-wrapper">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="row center">
              <h5 class="header col s12 light"></h5>
            </div>
          </div>
        </div>
        <div className="parallax"><img src={bannerImage} alt="Unsplashed background img 1" /></div>
      </div>

      <div id="perfil-paciente" class="container section scrollspy">
      <h2 class="center profesional-profile">Paciente</h2>
        <p class="center">Completar el perfil del paciente con información personal, médica y conductual.</p>         
            <div class="col s12 center">
              <h3><i class="mdi-content-send brown-text"></i></h3>
              <AutismChildForm />
            </div> 
      </div>

      ,<div id="third_parallax_container" class="parallax-container section scrollspy valign-wrapper">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="row center">
              <h5 class="header col s12 light"></h5>
            </div>
          </div>
        </div>
        <div className="parallax"><img src={thirdBannerImage} alt="Unsplashed background img 1"/></div>
      </div>

      <div class="container section scrollspy" id="perfil-profesional">
        <h2 class="center profesional-profile">Perfil Profesional</h2>
        <p class="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br>
          tempor incididunt ut labore et dolore magna aliqua.</p>

        <div class="row">
          <form class="col s8 offset-s2">
            <div class="row">
              <div class="input-field col s6">
                <input id="name" type="text" class="validate" />
                <label for="name">Nombre</label>
              </div>
              <div class="input-field col s6">
                <input id="email" type="email" class="validate" />
                <label for="email">Correo Electrónico</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="message-sub" type="text" class="validate" />
                <label for="message-sub">Profesión</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <textarea id="text_area" class="materialize-textarea"></textarea>
                <label for="text_area">Experiencia Profesional</label>
              </div>
            </div>

            <div>
              <a class="waves-effect waves-light btn">Enviar Perfil<i class="mdi-content-send right"></i></a>
            </div>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;


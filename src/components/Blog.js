import React, { useState, useEffect } from 'react';
import Post from './Post';
import supabase from './supabaseClient';
import Header from './Header';
import M from 'materialize-css'; // Materialize JS
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import mainBanner from './images/main_banner.jpg'; // Import image
import bannerImage from './images/banner_background.jpg'; // Import image
import Search from './Search';


const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxElements);

    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("Post") // Ensure the table name is correct
        .select('title, content, image'); // Use correct select syntax

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
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
              <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Comenzar</a>
            </div>

          </div>
        </div>
        <div className="parallax"><img src={mainBanner} alt="Unsplashed background img 1"/></div>
      </div>
      
      <div class="container">
    <div class="section">
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
    <div className="parallax"><img src={bannerImage} alt="Unsplashed background img 1"/></div>

  </div>
  <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <Search/>
        </div>
      </div>

    </div>
  </div>

  <footer class="page-footer teal">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Apptea</h5>
          <p align="left">Es una aplicación web y se analiza celular enfocada en los niños con trastorno del Espectro Autista (TEA), que tendrá como función principal apoyar a la red de cuido o encargados de los niños para tener un mejor conocimiento en la vida ordinaria de los niños con el trastorno, comportamiento experiencias, blog de compartir la vida ordinaria de ellos, de forma que puedan ser comprendidos a nivel social.</p>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Integrantes</h5>
          <ul align="left">
            <li>-Sofia Campos Sequeira</li>
            <li>-Maria Celeste Chavarria Espinoza</li>
            <li>-Isaac Alexander Herrera Hidalgo</li>
            <li>-Mei Lin Wang Rivera</li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Código</h5>
          <ul>
            <li>9E01</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Hecho por <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>


    </div>
  );
};

export default Blog;


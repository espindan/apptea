import React, { useState } from 'react';
import Header from './Header';

function AutismChildForm() {
  const [formData, setFormData] = useState({
    nombreNino: '',
    edad: '',
    gradoAutismo: '',
    cedula: '',
    tieneAlergias: '',
    alergias: '',
    tomaMedicamentos: '',
    medicamentos: '',
    tieneObjetoApoyo: '',
    objetoApoyo: '',
    dificultadesComunicacion: '',
    preferenciasComunicacion: '',
    rutinas: '',
    interesesProfundos: '',
    comportamientosRepetitivos: '',
    sensibilidadSensorial: '',
    expresionEmociones: '',
    manejoEmociones: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or process it
    console.log(formData);
  };

  return (
    <div className="App">
      
    <Header />

    <div className="container">
      <h4 className="center-align">Formulario de Información</h4>
      <form onSubmit={handleSubmit} className="col s10">
       
        <div class="row">
            {/* Nombre de niño */}
            <div className="input-field col s10">
                <label htmlFor="nombreNino">Nombre de niño:</label>
                <input
                    type="text"
                    name="nombreNino"
                    id="nombreNino"
                    value={formData.nombreNino}
                    onChange={handleChange}
                    required
                />
            </div>
            {/* Edad */}
            <div className="input-field col s2">
                <label htmlFor="edad">Edad:</label>
                <input
                    type="number"
                    name="edad"
                    id="edad"
                    value={formData.edad}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>

        <div class="row">
            {/* Cédula */}
            <div className="input-field col s6">
            <label htmlFor="cedula">Cédula:</label>
            <input
                type="text"
                name="cedula"
                id="cedula"
                value={formData.cedula}
                onChange={handleChange}
            />
            </div>

            {/* Grado de autismo */}
            <div className="input-field col s6">
            <label htmlFor="gradoAutismo">Grado de autismo:</label>
            <input
                type="text"
                name="gradoAutismo"
                id="gradoAutismo"
                value={formData.gradoAutismo}
                onChange={handleChange}
                required
            />
            </div>
        
        </div>
 
        {/* Tiene alergias */}
        <div className="input-field col s12">
          <select
            className="browser-default"
            name="tieneAlergias"
            value={formData.tieneAlergias}
            onChange={handleChange}
            required
          >
            <option value="">Tiene alergias?</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Cual/es (Alergias) */}
        {formData.tieneAlergias === 'Sí' && (
          <div className="input-field col s12">
            <label htmlFor="alergias">Cual/es (Alergias):</label>
            <input
              type="text"
              name="alergias"
              id="alergias"
              value={formData.alergias}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Toma medicamentos */}
        <div className="input-field col s12">
          <select
            className="browser-default"
            name="tomaMedicamentos"
            value={formData.tomaMedicamentos}
            onChange={handleChange}
            required
          >
            <option value="">Toma medicamentos?</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Cual/es (Medicamentos) */}
        {formData.tomaMedicamentos === 'Sí' && (
          <div className="input-field col s12">
            <label htmlFor="medicamentos">Cual/es (Medicamentos):</label>
            <input
              type="text"
              name="medicamentos"
              id="medicamentos"
              value={formData.medicamentos}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Tiene un objeto de apoyo */}
        <div className="input-field col s12">
          <select
            className="browser-default"
            name="tieneObjetoApoyo"
            value={formData.tieneObjetoApoyo}
            onChange={handleChange}
            required
          >
            <option value="">Tiene un objeto de apoyo?</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Cual/es (Objeto de apoyo) */}
        {formData.tieneObjetoApoyo === 'Sí' && (
          <div className="input-field col s12">
            <label htmlFor="objetoApoyo">Cual/es (Objeto de apoyo):</label>
            <input
              type="text"
              name="objetoApoyo"
              id="objetoApoyo"
              value={formData.objetoApoyo}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Other fields (simplified to save space) */}
        {/* Dificultades de comunicación, Preferencias de comunicación, etc. */}
        {/* Repeat similar structure for each field... */}

        {/* Submit Button */}
        <div className="input-field col s12 center-align">
          <button className="btn waves-effect waves-light" type="submit">
            Enviar Formulario
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default AutismChildForm;

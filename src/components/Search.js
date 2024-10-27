import React, { useState, useEffect } from 'react';
import supabase from './supabaseClient'; // Import your Supabase client
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

const SearchByIdScreen = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data: result, error } = await supabase
        .from('AutismProfile')
        .select('*')
        .eq('ID', id)
        .single();

      if (error) throw error;
      setData(result);
    } catch (err) {
      setError("No se encontraron resultados con ese número de cédula");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs, {});
  }, [data]);

  return (
    <div className="container">
      <h4 className="center-align">Busqueda de pacientes</h4>
      <form onSubmit={handleSearch} className="col s12">
        <div className="row center-align">
          <div className="input-field col s6">
            <i className="material-icons prefix">search</i>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <label htmlFor="id">Numero de cédula</label>
            <button type="submit" className="btn waves-effect waves-light">Buscar</button>
          </div>
        </div>
      </form>

      {loading && <div className="progress"><div className="indeterminate"></div></div>}
      {error && <h5 className="red-text">{error} !</h5>}
      {data && (
        <div className="card large" style={{ borderRadius: '15px', padding: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width">
              <li className="tab"><a href="#datos-personales" className="active">Información</a></li>
              {/* <li className="tab"><a href="#datos-medicos">Datos Medicos</a></li> */}
            </ul>
          </div>
          
          <div className="card-content row">
            <div id="datos-personales" className="tab-content col s12 m6">
              <div className="profile-image">
                <img
                  src="https://zkhendzouvpqpuzphbpv.supabase.co/storage/v1/object/sign/AppTea/ninno.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBcHBUZWEvbmlubm8uanBlZyIsImlhdCI6MTcyOTM2MDE0MywiZXhwIjoxNzYwODk2MTQzfQ.tdQCUuvDl688BltgOFfNSwHARfp3AaSlNNxBM8ITtNg&t=2024-10-19T17%3A49%3A03.886Z"
                  alt="Profile"
                />
              </div>
              <div className="profile-info">
                <h2>{data.name}</h2>
                <p><strong>Edad:</strong> {data.age}</p>
                <p><strong>Grado de Autismo:</strong> {data.autism_level}</p>
                <p><strong>Objeto de Apoyo:</strong> {data.support_object}</p>
              </div>
            </div>

            <div id="datos-medicos" className="tab-content col s12 m6">
              <ul>
                <li><strong>Alergias:</strong> {data.allergies}</li>
                <li><strong>Medicación:</strong> {data.medications}</li>
                <li><strong>Dificultades de comunicación:</strong> {data.communication_problems}</li>
                <li><strong>Preferencias de comunicación:</strong> {data.communication_preferences}</li>
                <li><strong>Rutinas:</strong> {data.routines}</li>
                <li><strong>Intereses profundos:</strong> {data.deep_interests}</li>
                <li><strong>Comportamientos repetitivos:</strong> {data.repetitive_behaviors}</li>
                <li><strong>Sensibilidad sensorial:</strong> {data.sensory_sensitivity}</li>
                <li><strong>Expresión de emociones:</strong> {data.emotional_expressions}</li>
                <li><strong>Manejo de emociones:</strong> {data.emotional_behaviors}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchByIdScreen;

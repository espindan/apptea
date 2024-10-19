import React, { useState } from 'react';
import supabase from './supabaseClient'; // Import your Supabase client
import Header from './Header';

const SearchByIdScreen = () => {
    const [id, setId] = useState('');          // State for ID input
    const [data, setData] = useState(null);    // State for fetched data
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null);  // Error state

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true);    // Set loading to true
        setError(null);      // Reset any previous error

        try {
            // Fetch data from Supabase by ID
            const { data: result, error } = await supabase
                .from('AutismProfile') // Replace with your table name
                .select('*')
                .eq('ID', id)            // Search by ID
                .single();               // Get a single result

            if (error) throw error;    // Handle errors

            setData(result);            // Set fetched data
        } catch (err) {
            setError(err.message);      // Set error message
        } finally {
            setLoading(false);           // Set loading to false
        }
    };

    return (
        <div className="App">
        <Header/>
        <div className="container">
            <h3 className="center-align">Perfil del niño</h3>
            <form onSubmit={handleSearch} className="col s12">
            <div class="row center-align">

                <div className="input-field col s6 ">
                    <i class="material-icons prefix">search</i>
                    <input
                        type="text"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                    <label htmlFor="id">Numero de cédula</label>

                    {/* <button type="submit" className="btn waves-effect waves-light">Buscar</button> */}
                </div>

                
                </div>
            </form>

            {loading && <div className="progress"><div className="indeterminate"></div></div>}
            {error && <p className="red-text">{error}</p>} {/* Display error if any */}
            {data && (
              <div className="card" style={{ borderRadius: '15px', padding: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="col s4">
                  <img
                    src="https://zkhendzouvpqpuzphbpv.supabase.co/storage/v1/object/sign/AppTea/ninno.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBcHBUZWEvbmlubm8uanBlZyIsImlhdCI6MTcyOTM2MDE0MywiZXhwIjoxNzYwODk2MTQzfQ.tdQCUuvDl688BltgOFfNSwHARfp3AaSlNNxBM8ITtNg&t=2024-10-19T17%3A49%3A03.886Z"
                    alt="profile"
                    className="responsive-img circle"
                    style={{ width: '100%', height: '100', borderRadius: '15px' }}
                  />
                </div>
                <div className="col s8">
                  <div className="card-content">
                    <h5>Nombre: {data.name}</h5>
                    <p><strong>Edad:</strong> {data.age}</p>
                    <p><strong>Grado de autismo:</strong> {data.autism_level}</p>
                    <p><strong>Alergias:</strong> {data.allergies}</p>
                    <p><strong>Medicación:</strong> {data.medications}</p>
                    <p><strong>Objeto de apoyo:</strong> {data.support_object}</p>
                    <p><strong>Dificultades de comunicación:</strong> {data.communication_problems}</p>
                    <p><strong>Preferencias de comunicación:</strong> {data.communication_preferences}</p>
                    <p><strong>Rutinas:</strong> {data.routines}</p>
                    <p><strong>Intereses profundos:</strong> {data.support_object}</p>
                    <p><strong>Comportamientos repetitivos:</strong> {data.repetitive_behaviors}</p>
                    <p><strong>Sensibilidad sensorial:</strong> {data.sensory_sensitivity}</p>
                    <p><strong>Expresión de emociones:</strong> {data.emotional_expressions}</p>
                    <p><strong>Manejo de emociones:</strong> {data.emotional_behaviors}</p>
                  </div>
                </div>
              </div>
              
              <div className="card-action" style={{ textAlign: 'center' }}>
                <a href="#" className="btn-flat" onClick={() => setData(null)}>Clear</a>
              </div>
            </div>
          
            )}
        </div>
        </div>
    );
};

export default SearchByIdScreen;

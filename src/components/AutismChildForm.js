import React, { useState, useEffect } from 'react';
import Header from './Header';
import supabase from './supabaseClient';
import M from 'materialize-css'; 

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server or process it
        console.log(formData);

        const insertAutismProfile = async () => {
            const { data, error } = await supabase
                .from('AutismProfile') // Replace with your table name
                .insert([
                    {
                        ID: formData.cedula,
                        name: formData.nombreNino,
                        age: formData.edad,
                        autism_level: formData.gradoAutismo,
                        allergies: formData.alergias,
                        medications: formData.medicamentos,
                        support_object: formData.objetoApoyo,
                        communication_problems: formData.dificultadesComunicacion,
                        communication_preferences: formData.preferenciasComunicacion,
                        routines: formData.rutinas,
                        interest: formData.interesesProfundos,
                        repetitive_behaviors: formData.comportamientosRepetitivos,
                        sensory_sensitivity: formData.sensibilidadSensorial,
                        emotional_expressions: formData.expresionEmociones,
                        emotional_behaviors: formData.manejoEmociones,
                    },
                ]);

            if (error) {
                console.error('Error inserting data:', error);
            } else {
                console.log('Data inserted successfully:', data);

                setFormData({
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

                M.Modal.getInstance(document.getElementById('successModal')).open();

            }
        };

        await insertAutismProfile();
    };

    useEffect(() => {
        // Initialize all modals
        M.Modal.init(document.querySelectorAll('.modal'));
    }, []);

    return (
        <div className="App">

            <Header />

            <div className="container">
                <h3 className="center-align">Formulario de Información</h3>
                <form onSubmit={handleSubmit} className="col s10">

                    <div className="row">
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



                    <div className="row">
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

                    {/* Tiene dificultades de comunicación */}
                    <div className="input-field col s12">
                        <select
                            className="browser-default"
                            name="dificultadesComunicacion"
                            value={formData.dificultadesComunicacion}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Tiene dificultades de comunicación?</option>
                            <option value="Sí">Sí</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* Preferencias de comunicación */}
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="preferenciasComunicacion">Preferencias de comunicación:</label>
                            <input
                                type="text"
                                name="preferenciasComunicacion"
                                id="preferenciasComunicacion"
                                value={formData.preferenciasComunicacion}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Rutinas */}
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="rutinas">Rutinas :</label>
                            <input
                                type="text"
                                name="rutinas"
                                id="rutinas"
                                value={formData.rutinas}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Intereses profundos */}
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="rutinas">Intereses profundos :</label>
                            <input
                                type="text"
                                name="interesesProfundos"
                                id="interesesProfundos"
                                value={formData.interesesProfundos}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Comportamientos repetitivos */}
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="rutinas">Comportamientos repetitivos :</label>
                            <input
                                type="text"
                                name="comportamientosRepetitivos"
                                id="comportamientosRepetitivos"
                                value={formData.comportamientosRepetitivos}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Sensibilidad sensorial: */}
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="rutinas">Sensibilidad sensorial :</label>
                            <input
                                type="text"
                                name="sensibilidadSensorial"
                                id="sensibilidadSensorial"
                                value={formData.sensibilidadSensorial}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Expresión de emociones: */}
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="rutinas">Expresión de emociones :</label>
                            <input
                                type="text"
                                name="expresionEmociones"
                                id="expresionEmociones"
                                value={formData.expresionEmociones}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Manejo de emociones: */}
                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="rutinas">Manejo de emociones :</label>
                            <input
                                type="text"
                                name="manejoEmociones"
                                id="manejoEmociones"
                                value={formData.manejoEmociones}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="input-field col s12 center-align">
                        <button className="btn waves-effect waves-light" type="submit">
                            Enviar Formulario
                        </button>
                    </div>
                </form>

                {/* Success Modal */}
                <div id="successModal" className="modal">
                    <div className="modal-content">
                        <h5>Exitoso</h5>
                        <p>La Información ha sido guardada en nuestro sistema!</p>
                    </div>
                    <div className="modal-footer">
                        <button className="modal-close btn-flat">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AutismChildForm;

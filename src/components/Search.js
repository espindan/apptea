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
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Result:</span>
                        <p><strong>Name:</strong> {data.name}</p>
                        <p><strong>Age:</strong> {data.age}</p>
                        <p><strong>Autism Level:</strong> {data.autism_level}</p>
                        {/* Display other fields as necessary */}
                    </div>
                    <div className="card-action">
                        <a href="#" className="btn-flat" onClick={() => setData(null)}>Clear</a>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default SearchByIdScreen;

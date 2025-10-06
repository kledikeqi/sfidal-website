import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const API_URL = 'http://localhost:5001/api/users/login'; 

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const { data } = await axios.post(
                API_URL,
                { email, password }
            );

            // 1. Ruani Token-in në LocalStorage
            localStorage.setItem('userInfo', JSON.stringify(data));
            
            // 2. Navigoni te Dashboard-i
            navigate('/admin/partneritet'); 

        } catch (error) {
            setMessage(error.response && error.response.data.message
                ? error.response.data.message
                : 'Hyrja dështoi. Kontrolloni email-in dhe fjalëkalimin.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={containerStyle}>
            <div style={formBoxStyle}>
                <h2>Admin Login</h2>
                {message && <p style={{ color: 'red' }}>{message}</p>}
                
                <form onSubmit={submitHandler}>
                    <div style={inputGroupStyle}>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            style={inputStyle}
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div style={inputGroupStyle}>
                        <label>Fjalëkalimi:</label>
                        <input 
                            type="password" 
                            style={inputStyle}
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" style={buttonStyle} disabled={loading}>
                        {loading ? 'Duke hyrë...' : 'Hyr'}
                    </button>
                </form>
            </div>
        </div>
    );
};

// Stilizimi i thjeshtë (për ta bërë të dukshëm)
const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', background: '#f4f4f4' };
const formBoxStyle = { background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '350px' };
const inputGroupStyle = { marginBottom: '15px' };
const inputStyle = { width: '100%', padding: '10px', margin: '5px 0', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' };
const buttonStyle = { width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' };

export default AdminLoginPage;
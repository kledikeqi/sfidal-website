import React, { useState, useEffect } from 'react';
import axios from 'axios';
// ⚠️ Importoni `useNavigate` për ridrejtim
import { useNavigate } from 'react-router-dom'; 

const API_URL = 'http://localhost:5001/api/partneritet'; 

const AdminDashboardPage = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // ⚠️ Inicializoni navigate
    const navigate = useNavigate();

    // Funksioni për logout
    const logoutHandler = () => {
        // Fshij tokenin e ruajtur
        localStorage.removeItem('userInfo');
        // Ridrejto te faqja e login-it
        navigate('/admin/login');
    };

    useEffect(() => {
        const fetchRequests = async () => {
            // 1. Marrja e Informacionit të Përdoruesit nga LocalStorage
            const userInfo = localStorage.getItem('userInfo') 
                             ? JSON.parse(localStorage.getItem('userInfo')) 
                             : null;
            
            // 2. Kontrolli i Mbrojtjes (Ridrejtimi nëse Tokeni Mungon)
            if (!userInfo || !userInfo.token) {
                // Fshije çdo informacion të vjetër të ruajtur
                localStorage.removeItem('userInfo'); 
                // Ridrejto te faqja e login-it
                navigate('/admin/login');
                return; // Ndalo ekzekutimin e mëtejshëm
            }

            try {
                // 3. Konfiguro Header-at me Tokenin
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        // ⚠️ Kjo rresht i shton tokenin kërkesës
                        Authorization: `Bearer ${userInfo.token}`, 
                    },
                };
                
                // 4. Thirrja e API-së GET duke përdorur konfigurimin (config)
                const response = await axios.get(API_URL, config);
                
                // Ruajmë të dhënat e marra
                setRequests(response.data.data); 
                setLoading(false);
            } catch (err) {
                // 5. Trajtimi i gabimit 401 (Tokeni i pavlefshëm/skaduar)
                if (err.response && err.response.status === 401) {
                    localStorage.removeItem('userInfo');
                    navigate('/admin/login');
                    setError("Tokeni skadoi. Ju lutem hyni sërish.");
                } else {
                    setError("Dështoi marrja e kërkesave nga serveri.");
                }
                console.error("Gabim në marrjen e të dhënave të partneritetit:", err);
                setLoading(false);
            }
        };

        fetchRequests();
    // ⚠️ Shtoni `Maps` si dependency për shkak të funksionit brenda useEffect
    }, [navigate]); 

    if (loading) return <h2>Duke Ngarkuar Kërkesat...</h2>;
    if (error) return <h2 style={{ color: 'red' }}>Gabim: {error}</h2>;

    return (
        <div className="container" style={{ padding: '20px' }}>
            {/* ⚠️ Krijojmë një rresht me Flexbox për të vendosur titullin dhe butonin krah për krah */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h1>Dashboard-i i Administratorit</h1>
                
                {/* ⚠️ BUTONI I LOGOUT */}
                <button 
                    onClick={logoutHandler} 
                    style={{ padding: '10px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Dil (Logout)
                </button>
            </div>
            
            <p>Kërkesa Gjithsej: {requests.length}</p>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={tableHeaderStyle}>ID/Data</th>
                        <th style={tableHeaderStyle}>Kompania</th>
                        <th style={tableHeaderStyle}>Kontakti</th>
                        <th style={tableHeaderStyle}>Mesazhi</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((req) => (
                        <tr key={req._id} style={tableRowStyle}>
                            <td style={tableCellStyle}>{new Date(req.createdAt).toLocaleDateString()}</td>
                            <td style={tableCellStyle}>{req.companyName}</td>
                            <td style={tableCellStyle}>{req.contactPerson} ({req.email})</td>
                            <td style={tableCellStyle}>{req.message.substring(0, 50)}...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Stilizimi i thjeshtë (opsional)
const tableHeaderStyle = { border: '1px solid #ddd', padding: '8px', textAlign: 'left' };
const tableCellStyle = { border: '1px solid #ddd', padding: '8px' };
const tableRowStyle = { borderBottom: '1px solid #ccc' };

export default AdminDashboardPage;
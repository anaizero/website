import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();



    useEffect(() => {
        // Check if token exists and is valid (optional: verify with backend)
        if (token) {
            // For now, just assume logged in if token exists. 
            // Ideally, we should fetch user profile here.
            setUser({ name: 'Admin' });
        }
        setLoading(false);
    }, [token]);

    const login = async (username, password) => {
        try {
            const data = await api.login({ username, password });

            // Assuming the response is the token or contains the token.
            // If it's a simple string token:
            const receivedToken = typeof data === 'object' && data.token ? data.token : data;

            setToken(receivedToken);
            localStorage.setItem('authToken', receivedToken);
            setUser({ name: username });
            navigate('/admin/dashboard');
            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: error.message };
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        navigate('/admin/login');
    };

    const value = {
        user,
        token,
        login,
        logout,
        loading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};

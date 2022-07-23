import React, { useContext } from "react";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SingIn from './pages/SingInPage';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
    
} from 'react-router-dom'

import { AuthProvider, AuthContext } from "./contexts/auth";


function AppRoutes() {

    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return (
                <div className="loading">
                    Carregando...
                </div>

            )
        }

        if (!authenticated) {
            return (
                <>
                    <Navigate to={'/'} />
                </>
            ) 
        }

        return children;
    }

    return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/home" element={<Private><HomePage /></Private>} />
                <Route exact path="/sing-in" element={<SingIn />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
    );
}

export default AppRoutes;
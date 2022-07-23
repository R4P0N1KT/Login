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
                    <Navigate to={'https://r4p0n1kt.github.io/raplataform/'} />
                </>
            ) 
        }

        return children;
    }

    return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route exact path="https://r4p0n1kt.github.io/raplataform/" element={<LoginPage />} />
                <Route exact path="https://r4p0n1kt.github.io/raplataform/home" element={<Private><HomePage /></Private>} />
                <Route exact path="https://r4p0n1kt.github.io/raplataform/sing-in" element={<SingIn />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
    );
}

export default AppRoutes;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import './style.css';

function LoginPage() {

    const { login } = useContext(AuthContext);

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        login(email, password)
    }

    return (
        <main className='container'>
            <h2 id='login'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-field'>
                    <input type='email' id='email'
                    value={email} placeholder='Insira seu email' 
                    onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className='input-field'>
                    <input type='password' id='password'
                    value={password} placeholder='Insira sua senha'
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type='submit'>Entrar</button>
            </form>
            <div className='footer'>
                <Link to='/sing-in'>Não possue conta? Registre-se aqui!</Link>
            </div>
        </main>
    )
}

export default LoginPage;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const SingIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
    }

    return (
        <main className="container">
            <h2 id='sing-in'>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input type='text' name='username' id='username'
                    placeholder='Insira seu nome'/>
                </div>
                <div className="input-field">
                    <span>Date of Birth</span>
                    <input type='date' name='date' id='birthday'
                    placeholder='Insira sua data de nascimento'/>
                </div>
                <div className="input-field">
                    <input type='email' name='email' id='email'
                    placeholder='Insira seu email'/>
                </div>
                <div className="input-field">
                    <input type='password' name='password' id='password'
                    placeholder='Crie uma senha'/>
                </div>
                <Link to='https://r4p0n1kt.github.io/raplataform/'><button type='submit'>Registrar</button></Link>
            </form>
            <div class="footer">
            <span>Ou entre através das redes sociais</span>
            <div class="social-fields">
                <div class="social-field twitter">
                    <a href="#">
                        <i class="fab fa-twitter"></i>
                        Conectar-se com Twitter
                    </a>
                </div>
                <div class="social-field facebook">
                    <a href="#">
                        <i class="fab fa-facebook-f"></i>
                        Conectar-se com Facebook
                    </a>
                </div>
            </div>
        </div>
        </main>
    )
}

export default SingIn;
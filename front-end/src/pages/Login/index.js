import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import cooking from '../../images/cooking.png';
// import './styles.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const regex = /\S+@\S+\.\S+/;
  const minPassword = 6;

  function btnSubmit() {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/');
  }

  return (
    <main id="login">
      <h1>Login</h1>
      {/* <div id="logo">
        <img src={ cooking } alt="logo" />
        <h1>Recipe App</h1>
      </div> */}
      <input
        data-testid="common_login__input-email"
        className="input"
        id="email"
        type="text"
        placeholder="Email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        data-testid="common_login__input-password"
        className="input"
        id="password"
        type="password"
        placeholder="Password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        data-testid="common_login__button-login"
        type="button"
        id="loginBtn"
        disabled={ !(password.length >= minPassword && regex.test(email)) }
        onClick={ btnSubmit }
      >
        Login
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
        id="registerBtn"
        // disabled={ !(password.length > minPassword && regex.test(email)) }
        // onClick={ btnSubmit }
      >
        Register
      </button>
      {
        !regex.test(email)
        && (
          <span data-testid="common_login__element-invalid-email">
            Format email invalid
          </span>
        )
      }
    </main>
  );
}

export default Login;

// common_login__input-email
// common_login__input-password
// common_login__button-login
// common_login__button-register
// common_login__element-invalid-email

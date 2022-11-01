import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin, setToken, requestData } from '../../services/fatchLogin';

// import cooking from '../../images/cooking.png';
// import './styles.scss';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  // const [ loginSucess, setloginSucess ] = useState(true);
  const navigate = useNavigate();

  const regex = /\S+@\S+\.\S+/;
  const minPassword = 6;

  async function btnSubmit(event) {
    event.preventDefault();

    try {
      const { token } = await requestLogin('/login', { email, password });

      setToken(token);

      const userData = await requestData('/login/validate');

      // localStorage.setItem('token', token);
      // localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(userData));

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  }

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  function btnResgister() {
    navigate('/register');
  }

  if (isLogged) navigate('/customer/products');

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
        onClick={ btnResgister }
      >
        Register
      </button>
      {
        (failedTryLogin)
          ? (
            <p data-testid="common_login__element-invalid-email">
              {
                `O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`
              }
            </p>
          )
          : null
      }
    </main>
  );
}

export default Login;

// fulana@deliveryapp.com
// fulana@123
// common_login__button-login
// common_login__button-register
// common_login__element-invalid-email

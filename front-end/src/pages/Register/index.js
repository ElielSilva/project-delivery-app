import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { requestLogin } from '../../services/fetchLogin';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [FailedTryCreate, setFailedTryCreate] = useState(false);

  const minPassword = 6;
  const minName = 12;
  const regex = /\S+@\S+\.\S+/;

  async function btnSubmit() {
    try {
      const bodyRequestCreate = {
        name, email, password, role: 'customer',
      };
      console.log(bodyRequestCreate);
      const userData = await requestLogin('/register', bodyRequestCreate);
      // console.log(userData);
      // setToken(token);

      // const { role } = await requestData('/login/validate');

      localStorage.setItem('user', JSON.stringify(userData));
      // localStorage.setItem('role', role);

      setIsLogged(true);
    } catch (error) {
      setFailedTryCreate(true);
      setIsLogged(false);
    }
  }

  useEffect(() => {
    setFailedTryCreate(false);
  }, [name, email, password]);

  if (isLogged) return <Navigate to="/customer/products" />;

  return (
    <main>
      <h1>Registro</h1>
      <input
        data-testid="common_register__input-name"
        className="input"
        id="name"
        type="text"
        placeholder="Nome"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
      <input
        data-testid="common_register__input-email"
        className="input"
        id="email"
        type="text"
        placeholder="Email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        data-testid="common_register__input-password"
        className="input"
        id="password"
        type="text"
        placeholder="Senha"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        data-testid="common_register__button-register"
        type="button"
        id="resgisterBtn"
        disabled={
          !(password.length >= minPassword && name.length >= minName
          && regex.test(email))
        }
        onClick={ btnSubmit }
      >
        Cadastro
      </button>
      {
        FailedTryCreate
        && (
          <p data-testid="common_register__element-invalid_register">
            os campos nome ou email são invalidos
          </p>
        )
      }
    </main>
  );
}

// - 6: common_register__input-name
// - 7: common_register__input-email
// - 8: common_register__input-password
// - 9: common_register__button-register
// - 10: common_register__element-invalid_register

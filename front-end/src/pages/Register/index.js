import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const minPassword = 6;
  const minName = 12;
  const regex = /\S+@\S+\.\S+/;

  function btnSubmit() {

  }

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
    </main>
  );
}

// - 6: common_register__input-name
// - 7: common_register__input-email
// - 8: common_register__input-password
// - 9: common_register__button-register
// - 10: common_register__element-invalid_register

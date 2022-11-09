import React, { useState } from 'react';
import { postRequest } from '../../services/request';

const emailRegex = /\S+@\S+\.\S+/;
const minName = 12;
const minPassword = 6;

export default function AdminManager() {
  const [personName, setPersonName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [failed, setFailed] = useState(false);

  async function btnSubmit() {
    try {
      const bodyRequestCreate = {
        name: personName, email, password, role,
      };
      await postRequest('/admin/manage', bodyRequestCreate);
    } catch (error) {
      setFailed(true);
    }
  }

  return (
    <div>
      <div>
        <h1>Cadastrar novo usuário</h1>
        {
          failed
            ? (
              <p data-testid="admin_manage__element-invalid-register">
                Erro no cadastro
              </p>
            )
            : ''
        }

        <label htmlFor="personName">
          Nome
          <input
            data-testid="admin_manage__input-name"
            type="text"
            name="personName"
            id="personName"
            placeholder="Nome e sobrenome"
            value={ personName }
            onChange={ (e) => setPersonName(e.target.value) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            data-testid="admin_manage__input-email"
            type="text"
            name="email"
            id="email"
            placeholder="seu-email@site.com.br"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            data-testid="admin_manage__input-password"
            type="password"
            name="password"
            id="password"
            placeholder="******"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>

        <label htmlFor="role">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            name="role"
            id="role"
            defaultValue="vendedor"
            value={ role }
            onChange={ (e) => setRole(e.target.value) }
          >
            <option key="seller" value="seller">
              Vendedor
            </option>

            <option key="customer" value="customer">
              Cliente
            </option>

            <option key="administrator" value="administrator">
              Administrador
            </option>
          </select>
        </label>

        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={
            !(personName.length >= minName
              && password.length >= minPassword
              && emailRegex.test(email))
          }
          onClick={ btnSubmit }
        >
          Cadastrar
        </button>

      </div>
    </div>
  );
}

import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Container, Content, Background } from './styles'

const SigIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo GoBarber" />

        <form>
          <h1>Faça seu login</h1>

          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a>Esqueci minha senha</a>
        </form>
        <a>
          <FiLogIn />
          Criar uma conta
        </a>
      </Content>
      <Background />
    </Container>
  )
}

export default SigIn

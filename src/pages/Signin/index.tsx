import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import * as Styled from './styles'

const SigIn: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logoImg} alt="Logo GoBarber" />

        <form>
          <h1>Faça seu login</h1>

          <Input type="email" name="email" placeholder="E-mail" icon={FiMail} />

          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Entrar</Button>

          <a>Esqueci minha senha</a>
        </form>
        <a>
          <FiLogIn />
          Criar uma conta
        </a>
      </Styled.Content>
      <Styled.Background />
    </Styled.Container>
  )
}

export default SigIn

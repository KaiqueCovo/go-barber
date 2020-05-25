import React from 'react'
import { Form } from '@unform/web'
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import * as Styled from './styles'

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }

  return (
    <Styled.Container>
      <Styled.Background />
      <Styled.Content>
        <img src={logoImg} alt="Logo GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input type="text" name="name" placeholder="Nome" icon={FiUser} />
          <Input type="email" name="email" placeholder="E-mail" icon={FiMail} />

          <Input
            type="password"
            name="password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a>
          <FiArrowLeft />
          Voltar para o Logon
        </a>
      </Styled.Content>
    </Styled.Container>
  )
}

export default SignUp

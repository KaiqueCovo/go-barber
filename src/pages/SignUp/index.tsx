import React, { useCallback } from 'react'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import * as Styled from './styles'

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      /* Schema validation */
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

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

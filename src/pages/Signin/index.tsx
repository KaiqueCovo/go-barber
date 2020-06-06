import React, { useRef, useCallback, useContext } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { AuthContext } from '../../context/AuthContext'
import getValidationErrors from '../../utils/getValidationErrors'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import * as Styled from './styles'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const auth = useContext(AuthContext)

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({})

        /* Schema validation */
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail válido')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        auth.signIn({
          email: data.email,
          password: data.password,
        })
      } catch (error) {
        const errors = getValidationErrors(error)

        formRef.current?.setErrors(errors)
      }
    },
    [auth]
  )

  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logoImg} alt="Logo GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
        <a>
          <FiLogIn />
          Criar uma conta
        </a>
      </Styled.Content>
      <Styled.Background />
    </Styled.Container>
  )
}

export default SignIn

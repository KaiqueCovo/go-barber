import styled from 'styled-components'
import { shade } from 'polished'

import signInBakcgroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 340px;

    margin: 80px 0 0;
    text-align: center;

    h1 {
      margin: 0 0 24px 0;
    }

    input {
      width: 100%;

      background: #232129;
      color: #f4ede8;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin: 8px 0 0;
      }
    }

    button {
      width: 100%;
      height: 56px;

      background: #ff9000;
      color: #312e38;
      margin: 16px 0;
      border-radius: 10px;
      padding: 0 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      display: block;

      color: #f4ede8;
      margin: 24px 0 0;
      transition: color 0.2;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;

    color: #ff9000;
    margin: 24px 0 0;
    transition: color 0.2;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signInBakcgroundImg}) no-repeat center;
  background-size: cover;
`

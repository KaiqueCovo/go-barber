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

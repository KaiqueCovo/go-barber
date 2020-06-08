import styled, { keyframes } from 'styled-components'
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
  justify-content: center;
  align-items: center;
`

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${appearFromLeft} 1s;

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

const appearBackgroundFromOpacity = keyframes`
 from {
   opacity: 0;
 }
 to {
   opacity: 1;
 }
`

export const Background = styled.div`
  flex: 1;
  background: url(${signInBakcgroundImg}) no-repeat center;
  background-size: cover;

  animation: ${appearBackgroundFromOpacity} 2s;
`

import styled, { css } from 'styled-components'

interface ToastProps {
  type?: 'success' | 'error' | 'info'
  hasDescription: boolean
}

const ToastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656d;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
}

export const Container = styled.div<ToastProps>`
  display: flex;
  align-items: center;

  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  ${(props) => ToastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0;
  }

  div {
    flex: 1;

    p {
      margin: 4px 0 0;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      margin-top: 0;
    `}
`

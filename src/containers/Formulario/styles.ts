import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  max-width: 547px;
  font-weight: bold;
  font-size: 14px;
  color: #666;

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 16px;
    margin-left: 6px;
  }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`

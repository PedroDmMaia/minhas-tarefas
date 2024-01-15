import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: Roboto, sans-serif;
  }
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 95vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 18px;
  margin: 40px 0;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  background-color: #fff;
  font-weight: bold;
  color: #666;
  border-color: #666;
  width: 100%;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal

import EstiloGlobal, { Container } from './styles'
import { Provider } from 'react-redux'

import store from './store'

import BarraLAteral from './containers/BarraLaterla'
import ListaTarefas from './containers/ListaTarefas'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLAteral />
        <ListaTarefas />
      </Container>
    </Provider>
  )
}

export default App

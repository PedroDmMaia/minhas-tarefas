import { Provider } from 'react-redux'

import BarraLAteral from './containers/BarraLaterla'
import ListaTarefas from './containers/ListaTarefas'
import EstiloGlobal, { Container } from './styles'

import store from './store'

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

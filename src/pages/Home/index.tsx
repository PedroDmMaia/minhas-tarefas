import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLAteral from '../../containers/BarraLaterla'
import ListaTarefas from '../../containers/ListaTarefas'

const Home = () => (
  <>
    <BarraLAteral mostrarFiltros={true} />
    <ListaTarefas />
    <BotaoAdicionar />
  </>
)

export default Home

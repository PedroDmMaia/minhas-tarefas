import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'

import * as S from './styles'

const ListaTarefas = () => {
  const { Tarefas } = useSelector((state: RootReducer) => state)

  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {Tarefas.map((item) => (
          <li key={item.id}>
            <Tarefa
              Titulo={item.titulo}
              prioridade={item.prioridade}
              status={item.status}
              descricao={item.descricao}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaTarefas

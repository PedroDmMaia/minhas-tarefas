import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'

import * as S from './styles'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementação =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementação}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${valor}" ${complementação}`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)

  return (
    <S.Container>
      <S.Resultado>{mensagem}</S.Resultado>
      <ul>
        {tarefas.map((item) => (
          <li key={item.titulo}>
            <Tarefa
              id={item.id}
              titulo={item.titulo}
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

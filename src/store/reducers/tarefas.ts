import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/tarefa'

import * as enums from '../../utils/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'estudar js',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'estudar js no modulo 5',
      1
    ),
    new Tarefa(
      'estudar react',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'rever aula 2 do módulo',
      2
    ),
    new Tarefa(
      'estudar ts',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'praticar o useEffect',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer

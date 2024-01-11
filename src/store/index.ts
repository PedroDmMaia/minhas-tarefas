import { configureStore } from '@reduxjs/toolkit'

import TarefaRedecer from './reducers/tarefas'
import filtrosReducer from './reducers/filtros'

const store = configureStore({
  reducer: {
    tarefas: TarefaRedecer,
    filtro: filtrosReducer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>

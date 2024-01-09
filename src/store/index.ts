import { configureStore } from '@reduxjs/toolkit'

import TarefaRedecer from './reducers/tarefas'

const store = configureStore({
  reducer: {
    Tarefas: TarefaRedecer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>

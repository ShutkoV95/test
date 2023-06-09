import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cardsReducer from './cardsSlice';
import historyReducer from './historySlice';
import counterAgentReducer from './counterAgentsSlice'



const rootReducer = combineReducers({
    cards: cardsReducer,
    history: historyReducer,
    counterAgent: counterAgentReducer,
})


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = configureStore ({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export default store
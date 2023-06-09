import { createSlice } from "@reduxjs/toolkit";
import { counterAgent } from "../data";
import { randomId } from "../helpers"

const counterAgentSlice = createSlice({
    name: 'counterAgent',
    initialState: {
        counterAgent: counterAgent,
    },
    reducers: {
        
        delCardCA(state, action) {
            state.counterAgent = state.counterAgent.filter(card => card.id !== action.payload)
        },

        resetStylesOnCA(state) {
          state.counterAgent = state.counterAgent.map(card => { return {...card, colorOn: false}})
        },

        selectedCardOnCA(state, action) {
            state.counterAgent = state.counterAgent.map(card => { return {...card, colorOn: false}})
            state.counterAgent = state.counterAgent.map(card => {
              if (card.id !== action.payload.id) {
                return card;
              }
              return { ...card, colorOn: !counterAgent.colorOn}
            })
          },

        addCardCA(state, action) {
            state.counterAgent.push({
              id: randomId(),
              number: action.payload.number,
              date: action.payload.date,
              surname: action.payload.surname,
              name: action.payload.name,
              patronymic: action.payload.patronymic,
            })
          }
    }
})


export const { delCardCA, addCardCA, resetStylesOnCA, selectedCardOnCA } = counterAgentSlice.actions

export default counterAgentSlice.reducer
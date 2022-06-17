import { createSlice, createAction } from '@reduxjs/toolkit'

const SLICE_NAME = 'main';

const initialState = {
    value:0,    
}

const reducers = {
    increment: (state) => {
        state.value += 1
    },
    decrement: (state) => {
        state.value -= 1
    },
    setValue:{
        reducer: (state, { payload: { key, value } }) => {
            state[key] = value;
        },
        prepare: (key, value) => {
            return { payload: {key, value} };
        }
    }
}

const sagaAction = {
    testCall: createAction(SLICE_NAME + '/callApi'),
}

export const mainSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers,
})

export const getState = (state) => state[SLICE_NAME];

export const actions = {
    ...mainSlice.actions,
    ...sagaAction,
};

export default mainSlice.reducer;

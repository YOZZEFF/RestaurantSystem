import  {configureStore, createSlice}  from '@reduxjs/toolkit'
const initialState = {
    user: localStorage.getItem('user') || null,
    token: localStorage.getItem('token') || null,

}

export const userslice = createSlice({
    name: 'user',
    initialState,
    reducers:{
       
        login : (state,action)=>{
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        logout(state) {
            state.token = null;
            state.user = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          },

    }
})  
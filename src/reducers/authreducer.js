import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   isAuthorized:false,
   authToken:''
}

const AuthSlice = createSlice({
   name:'auth',
   initialState,
   reducers: {
      getToken(state,action) {
         state.authToken = action.payload
      }
   }
})

export const { getToken } = AuthSlice.actions;
export default AuthSlice.reducer;
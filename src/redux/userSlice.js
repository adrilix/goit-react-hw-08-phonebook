import { createSlice } from "@reduxjs/toolkit"
import { registerThunk } from "./phonebookReducer";

const initialState = {
      isLoading: false,
      error: null,
      userData: null,
      token: null,
  };
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    // reducers: {

    //   },
    
    extraReducers: builder => 
    builder
        .addCase(registerThunk.pending, (state) => {
            state.isLoading = true ;
            state.error = null ;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false ;
        state.userData = action.payload.user ;
        state.token = action.payload.token ;
      })
      .addCase(registerThunk.rejected, (state, {error}) => { 
        state.isLoading = false ;
        state.error = error ;
      })
  
//       .addCase(addContactThunk.pending, (state) => {
//     })
//       .addCase(addContactThunk.fulfilled, (state, action) => {
//     })
//     .addCase(addContactThunk.rejected, (state, {error}) => { 
//     })
  
//     .addCase(deleteContactThunk.pending, (state) => {
//   })
//     .addCase(deleteContactThunk.fulfilled, (state, action) => {
//   })
//   .addCase(deleteContactThunk.rejected, (state, {error}) => { 
//   }),
});

  export const userReducer = userSlice.reducer;
import  { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal';
import { Iuser } from '../../types/Type';

export interface initialState {
  users :   Iuser[]
}

const initialState : initialState = {
    users : []
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUsers(state : WritableDraft<initialState>,action : PayloadAction<Iuser[]>){state.users= action.payload},
    },
  });


export const { setUsers} = UserSlice.actions;
export default UserSlice.reducer;
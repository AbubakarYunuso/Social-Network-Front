import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReactNode } from 'react';

export interface Grops {
  _id:string,
  user: string,
  name:string,
  discription: string,
  followers: string[],
  post: string[]
  __v: number,
  image: string
}

export interface InitialState {
  group: Grops[];
  loading: boolean;
  error: null | unknown | string | ReactNode
}

export const initialState: InitialState = {
  group: [],
  loading: false,
  error: null,
};

export const getGroups = createAsyncThunk<
  Grops[],
  void,
  { rejectValue: string | unknown }
>("get/group", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/group");
    const data = await res.json();

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGroups.fulfilled, (state, action:PayloadAction<Grops[]>) => {
        state.group = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(getGroups.pending, (state, _) => {
        state.error = null
        state.loading = true
      })
      .addCase(getGroups.rejected, (state, action:PayloadAction<string | unknown>)=>{
        state.loading = false
        state.error = action.payload
      })
  },
});

export default groupSlice.reducer;

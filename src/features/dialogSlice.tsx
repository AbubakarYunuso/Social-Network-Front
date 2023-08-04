import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dialog: [],
};

export const getDialog = createAsyncThunk("get/dialog", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/getdialogs");
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDialog.fulfilled, (state, action) => {
      state.dialog = action.payload;
    });
  },
});

export default dialogSlice.reducer;

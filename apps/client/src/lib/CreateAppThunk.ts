import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState, AppDispatch, Dependencies } from "./CreateStore";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: Dependencies;
}>();

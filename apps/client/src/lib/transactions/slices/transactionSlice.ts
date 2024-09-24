// src/lib/transactions/slices/transactionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTransactions } from "../usecases/FetchTransactionsUseCase";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  balance: string;
}

interface TransactionState {
  list: Transaction[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TransactionState = {
  list: [],
  status: "idle",
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<Transaction[]>) => {
          state.status = "succeeded";
          state.list = action.payload;
        }
      )
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch transactions";
      });
  },
});

export default transactionSlice.reducer;

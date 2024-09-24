// src/lib/transactions/usecases/FetchTransactionsUseCase.ts
import { createAppAsyncThunk } from "../../CreateAppThunk";

export const fetchTransactions = createAppAsyncThunk(
  "transactions/fetchTransactions",
  async (_, { extra }) => {
    const { transactionService } = extra;
    return transactionService.getTransactions();
  }
);

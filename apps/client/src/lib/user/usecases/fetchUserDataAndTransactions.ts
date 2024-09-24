// src/lib/auth/usecases/FetchUserDataAndTransactionsUseCase.ts
import { createAppAsyncThunk } from "../../CreateAppThunk";
import { retrieveUserInfo } from "../../auth/usecases/RetrieveUserInfoUseCase";
import { fetchTransactions } from "../../transactions/usecases/FetchTransactionsUseCase";
import { logout } from "../../auth/slices/authSlice";

export const fetchUserDataAndTransactions = createAppAsyncThunk(
  "auth/fetchUserDataAndTransactions",
  async (_, { dispatch }) => {
    try {
      await dispatch(retrieveUserInfo()).unwrap();
      await dispatch(fetchTransactions()).unwrap();
    } catch (error) {
      dispatch(logout());
      throw error;
    }
  }
);

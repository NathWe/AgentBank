// src/lib/auth/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "../usecases/LoginUseCase";
import { retrieveUserInfo } from "../usecases/RetrieveUserInfoUseCase";
import { updateUserInfo } from "../usecases/UpdateUserInfoUseCase";
import { fetchUserDataAndTransactions } from "../../user/usecases/fetchUserDataAndTransactions";

export interface AuthState {
  user: { firstName: string; lastName: string } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        login.fulfilled,
        (
          state,
          action: PayloadAction<{
            user: { firstName: string; lastName: string };
          }>
        ) => {
          state.status = "succeeded";
          state.user = action.payload.user;
        }
      )
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to login";
      })
      .addCase(
        retrieveUserInfo.fulfilled,
        (
          state,
          action: PayloadAction<{ firstName: string; lastName: string }>
        ) => {
          state.user = action.payload;
        }
      )
      .addCase(
        updateUserInfo.fulfilled,
        (
          state,
          action: PayloadAction<{ firstName: string; lastName: string }>
        ) => {
          if (state.user) {
            state.user.firstName = action.payload.firstName;
            state.user.lastName = action.payload.lastName;
          }
        }
      )
      .addCase(fetchUserDataAndTransactions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDataAndTransactions.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(fetchUserDataAndTransactions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

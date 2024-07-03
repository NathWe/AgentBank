import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  tokenStatus: "void" | "pending" | "rejected" | "resolved";
  dataStatus: "void" | "pending" | "rejected" | "resolved";
  user: {
    firstName: string;
    lastName: string;
  } | null;
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  tokenStatus: "void",
  dataStatus: "void",
  user: null,
  error: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userTokenFetching(
      state,
      _action: PayloadAction<{ userLogin: { email: string; password: string } }>
    ) {
      if (state.tokenStatus === "void" || state.tokenStatus === "rejected") {
        state.tokenStatus = "pending";
        state.error = null;
      }
    },
    userTokenResolved(state, action: PayloadAction<string>) {
      if (state.tokenStatus === "pending") {
        state.tokenStatus = "resolved";
        state.token = action.payload;
      }
    },
    userTokenRejected(state, action: PayloadAction<string>) {
      if (state.tokenStatus === "pending") {
        state.tokenStatus = "rejected";
        state.error = action.payload;
        state.token = null;
      }
    },
    userDataFetching(state, _action: PayloadAction<string>) {
      if (state.dataStatus === "void" || state.dataStatus === "rejected") {
        state.dataStatus = "pending";
        state.error = null;
      }
    },
    userDataResolved(
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) {
      if (state.dataStatus === "pending") {
        state.dataStatus = "resolved";
        state.user = action.payload;
      }
    },
    userDataRejected(state, action: PayloadAction<string>) {
      if (state.dataStatus === "pending") {
        state.dataStatus = "rejected";
        state.error = action.payload;
        state.user = null;
      }
    },
    updateUserProfile(
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) {
      if (state.user) {
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
      }
    },
    reset(state) {
      Object.assign(state, initialState);
    },
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;

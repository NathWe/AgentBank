import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../CreateStore";

interface UserState {
  dataStatus: "void" | "pending" | "rejected" | "resolved";
  user: {
    firstName: string;
    lastName: string;
  } | null;
  error: string | null;
}

const initialState: UserState = {
  dataStatus: "void",
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
      state.user = null;
    },
  },
});

export const selectUser = (state: RootState) => state.auth;

export const { actions } = userSlice;
export default userSlice.reducer;

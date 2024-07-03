import { RootState } from "../../store";
import { UserState } from "./reducer";

export const selectUser = (state: RootState) => state.auth as UserState;

export const selectUserTokenStatus = (state: RootState) =>
  state.auth.tokenStatus;
export const selectUserDataStatus = (state: RootState) => state.auth.dataStatus;

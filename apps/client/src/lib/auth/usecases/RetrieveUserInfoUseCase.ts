// src/lib/auth/usecases/RetrieveUserInfoUseCase.ts
import { createAppAsyncThunk } from "../../CreateAppThunk";

export const retrieveUserInfo = createAppAsyncThunk(
  "auth/fetchUserData",
  async (_, { extra }) => {
    const { authService } = extra;
    return authService.fetchUserData();
  }
);

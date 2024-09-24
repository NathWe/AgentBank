// src/lib/auth/usecases/UpdateUserInfoUseCase.ts
import { createAppAsyncThunk } from "../../CreateAppThunk";

export const updateUserInfo = createAppAsyncThunk(
  "auth/updateUserData",
  async (params: { firstName: string; lastName: string }, { extra }) => {
    const { authService } = extra;
    return authService.updateUserData(params.firstName, params.lastName);
  }
);

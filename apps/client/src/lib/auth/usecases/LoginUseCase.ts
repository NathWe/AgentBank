// src/lib/auth/usecases/LoginUseCase.ts
import { createAppAsyncThunk } from "../../CreateAppThunk";

export const login = createAppAsyncThunk(
  "auth/login",
  async (credentials: { email: string; password: string }, { extra }) => {
    const { authService } = extra;
    return authService.login(credentials.email, credentials.password);
  }
);

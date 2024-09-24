// src/lib/auth/infra/FakeAuthService.ts
import { IAuthService } from "../models/IAuthService";

export class FakeAuthService implements IAuthService {
  async login(
    email: string,
    password: string
  ): Promise<{ user: { firstName: string; lastName: string } }> {
    console.log("Fake login called", email, password);
    return {
      user: { firstName: "Fake", lastName: "User" },
    };
  }

  async fetchUserData(): Promise<{ firstName: string; lastName: string }> {
    console.log("Fake fetchUserData called");
    return { firstName: "Fake", lastName: "User" };
  }

  async updateUserData(
    firstName: string,
    lastName: string
  ): Promise<{ firstName: string; lastName: string }> {
    console.log("Fake updateUserData called", firstName, lastName);
    return { firstName, lastName };
  }
}

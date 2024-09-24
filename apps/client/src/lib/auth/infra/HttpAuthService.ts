// src/lib/auth/infra/HttpAuthService.ts
import axios from "axios";
import { IAuthService } from "../models/IAuthService";

export class HttpAuthService implements IAuthService {
  private apiUrl =
    process.env.REACT_APP_API_URL || "http://localhost:3001/api/v1";

  private _retrieveToken(): string | null {
    return localStorage.getItem("token");
  }

  async login(
    email: string,
    password: string
  ): Promise<{ user: { firstName: string; lastName: string } }> {
    const response = await axios.post(`${this.apiUrl}/user/login`, {
      email,
      password,
    });
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }

    localStorage.setItem("token", response.data.body.token);

    return { user: await this.fetchUserData() };
  }

  async fetchUserData(): Promise<{ firstName: string; lastName: string }> {
    const response = await axios.post(`${this.apiUrl}/user/profile`, null, {
      headers: {
        Authorization: `Bearer ${this._retrieveToken()}`,
      },
    });
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    return response.data.body;
  }

  async updateUserData(
    firstName: string,
    lastName: string
  ): Promise<{ firstName: string; lastName: string }> {
    const response = await axios.put(
      `${this.apiUrl}/user/profile`,
      { firstName, lastName },
      {
        headers: {
          Authorization: `Bearer ${this._retrieveToken()}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    return response.data.body;
  }
}

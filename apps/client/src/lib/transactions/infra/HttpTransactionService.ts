// src/lib/transactions/infra/HttpTransactionService.ts
import axios from "axios";
import { ITransactionService } from "../models/ITransactionService";

export class HttpTransactionService implements ITransactionService {
  private apiUrl =
    process.env.REACT_APP_API_URL || "http://localhost:3001/api/v1";

  private getAuthHeaders() {
    const token = localStorage.getItem("authToken");
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  async getTransactions(): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/user/transactions`, {
      headers: this.getAuthHeaders(),
    });
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    return response.data.body;
  }
}

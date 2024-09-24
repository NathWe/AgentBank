// src/lib/transactions/infra/FakeTransactionService.ts
import { ITransactionService } from "../models/ITransactionService";

export class FakeTransactionService implements ITransactionService {
  async getTransactions(): Promise<any> {
    return [
      {
        id: 1,
        title: "Argent Bank Checking (x8349)",
        amount: 2082.79,
        balance: "Available Balance",
      },
      {
        id: 2,
        title: "Argent Bank Savings (x6712)",
        amount: 10928.42,
        balance: "Available Balance",
      },
      {
        id: 3,
        title: "Argent Bank Credit Card (x8349)",
        amount: 184.3,
        balance: "Current Balance",
      },
    ];
  }
}

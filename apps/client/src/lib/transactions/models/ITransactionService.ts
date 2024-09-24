// src/lib/transactions/models/ITransactionService.ts
export interface ITransactionService {
  getTransactions(): Promise<any>;
}

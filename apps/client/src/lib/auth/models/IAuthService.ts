export interface IAuthService {
  login(
    email: string,
    password: string
  ): Promise<{ user: { firstName: string; lastName: string } }>;
  fetchUserData(): Promise<{ firstName: string; lastName: string }>;
  updateUserData(
    firstName: string,
    lastName: string
  ): Promise<{ firstName: string; lastName: string }>;
}

import { AppDispatch } from "../store";
import { actions } from "../features/auth/reducer";
import {
  fetchUserToken as fetchUserTokenService,
  fetchUserData as fetchUserDataService,
  updateUserData as updateUserDataService,
} from "../../../../service";

type UserLogin = { email: string; password: string };

export const fetchUserToken =
  (userLogin: UserLogin) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const token = await fetchUserTokenService(userLogin);
      dispatch(actions.userTokenResolved(token));
      localStorage.setItem("token", token);
    } catch (error) {
      console.error((error as Error).message);
      dispatch(actions.userTokenRejected((error as Error).message));
    }
  };

export const fetchUserData =
  (token: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const userData = await fetchUserDataService(token);
      dispatch(actions.userDataResolved(userData));
    } catch (error) {
      console.error((error as Error).message);
      dispatch(actions.userDataRejected((error as Error).message));
    }
  };

export const updateUserData =
  (token: string, firstName: string, lastName: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      await updateUserDataService(token, firstName, lastName);
      dispatch(actions.updateUserProfile({ firstName, lastName }));
    } catch (error) {
      console.error((error as Error).message);
      dispatch(actions.userDataRejected((error as Error).message));
    }
  };

export const signOut = () => (dispatch: AppDispatch) => {
  localStorage.clear();
  sessionStorage.clear();
  dispatch(actions.logout());
};

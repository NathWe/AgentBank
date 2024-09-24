// src/lib/CreateStore.ts
import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";

import authReducer from "./auth/slices/authSlice";
import transactionReducer from "./transactions/slices/transactionSlice";
import { IAuthService } from "./auth/models/IAuthService";
import { ITransactionService } from "./transactions/models/ITransactionService";

export interface Dependencies {
  authService: IAuthService;
  transactionService: ITransactionService;
}

const rootReducer = combineReducers({
  auth: authReducer,
  transaction: transactionReducer,
});

export function createStore(
  dependencies: Dependencies,
  initialState?: Partial<RootState>
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
  });
}

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, Dependencies, AnyAction>;

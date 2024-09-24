// src/pages/user/user.tsx
import React, { useEffect } from "react";
import UserName from "../../components/UserName/UserName";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AccountItem from "../../components/AccountItem/AccountItem";
import { PageContainer, Main } from "./user.style";
import { retrieveUserInfo } from "../../lib/auth/usecases/RetrieveUserInfoUseCase";
import { fetchTransactions } from "../../lib/transactions/usecases/FetchTransactionsUseCase";
import { logout } from "../../lib/auth/slices/authSlice";
import { RootState, AppDispatch } from "../../lib/CreateStore";

const User: React.FC = () => {
  const userData = useSelector((state: RootState) => state.auth.user);
  const transactions = useSelector(
    (state: RootState) => state.transaction.list
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User component mounted, userData:", userData);
    if (!userData) {
      dispatch(retrieveUserInfo())
        .unwrap()
        .then(() => {
          dispatch(fetchTransactions());
        })
        .catch(() => {
          console.log("Failed to retrieve user info, logging out");
          localStorage.clear();
          sessionStorage.clear();
          dispatch(logout());
          navigate("/login");
        });
    } else {
      dispatch(fetchTransactions());
    }
  }, [dispatch, navigate, userData]);

  if (!userData) {
    console.log("No user data, returning null");
    return null;
  }

  console.log("Rendering user data:", userData);
  console.log("Rendering transactions data:", transactions);

  return (
    <PageContainer>
      <Main>
        <UserName userData={userData} />
        <h2 className="sr-only">Accounts</h2>
        {transactions.map((transaction) => (
          <AccountItem
            key={transaction.id}
            accountTitle={transaction.title}
            accountAmount={`$${transaction.amount.toFixed(2)}`}
            accountBalance={transaction.balance}
          />
        ))}
      </Main>
    </PageContainer>
  );
};

export default User;

import React, { useEffect } from "react";
import UserName from "../../components/UserName/UserName";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { signOut, fetchUserData } from "../../services/actions";
import { useNavigate } from "react-router-dom";
import AccountItem from "../../components/AccountItem/AccountItem";
import { PageContainer, Main } from "./user.style";

const User: React.FC = () => {
  const userData = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      if (token) {
        dispatch(fetchUserData(token));
      } else {
        localStorage.clear();
        sessionStorage.clear();
        dispatch(signOut());
        navigate("/login");
      }
    }
  }, [dispatch, navigate, token, userData]);

  if (!userData || !token) {
    return null;
  }

  return (
    <PageContainer>
      <Main>
        <UserName userData={userData} token={token} />
        <h2 className="sr-only">Accounts</h2>
        <AccountItem
          accountTitle="Argent Bank Checking (x8349)"
          accountAmount="$2,082.79"
          accountBalance="Available Balance"
        />
        <AccountItem
          accountTitle="Argent Bank Savings (x6712)"
          accountAmount="$10,928.42"
          accountBalance="Available Balance"
        />
        <AccountItem
          accountTitle="Argent Bank Credit Card (x8349)"
          accountAmount="$184.30"
          accountBalance="Current Balance"
        />
      </Main>
    </PageContainer>
  );
};

export default User;

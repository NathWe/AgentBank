// src/components/UserName/UserName.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateUserInfo } from "../../lib/auth/usecases/UpdateUserInfoUseCase";
import { AppDispatch } from "../../lib/CreateStore";
import {
  Header,
  FormChange,
  InputChange,
  ButtonChange,
  DivButtonChange,
  DivInputChange,
} from "./UserName.style";

interface UserNameProps {
  userData: {
    firstName: string;
    lastName: string;
  };
}

const UserName: React.FC<UserNameProps> = ({ userData }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [userName, setUsername] = useState(false);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);

  const showEditProfileForm = () => {
    setUsername(true);
  };

  const name = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(updateUserInfo({ firstName, lastName }));
      setUsername(false);
    } catch (error) {
      console.error("Failed to update user data:", error);
    }
  };

  return userName ? (
    <Header>
      <h1>Welcome back</h1>
      <FormChange onSubmit={name}>
        <DivInputChange>
          <label htmlFor="firstName"></label>
          <InputChange
            type="text"
            name="firstName"
            placeholder=""
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName"></label>
          <InputChange
            type="text"
            name="lastName"
            placeholder=""
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </DivInputChange>
        <DivButtonChange>
          <ButtonChange type="submit">Save</ButtonChange>
          <ButtonChange type="button" onClick={() => setUsername(false)}>
            Cancel
          </ButtonChange>
        </DivButtonChange>
      </FormChange>
    </Header>
  ) : (
    <Header>
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button className="edit-button" onClick={showEditProfileForm}>
        Edit Name
      </button>
    </Header>
  );
};

export default UserName;

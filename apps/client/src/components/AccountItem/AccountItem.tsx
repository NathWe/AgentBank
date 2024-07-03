import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Account,
  AccountContentWrapper,
  AccountTitle,
  AccountAmount,
  AccountBalance,
  TransactionButton,
} from "./AccountItem.style";

interface AccountItemProps {
  accountTitle: string;
  accountAmount: string;
  accountBalance: string;
}

const AccountItem: React.FC<AccountItemProps> = ({
  accountTitle,
  accountAmount,
  accountBalance,
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <Account>
      <AccountContentWrapper>
        <AccountTitle>{accountTitle}</AccountTitle>
        <AccountAmount>{accountAmount}</AccountAmount>
        <AccountBalance>{accountBalance}</AccountBalance>
      </AccountContentWrapper>
      <AccountContentWrapper className="cta">
        <Link to="/transactions">
          <TransactionButton
            className={isButtonClicked ? "transaction-button-clicked" : ""}
            onClick={handleButtonClick}
          >
            View transactions
          </TransactionButton>
        </Link>
      </AccountContentWrapper>
    </Account>
  );
};

AccountItem.propTypes = {
  accountTitle: PropTypes.string.isRequired,
  accountAmount: PropTypes.string.isRequired,
  accountBalance: PropTypes.string.isRequired,
};

export default AccountItem;

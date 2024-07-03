import React from "react";

import {
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from "../Features.style";

const FeaturesMoney: React.FC = () => {
  return (
    <FeatureItem>
      <FeatureIcon src="/img/icon-money.png" alt="Money Icon" />
      <FeatureTitle>More savings means higher rates</FeatureTitle>
      <FeatureText>
        The more you save with us, the higher your interest rate will be!
      </FeatureText>
    </FeatureItem>
  );
};

export default FeaturesMoney;

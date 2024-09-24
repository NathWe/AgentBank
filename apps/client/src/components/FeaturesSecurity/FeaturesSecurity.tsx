import * as React from "react";
import {
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from "../Features.style";

const FeaturesSecurity: React.FC = () => {
  return (
    <FeatureItem>
      <FeatureIcon src="/img/icon-security.png" alt="Security Icon" />
      <FeatureTitle>Security you can trust</FeatureTitle>
      <FeatureText>
        We use top of the line encryption to make sure your data and money is
        always safe.
      </FeatureText>
    </FeatureItem>
  );
};

export default FeaturesSecurity;

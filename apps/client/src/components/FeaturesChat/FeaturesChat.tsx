import React from "react";
import {
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
} from "../Features.style";

const FeaturesChat: React.FC = () => {
  return (
    <FeatureItem>
      <FeatureIcon src="/img/icon-chat.png" alt="Chat Icon" />
      <FeatureTitle>You are our #1 priority</FeatureTitle>
      <FeatureText>
        Need to talk to a representative? You can get in touch through our 24/7
        chat or through a phone call in less than 5 minutes.
      </FeatureText>
    </FeatureItem>
  );
};

export default FeaturesChat;

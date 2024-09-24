import * as React from "react";
import Banner from "../../components/banner/banner";
import FeaturesChat from "../../components/FeaturesChat/FeaturesChat";
import FeaturesMoney from "../../components/FeaturesMoney/FeaturesMoney";
import FeaturesSecurity from "../../components/FeaturesSecurity/FeaturesSecurity";
import { PageContainer, Features } from "./home.style";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <Banner />
      <Features>
        <h2 className="sr-only">Features</h2>
        <FeaturesChat />
        <FeaturesMoney />
        <FeaturesSecurity />
      </Features>
    </PageContainer>
  );
};

export default Home;

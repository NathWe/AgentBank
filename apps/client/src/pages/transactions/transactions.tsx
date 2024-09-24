import * as React from "react";
import { Link } from "react-router-dom";
import { PageContainer, MaintenanceMessage } from "./transactions.style";

const Transactions: React.FC = () => {
  return (
    <PageContainer>
      <MaintenanceMessage>Page en cours de maintenance</MaintenanceMessage>
      <p>
        Nous sommes en train de mettre à jour notre Page transactions. Nous
        serons de retour bientôt.
      </p>
      <p>Merci pour votre patience.</p>
      <Link to="/">Retour à l'accueil</Link>
    </PageContainer>
  );
};

export default Transactions;

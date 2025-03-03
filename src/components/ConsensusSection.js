import React, { useEffect, useState } from "react";
import "./ConsensusSection.css";

const validators = ["Validator A", "Validator B", "Validator C"];

const ConsensusSection = ({ pendingTransaction, confirmTransaction }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let timer;
    // Lancer la simulation du consensus si une transaction est en attente
    if (pendingTransaction) {
      setCurrentStep(0);
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < validators.length) {
            return prev + 1;
          } else {
            clearInterval(timer);
            // Consensus atteint : confirmation de la transaction
            confirmTransaction(pendingTransaction.id);
            return prev;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [pendingTransaction, confirmTransaction]);

  return (
    <div className="consensus-section">
      <h2>Validation du Consensus</h2>
      {pendingTransaction ? (
        <div>
          <p>
            Validation de la transaction :{" "}
            <strong>{pendingTransaction.id}</strong>
          </p>
          <ul>
            {validators.map((validator, index) => (
              <li key={validator}>
                {validator}:{" "}
                {index < currentStep ? "✅ Approuvé" : "En attente..."}
              </li>
            ))}
          </ul>
          {currentStep === validators.length && (
            <p className="success">
              Consensus atteint ! La transaction est confirmée.
            </p>
          )}
        </div>
      ) : (
        <p>Aucune transaction en attente de validation.</p>
      )}
    </div>
  );
};

export default ConsensusSection;

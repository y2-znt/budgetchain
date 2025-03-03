import React, { useEffect, useState } from "react";
import "./ConsensusSection.css";

const validators = ["Validator A", "Validator B", "Validator C"];

const ConsensusSection = ({
  pendingTransaction,
  confirmTransaction,
  isLoading,
}) => {
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
      {isLoading ? (
        <div className="loader">Recherche de transactions à valider...</div>
      ) : pendingTransaction ? (
        <div className="consensus-container">
          <p>
            Validation de la transaction :{" "}
            <strong>{pendingTransaction.id}</strong>
          </p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(currentStep / validators.length) * 100}%` }}
            ></div>
          </div>
          <ul className="validators-list">
            {validators.map((validator, index) => (
              <li
                key={validator}
                className={index < currentStep ? "validated" : ""}
              >
                {validator}:{" "}
                {index < currentStep ? (
                  <span className="approved">✅ Approuvé</span>
                ) : (
                  <span className="waiting">
                    <span className="dot-animation">En attente</span>
                  </span>
                )}
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
        <div className="empty-state">
          <p>Aucune transaction en attente de validation.</p>
          <p className="hint">
            Une nouvelle transaction sera générée automatiquement...
          </p>
        </div>
      )}
    </div>
  );
};

export default ConsensusSection;

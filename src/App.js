import React, { useEffect, useState } from "react";
import "./App.css";
import ConsensusSection from "./components/ConsensusSection";
import TransactionTable from "./components/TransactionTable";
import initialTransactions from "./data/initialTransactions";

function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [pendingTransaction, setPendingTransaction] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement initial
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Simulation : ajouter une nouvelle transaction toutes les 10 secondes
    const interval = setInterval(() => {
      setIsLoading(true); // Activer le loading avant d'ajouter une transaction

      setTimeout(() => {
        const newTx = generateDummyTransaction();
        setTransactions((prev) => [newTx, ...prev]);
        setPendingTransaction(newTx);
        setIsLoading(false); // Désactiver le loading après avoir ajouté la transaction
      }, 800); // Délai simulé pour l'ajout d'une transaction
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const generateDummyTransaction = () => {
    const id = "TX" + Math.floor(Math.random() * 10000);
    const date = new Date().toLocaleString();
    const amount = Math.floor(Math.random() * 1000) + 100;
    const beneficiaries = ["Alice", "Bob", "Charlie", "Delta Corp"];
    const beneficiary =
      beneficiaries[Math.floor(Math.random() * beneficiaries.length)];
    return { id, date, amount, beneficiary, status: "Pending" };
  };

  // Fonction pour mettre à jour le statut d'une transaction en "Confirmed"
  const confirmTransaction = (txId) => {
    setTransactions((prev) =>
      prev.map((tx) => (tx.id === txId ? { ...tx, status: "Confirmed" } : tx))
    );
    setPendingTransaction(null);
  };

  return (
    <div className="App">
      <h1>BudgetChain PoC</h1>
      {isLoading && (
        <div className="global-loader">Chargement des données...</div>
      )}
      <div className="container">
        <TransactionTable transactions={transactions} isLoading={isLoading} />
        <ConsensusSection
          pendingTransaction={pendingTransaction}
          confirmTransaction={confirmTransaction}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;

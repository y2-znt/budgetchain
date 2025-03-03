import React from "react";
import "./TransactionTable.css";

const TransactionTable = ({ transactions, isLoading }) => {
  return (
    <div className="transaction-table">
      <h2>Ledger des Transactions</h2>
      {isLoading ? (
        <div className="loader">Mise à jour du ledger...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Montant</th>
              <th>Bénéficiaire</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr
                key={tx.id}
                className={tx.status === "Pending" ? "pending-row" : ""}
              >
                <td>{tx.id}</td>
                <td>{tx.date}</td>
                <td>{tx.amount} €</td>
                <td>{tx.beneficiary}</td>
                <td>
                  <span className={`status-badge ${tx.status.toLowerCase()}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionTable;

import React from "react";
import "./TransactionTable.css";

const TransactionTable = ({ transactions }) => {
  return (
    <div className="transaction-table">
      <h2>Ledger des Transactions</h2>
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
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.date}</td>
              <td>{tx.amount} €</td>
              <td>{tx.beneficiary}</td>
              <td>{tx.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;

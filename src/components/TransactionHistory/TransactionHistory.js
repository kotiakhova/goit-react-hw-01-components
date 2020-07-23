import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory ({items}) {
    return (
        <table className="transaction-history">
  <thead>
    <tr className={styles.mainRow}
    >
      <th className={styles.mainCell}>Type</th>
      <th className={styles.mainCell}>Amount</th>
      <th className={styles.mainCell}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {items.map(transaction => (
          <tr key={transaction.id} className={styles.row}>
          <td className={styles.cell}>{transaction.type}</td>
          <td className={styles.cell}>{transaction.amount}</td>
          <td className={styles.cell}>{transaction.currency}</td>
        </tr>
    ))}
  </tbody>
</table>

    )
}

  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };
export default TransactionHistory;
import React, { Component } from 'react';
import currencyFormat from '../Format/Currency';
import dateFormat from '../Format/Date';

import './Transactions.css';

class Transactions extends Component {

	getTransactionBorderStyle(borderLeftColor) {
		return { borderLeftColor };
	}

	getList() {
		return this.props.data.map((item, index) => (
			<div key={index} className="pt-transaction" style={this.getTransactionBorderStyle(item.categoryCode)}>
				<span className="pt-transaction-date">{dateFormat(new Date(item.transactionDate))}</span>
				<img src={item.merchantLogo} alt={item.merchant} />
				<p className="pt-transaction-to">
					<span className="pt-transaction-merchant">{item.merchant}</span>
					<span className="pt-transaction-type">{item.transactionType}</span>
				</p>
				<span className="pt-transaction-amount">{currencyFormat(item.amount)}</span>
			</div>
		));
	}

	render() {
		return (
			<div className="pt-transactions">
				{this.getList()}
			</div>
		);
	}
}

export default Transactions;

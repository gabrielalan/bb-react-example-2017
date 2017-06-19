import React, { Component } from 'react';
import PropTypes from 'prop-types';
import currencyFormat from '../Format/Currency';

import './Transfer.css';

class Transfer extends Component {

	handleSubmit(event) {
		this.props.onSubmit({
			to: this.to.value,
			from: this.from.value,
			amount: this.amount.value
		});

		event.preventDefault();
	}

	render() {
		return (
			<div className="pt-form">
				<form action="#" onSubmit={this.handleSubmit.bind(this)}>
					<div className="pt-input-ct">
						<label htmlFor="from">From account</label>
						<select name="from" id="from" disabled={true} ref={(input) => this.from = input}>
							<option value="Free Checking (4623)">
								Free Checking (4623) - Available {currencyFormat(this.props.transactions.available)}
							</option>
						</select>
					</div>
					<div className="pt-input-ct">
						<label htmlFor="to">To account</label>
						<input type="text" name="to" id="to" required="required" placeholder="Georgia Power Electric Company" ref={(input) => this.to = input}/>
					</div>
					<div className="pt-input-ct">
						<label htmlFor="amount">Amount</label>
						<div className="pt-currency-input">
							<span className="pt-currency-symbol">$</span>
							<input type="number"
								   step="any"
								   min="0"
								   name="amount"
								   id="amount"
								   required="required"
								   placeholder="0.00"
								   ref={(input) => this.amount = input}/>
						</div>
					</div>
					<div className="pt-button-ct">
						<button className="pt-btn" type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

Transfer.propTypes = {
	transactions: PropTypes.object,
	onSubmit: PropTypes.func.isRequired
};

export default Transfer;

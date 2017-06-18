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
							<option value="1">Free Checking (4623) - Available {currencyFormat(-2343.43)}</option>
						</select>
					</div>
					<div className="pt-input-ct">
						<label htmlFor="to">To account</label>
						<input type="text" name="to" id="to" placeholder="Georgia Power Electric Company" ref={(input) => this.to = input}/>
					</div>
					<div className="pt-input-ct">
						<label htmlFor="amount">Amount</label>
						<input type="number" name="amount" id="amount" placeholder="$ 0.00" ref={(input) => this.amount = input}/>
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
	onSubmit: PropTypes.func.isRequired
};

export default Transfer;

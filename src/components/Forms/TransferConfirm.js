import React, { Component } from 'react';
import PropTypes from 'prop-types';
import currencyFormat from '../Format/Currency';

import './Transfer.css';

class TransferConfirm extends Component {

	onConfirm() {
		this.props.onAction(true);
	}

	onCancel() {
		this.props.onAction(false);
	}

	render() {
		return (
			<div className="pt-form">
				<div className="pt-input-ct">
					<label htmlFor="from">From account</label>
					<p className="pt-fake-input">{this.props.data.from}</p>
				</div>
				<div className="pt-input-ct">
					<label htmlFor="to">To account</label>
					<p className="pt-fake-input">{this.props.data.merchant}</p>
				</div>
				<div className="pt-input-ct">
					<label htmlFor="amount">Amount</label>
					<p className="pt-fake-input">{currencyFormat(this.props.data.amount)}</p>
				</div>
				<div className="pt-button-ct">
					<button className="pt-btn" onClick={this.onConfirm.bind(this)}>Confirm</button>
					<button className="pt-btn pt-btn-white" onClick={this.onCancel.bind(this)}>Cancel</button>
				</div>
			</div>
		);
	}
}

TransferConfirm.propTypes = {
	data: PropTypes.object,
	onAction: PropTypes.func.isRequired
};

export default TransferConfirm;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sort } from '../../store/actions/transactions';
import './TransactionsSort.css';

import sortIcon from '../../assets/icons/sort.svg';
import sortReverseIcon from '../../assets/icons/sort-reverse.svg';

const reverDirection = {
	'ASC': 'DESC',
	'DESC': 'ASC',
};

class TransactionsSort extends Component {

	getCurrentSortDirection() {
		return this.props.store.getState().transactions.sort.direction;
	}

	getCurrentSortKey() {
		return this.props.store.getState().transactions.sort.key;
	}

	createHandler(value, direction) {
		return () => this.props.store.dispatch(sort(value, direction));
	}

	getButtonClasses(key) {
		let classes = 'pt-btn pt-btn-white';

		return classes + (key === this.getCurrentSortKey() ? ' pt-active' : '');
	}

	getIcon() {
		const direction = this.getCurrentSortDirection();

		return direction === 'DESC' ? sortReverseIcon : sortIcon;
	}

	getReverseDirection() {
		return reverDirection[this.getCurrentSortDirection()];
	}

	render() {
		return (
			<div className="pt-sort-btns">
				<p>Sort by:</p>
				<div className="pt-button-group">
					<button className={this.getButtonClasses('transactionDate')}
							onClick={this.createHandler('transactionDate')}>Date</button>
					<button className={this.getButtonClasses('merchant')}
							onClick={this.createHandler('merchant', 'ASC')}>To</button>
					<button className={this.getButtonClasses('amount')}
							onClick={this.createHandler('amount')}>Amount</button>
				</div>
				<button className="pt-btn pt-btn-white pt-sort-direction"
						onClick={this.createHandler(this.getCurrentSortKey(), this.getReverseDirection())}>
					<img src={this.getIcon()} alt="Sort direction"/>
				</button>
			</div>
		);
	}
}

TransactionsSort.propTypes = {
	store: PropTypes.object.isRequired
};

export default TransactionsSort;
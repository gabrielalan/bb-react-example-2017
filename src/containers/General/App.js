import React, { Component } from 'react';
import Header from '../../components/Header';
import Panel from '../../components/Panel/Panel';
import Modal from '../../components/Overlay/Modal';
import TransferForm from '../../components/Forms/Transfer';
import TransferConfirm from '../../components/Forms/TransferConfirm';
import Transactions from '../../components/Transactions/Transactions';
import TransactionsSort from '../../components/Transactions/TransactionsSort';

import { setTransferToConfirm, confirmTransfer, search } from '../../store/actions/transactions';

import { search as searchFilter } from '../../logic/filter';
import sort from '../../logic/sort';

import arrowsIcon from '../../assets/icons/arrows.jpg';
import briefcaseIcon from '../../assets/icons/briefcase.jpg';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchValue: ''
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			searchValue: nextProps.store.getState().transactions.search
		})
	}

	getTransactions() {
		return this.props.store.getState().transactions;
	}

	getTransactionsList() {
		return sort(
			this.getTransactions().sort.key,
			this.getTransactions().sort.direction,
			searchFilter(this.getTransactions().search, this.getTransactions().data)
		);
	}

	onSubmit(data) {
		this.props.store.dispatch(setTransferToConfirm(data));
	}

	onConfirmAction(confirmed) {
		this.props.store.dispatch(confirmTransfer(confirmed));
	}

	getOnGoingTransfer() {
		return this.getTransactions().onGoingTransfer;
	}

	hasOnGoingTransfer() {
		return this.getOnGoingTransfer() !== null;
	}

	onSearch(event) {
		this.props.store.dispatch(search(event.target.value));
	}

	render() {
		return (
			<div className="pt-container">
				<Header/>

				<div className="container">
					<div className="pt-main-columns">
						<Panel id="form" icon={arrowsIcon} title="Make a Transfer">
							<TransferForm onSubmit={this.onSubmit.bind(this)} transactions={this.getTransactions()}/>
						</Panel>
						<Panel id="list" icon={briefcaseIcon} title="Recent Transactions">
							<div className="pt-input-ct">
								<input type="text" placeholder="Search..." value={this.state.searchValue} onChange={this.onSearch.bind(this)} />
							</div>
							<TransactionsSort store={this.props.store} />
							<Transactions data={this.getTransactionsList()}/>
						</Panel>
					</div>
				</div>

				<Modal show={this.hasOnGoingTransfer()}>
					<Panel id="confirm" icon={arrowsIcon} title="Confirm the Transfer">
						<TransferConfirm data={this.getOnGoingTransfer()} onAction={this.onConfirmAction.bind(this)} />
					</Panel>
				</Modal>
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import Header from '../../components/Header';
import Panel from '../../components/Panel/Panel';
import Modal from '../../components/Overlay/Modal';
import TransferForm from '../../components/Forms/Transfer';
import TransferConfirm from '../../components/Forms/TransferConfirm';
import Transactions from '../../components/Transactions/Transactions';

import { setTransferToConfirm, confirmTransfer } from '../../store/actions/transactions';

import arrowsIcon from '../../assets/icons/arrows.jpg';
import briefcaseIcon from '../../assets/icons/briefcase.jpg';

import './App.css';

class App extends Component {
	getTransactions() {
		return this.props.store.getState().transactions;
	}

	getTransactionsList() {
		return this.getTransactions().data;
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
